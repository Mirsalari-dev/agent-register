import { TMainAutocompleteProps } from "@/components/UI/inputs/autocomplete/mainAutocomplete.types";

export interface ICityInput
  extends Partial<Omit<TMainAutocompleteProps, "renderInput">> {
  label?: string | undefined;
  error?: boolean | undefined;
  province?: number | string;
  isMine?: boolean;
  required?: boolean;

}
