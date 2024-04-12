/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { ICityInput } from "./cityInput.types";
import { getCities } from "./getCities";
import MainAutocomplete from "@/components/UI/inputs/autocomplete/mainAutocomplete";
import MainInput from "@/components/UI/inputs/main/mainInput";

const CityInput: FC<ICityInput> = ({
  label,
  options: optionsOverwrite,
  error,
  province,
  required = false,
  ...props
}) => {
  const { data: cities, isLoading } = useQuery({
    queryFn: () => getCities({ province: province || "*" }),
    queryKey: ["citiesList", province],
    enabled: !!province,
  });

  return (
    <MainAutocomplete
      options={cities ?? []}
      renderInput={(params) => (
        <MainInput
          {...params}
          label={label ?? "شهر"}
          error={error}
          required={required}
        />
      )}
      isOptionEqualToValue={(option, value) => option?.value === value?.value}
      getOptionLabel={(option) => option?.name || ""}
      loading={isLoading}
      {...props}
    />
  );
};

export default CityInput;
