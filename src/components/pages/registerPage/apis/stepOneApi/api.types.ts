export interface ICreateOtpResponse {
  status_code: number;
  message: string;
  is_success: boolean;
  error_details: null | string;
  response: string;
}
export interface ICreateOtpProps {
  phone_number: string;
}
