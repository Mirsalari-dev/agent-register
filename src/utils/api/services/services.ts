import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IApi, responseRefresh } from "./services.types";
import { getTokenFromCookie } from "@/utils/cookies/token";

// Create Axios Instance
export const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use((req) => {
    const access_token = getTokenFromCookie();

    req.headers.Authorization = access_token ? `jwt ${access_token}` : "";

    return req;
  });

  return instance;
};

export class Api implements IApi {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly axios: AxiosInstance) {}
  get<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.get<T>(url, config);
  }
  post<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(url, body, config);
  }
  delete<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.delete<T>(url, config);
  }
  put<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.put<T>(url, body, config);
  }
  patch<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.patch<T>(url, body, config);
  }

  defaults = this.axios.defaults;
}
