import { mainApi } from "@/utils/api/api";
import {
  IGetInsuranceCodeProps,
  IGetInsuranceCodeResponse,
  ISignupCodeProps,
  ISignupCodeResponse,
  IValidateAgentCodeProps,
  IValidateAgentCodeResponse,
} from "./api.types";

export const validateAgentCode = async ({
  agent_code,
}: IValidateAgentCodeProps): Promise<IValidateAgentCodeResponse> => {
  const response = await mainApi.post<IValidateAgentCodeResponse>(
    `/DEY/agent/verification/signup/check_agency_code/`,
    { agent_code }
  );
  return response.data;
};

export const getInsuranceCode = async ({
  province,
  insurance,
  name,
}: IGetInsuranceCodeProps): Promise<IGetInsuranceCodeResponse> => {
  const response = await mainApi.get<IGetInsuranceCodeResponse>(
    "/selection_item/insurance_branch/wop_list/",
    {
      params: { province, insurance, name },
    }
  );
  return response?.data;
};
export const signupCode = async (
  values: ISignupCodeProps
): Promise<ISignupCodeResponse> => {
  const response = await mainApi.post<ISignupCodeResponse>(
    `/DEY/agent/verification/signup/`,
    values
  );
  return response.data;
};
