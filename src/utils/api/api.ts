const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

import { Api, createAxiosInstance } from "./services/services";

// iranian poshesh api
export const mainApi = new Api(createAxiosInstance(BASE_URL));
