import { mainApi } from "@/utils/api/api";
import { IUserStatus } from "./api.types";

export const userStatus = async (): Promise<IUserStatus> => {
  const response = await mainApi.get<IUserStatus>("/DEY/agent/app_user_status/");
  return response?.data;
};
