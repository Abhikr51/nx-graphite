import { useState, useCallback, useEffect, useMemo } from "react";
import ApiMiddleware from ".";
import apiErrorHandler from "./apiErrorHandler";
import { ApiError, ApiRequestConfig, ApiState } from "./types";

const useApiRequest = <T = unknown>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: unknown,
  configs?: ApiRequestConfig
): ApiState<T> => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const middleware = useMemo(() => new ApiMiddleware(configs?.overriddenConfig), [
    configs?.overriddenConfig,
  ]);

  const load = useCallback(async () => {
    if (!responseData) setLoading(true);
    setError(null);
    try {
      const result = await middleware.request<T>({
        method,
        url,
        data,
        configs: configs?.axiosConfigs,
      });
      
      if (JSON.stringify(result) !== JSON.stringify(responseData)) {
        setResponseData(result);
      }
    } catch (err) {
      setError(apiErrorHandler(err)); // ✅ Handle API errors properly
    } finally {
      setLoading(false);
    }
  }, [method, url, data, configs, responseData, middleware]);

  //load api for first time
  useEffect(() => {
    load()
  },[])

  //refresh
  useEffect(() => {
    const refreshInterval = middleware.mergedConfigs.refreshInterval;
    if (refreshInterval && refreshInterval > 1000) {
      const interval = setInterval(load, refreshInterval);
      return () => clearInterval(interval);
    }
    return ()=>{}
  }, [middleware, load]);

  return { data: responseData, error, loading, load };
};

export default useApiRequest;
