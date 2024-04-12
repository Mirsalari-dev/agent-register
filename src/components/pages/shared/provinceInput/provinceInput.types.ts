import { TMainAutocompleteProps } from "@/components/UI/inputs/autocomplete/mainAutocomplete.types";

export interface IProvinceInput
  extends Partial<Omit<TMainAutocompleteProps, "renderInput">> {
  label?: string | undefined;
  error?: boolean | undefined;
}
export interface IGetProvincesResponse {
  id: null | number;
  is_active: boolean;
  name: string;
  code: string;
  name_split: string;
  creator_user: {
    id: null | number;
    first_name: string;
    last_name: string;
    username: string;
  };
  country: null | number;
}
