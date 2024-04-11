export interface IValidateOtpResponse {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null | string;
  response: string;
}

export interface IValidateOtpProps {
  phone_number: string;
  code: string;
}
