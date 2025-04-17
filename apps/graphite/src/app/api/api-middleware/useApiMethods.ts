import { ApiRequestConfig } from "./types";
import useApiRequest from "./useApiRequest";

// cons and pros b/w useFetcher and axios
//pass default object
// ✅ Specific API Methods

const Api = {
  get : <T = unknown>(url: string,apiName:string, configs?: ApiRequestConfig) =>
    useApiRequest<T>("get", url, apiName , undefined, configs),
  
  post : <T = unknown>(url: string,apiName:string, data?: unknown, configs?: ApiRequestConfig) =>
    useApiRequest<T>("post", url, apiName , data, configs),
  
  put : <T = unknown>(url: string,apiName:string, data?: unknown, configs?: ApiRequestConfig) =>
    useApiRequest<T>("put", url, apiName , data, configs),
  
  delete : <T = unknown>(url: string,apiName:string, configs?: ApiRequestConfig) =>
    useApiRequest<T>("delete", url, apiName , undefined, configs),
}

export default Api