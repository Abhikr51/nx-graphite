import {  useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ApiMiddleware from ".";
import apiErrorHandler from "./apiErrorHandler";
import { ApiRequestConfig } from "./types";
import { RootState } from "../../store";
import { ApiActions } from "../../store/middlewareSlice";
import type { AxiosResponse } from "axios";
import type { ApiError } from "./types";

const useApiRequest = <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  apiName: string,
  data?: unknown,
  configs?: ApiRequestConfig
) => {
  const dispatch = useDispatch();

  // Optional chaining to avoid undefined crash
  const currentState = useSelector(
    (state: RootState) => state.api[apiName]
  ) as {
    responseData: AxiosResponse<T> | null;
    loading: boolean;
    error: ApiError | null;
  } | undefined;

  const middleware = useMemo(() => new ApiMiddleware(configs?.overriddenConfig), [
    configs?.overriddenConfig,
  ]);

  const load = useCallback(async () => {
    if (!currentState) {
      dispatch(ApiActions.setApiLoading({ apiName, loading: true }));
    }

    try {
      const result = await middleware.request<T>({
        method,
        url,
        data,
        configs: configs?.axiosConfigs,
      });

      if (JSON.stringify(result) !== JSON.stringify(currentState?.responseData)) {
        dispatch(
          ApiActions.initApiStore({
            apiName,
            responseData: result as AxiosResponse,
            loading: false,
            error: null,
          })
        );
      }
    } catch (err) {
      dispatch(ApiActions.setApiError({ apiName, error: apiErrorHandler(err) }));
    } finally {
      dispatch(ApiActions.setApiLoading({ apiName, loading: false }));
    }
  }, [method, url, data, configs, currentState, middleware, dispatch, apiName]);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const refreshInterval = middleware.mergedConfigs.refreshInterval;
    if (refreshInterval && refreshInterval > 1000) {
      const interval = setInterval(load, refreshInterval);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [middleware, load]);

  return {
    data: currentState?.responseData?.data ?? null,
    error: currentState?.error ?? null,
    loading: currentState?.loading ?? false,
    responseData: currentState?.responseData ?? null,
    load,
  };
};

export default useApiRequest;
