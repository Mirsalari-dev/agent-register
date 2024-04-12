import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { IProvinceInput } from "./provinceInput.types";
import { getProvinces } from "./getProvinces";
import MainAutocomplete from "@/components/UI/inputs/autocomplete/mainAutocomplete";
import MainInput from "@/components/UI/inputs/main/mainInput";

const ProvinceInput: FC<IProvinceInput> = ({
  label,
  options: optionsOverwrite,
  error,
  ...props
}) => {

  /// Ger provinces from Api
  const { data: provinces, isLoading } = useQuery({
    queryFn: getProvinces,
    queryKey: ["provincesList"],
    enabled: Boolean(!optionsOverwrite),
  });

  return (
    <MainAutocomplete
      options={provinces ?? []}
      renderInput={(params) => (
        <MainInput {...params} label={label ?? "استان"} error={error} />
      )}
      isOptionEqualToValue={(option, value) => option?.value === value?.value}
      getOptionLabel={(option) => option?.name || ""}
      loading={isLoading}
      {...props}
    />
  );
};

export default ProvinceInput;
