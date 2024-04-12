import MainInput from "@/components/UI/inputs/main/mainInput";
import React from "react";
import { IAddressProps } from "./address.types";

const Address = ({ formik }: IAddressProps) => {
  return (
    <MainInput
      label="آدرس"
      required
      multiline
      rows={4}
      {...formik.getFieldProps("address")}
      error={!!(formik.errors.address && formik.touched.address)}
      helperText={
        !!(formik.errors.address && formik.touched.address) &&
        "آدرس خود را وارد کنید"
      }
    />
  );
};

export default Address;
