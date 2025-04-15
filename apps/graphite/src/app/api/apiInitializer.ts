import ApiMiddleware  from "./api-middleware";
import { DefaultsApiConfigs } from "./api-middleware/types";
import { BASE_URL } from "../app-confings";
const apiInitializer = ()=>{
  const defaultApiConfig: DefaultsApiConfigs = {
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  // Apply default configurations to the API middleware
  ApiMiddleware.setDefaultConfig(defaultApiConfig);
}

export default apiInitializer