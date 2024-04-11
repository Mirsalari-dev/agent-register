import { mainApi } from "@/utils/api/api";
import { ICreateOtpProps, ICreateOtpResponse } from "./api.types";

export const createOtp = async ({
  phone_number,
}: ICreateOtpProps): Promise<ICreateOtpResponse> => {
  const response = await mainApi.post<ICreateOtpResponse>(
    `/DEY/agent/verification/signup/create_otp/`,
    { phone_number }
  );
  return response.data;
};
