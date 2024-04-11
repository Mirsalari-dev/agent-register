import { mainApi } from "@/utils/api/api";

export const createOtp = async ({
  phone_number,
}: {
  phone_number: string;
}): Promise<unknown> => {
  const response = await mainApi.post<unknown>(
    `/dey/agent/veriﬁcation/signup/create_otp/`,
    { phone_number }
  );
  return response.data;
};