import {
  ICounty,
  IProvince,
} from "@/hooks/forms/useConfirmForm/useConfirmForm.types";

export interface IValidateAgentCodeProps {
  agent_code: string;
}
export interface IValidateAgentCodeResponse {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: unknown;
  response: unknown;
}

export interface IGetInsuranceCodeProps {
  province: string | number;
  insurance: string;
  name: string | number;
}
export interface IGetInsuranceCodeResponse {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: unknown;
  response:
    | {
        id: number;
        name: string;
        insurance: number;
        province: number;
        county: number;
      }[]
    | null;
}

export interface ISignupCodeProps {
  first_name: string;
  last_name: string;
  address: string;
  agency_type: string;
  agent_code: string;
  city_code: string;
  county: number | null;
  insurance_branch: number | null;
  phone: string;
  province: number | null;
  name: string;
  phone_number: string | string[] | undefined;
}

export interface ISignupCodeResponse {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: unknown;
  response: {
    refresh: string;
    access: string;
  };
}
