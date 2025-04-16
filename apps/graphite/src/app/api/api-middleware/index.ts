import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { DefaultsApiConfigs } from "./types";

class ApiMiddleware {
  private static defaultConfig: DefaultsApiConfigs = {
    baseURL: "",
    timeout: 15000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    refreshInterval: undefined,
  };

  private axiosInstance: AxiosInstance;
  mergedConfigs:DefaultsApiConfigs
  constructor(config?: Partial<DefaultsApiConfigs>) {
    // Merge provided config with default config
    const mergedConfig = { 
      ...ApiMiddleware.defaultConfig, 
      ...(config || {}) 
    };

    // Create axios instance
    this.axiosInstance = axios.create(mergedConfig);
    this.mergedConfigs = mergedConfig
    this.addInterceptors()
  }

  private addInterceptors() {
    // 🔹 Request Interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        console.log("Outgoing Request:", config);
        // Example: Add auth token dynamically
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
      }
    );

    // 🔹 Response Interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log("Response Received:", response);
        return response;
      },
      (error) => {
        console.error("Response Error:", error);
        // Example: Handle 401 Unauthorized globally
        if (error.response?.status === 401) {
          console.warn("Unauthorized! Redirecting to login...");
          window.location.href = "/login"; // Redirect to login
        }
        return Promise.reject(error);
      }
    );
  }
  // ✅ Set Default Configurations
  static setDefaultConfig(config: Partial<DefaultsApiConfigs>) {
    this.defaultConfig = { ...this.defaultConfig, ...config };
  }

  // ✅ Request Method With Strong Typing
  async request<T = AxiosResponse>({
    method,
    url,
    data,
    configs,
  }: {
    method: "get" | "post" | "put" | "delete";
    url: string;
    data?: unknown;
    configs?: AxiosRequestConfig;
  }): Promise<T> {
    try {
      const response = await this.axiosInstance.request<T>({
        method,
        url,
        data,
        ...configs,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiMiddleware;
