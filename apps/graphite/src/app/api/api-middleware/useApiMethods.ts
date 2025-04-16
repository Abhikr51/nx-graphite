import { ApiRequestConfig } from "./types";
import useApiRequest from "./useApiRequest";

// cons and pros b/w useFetcher and axios
//pass default object
// ✅ Specific API Methods

const Api = {
  get : <T = unknown>(url: string, configs?: ApiRequestConfig) =>
    useApiRequest<T>("get", url, undefined, configs),
  
  post : <T = unknown>(url: string, data?: unknown, configs?: ApiRequestConfig) =>
    useApiRequest<T>("post", url, data, configs),
  
  put : <T = unknown>(url: string, data?: unknown, configs?: ApiRequestConfig) =>
    useApiRequest<T>("put", url, data, configs),
  
  delete : <T = unknown>(url: string, configs?: ApiRequestConfig) =>
    useApiRequest<T>("delete", url, undefined, configs),
}

export default Api