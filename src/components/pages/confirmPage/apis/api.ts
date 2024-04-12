import { mainApi } from "@/utils/api/api";
import axios from "axios";

export const validateAgentCode = async ({
  agent_code,
}: {
  agent_code: string;
}): Promise<unknown> => {
  const response = await mainApi.post<unknown>(
    `/DEY/agent/verification/signup/check_agency_code/`,
    { agent_code }
  );
  return response.data;
};

export const getInsuranceCode = async ({
  province,
  insurance,
  name,
}: any): Promise<any> => {
  const response = await axios.get<any>(
    "https://stage-api.sanaap.co/api/v2/app/selection_item/insurance_branch/wop_list/",
    {
      params: { province, insurance, name },
    }
  );
  return response?.data;
};
