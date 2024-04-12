import MainInput from "@/components/UI/inputs/main/mainInput";
import React from "react";
import { IPhoneProps } from "./phone.types";
import { Stack } from "@mui/material";

const Phone = ({ formik }: IPhoneProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <MainInput
        label="تلفن ثابت"
        required
        sx={{ width: "75%" }}
        {...formik.getFieldProps("phone")}
        error={formik.touched.phone && !!formik.errors.phone}
      />
      <MainInput
        label="کد"
        sx={{ width: "25%" }}
        required
        {...formik.getFieldProps("city_code")}
        error={formik.touched.city_code && !!formik.errors.city_code}
      />
    </Stack>
  );
};

export default Phone;
