import React, { useEffect } from "react";
import { IBranchCodeProps } from "./BranchCode.types";
import { useQuery } from "@tanstack/react-query";
import { getInsuranceCode } from "../../apis/api";
import MainAutocomplete from "@/components/UI/inputs/autocomplete/mainAutocomplete";
import MainInput from "@/components/UI/inputs/main/mainInput";

const BranchCode = ({ formik }: IBranchCodeProps) => {
  const { data: insurance_branch, refetch } = useQuery({
    queryFn: () =>
      getInsuranceCode({
        province: formik.values?.province?.id,
        insurance: "DEY",
        name: formik.values?.insurance_branch?.id,
      }),
    queryKey: ["insurance_branch", formik.values?.province?.id],
    enabled: Boolean(formik.values?.province?.id),
  });

  // Use useEffect to trigger refetch on insurance_branch.name change
  useEffect(() => {
    if (formik.values.insurance_branch.name !== "") {
      refetch();
    }
  }, [formik.values.insurance_branch.name, refetch]); // Include refetch in dependency array

  return (
    <MainAutocomplete
      options={insurance_branch?.response ?? []}
      value={formik.values.insurance_branch}
      onChange={(_, value) => formik.setFieldValue("insurance_branch", value)}
      onBlur={formik.handleBlur}
      disabled={Boolean(!formik.values.province?.id)}
      renderInput={(params) => (
        <MainInput
          {...params}
          label={"شعبه بیمه"}
          error={Boolean(
            formik.errors?.insurance_branch?.id &&
              formik.touched.insurance_branch
          )}
          value={formik.values.insurance_branch.name}
          onChange={(e) =>
            formik.setFieldValue("insurance_branch", {
              name: e.target.value,
            })
          }
          helperText={
            Boolean(
              formik.errors?.insurance_branch?.id &&
                formik.touched.insurance_branch
            ) && "شعبه بیمه خود را مشخص کنید"
          }
          required
        />
      )}
      isOptionEqualToValue={(option, value) => option?.value === value?.value}
      getOptionLabel={(option) => option?.name || ""}
    />
  );
};

export default BranchCode;
