import { mainApi } from "@/utils/api/api";
import { IValidateOtpProps, IValidateOtpResponse } from "./api.types";

export const validateOtp = async ({
  phone_number,
  code,
}: IValidateOtpProps): Promise<IValidateOtpResponse> => {
  const response = await mainApi.post<IValidateOtpResponse>(
    `/DEY/agent/verification/signup/validate_otp/`,
    { phone_number, code }
  );
  return response.data;
};
