/* eslint-disable no-unused-vars */
import { RefObject } from "react";

export interface IOtpInputProps {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  isLoading?: boolean;
  inputRef: RefObject<HTMLInputElement>;
  focus: () => void;
}
