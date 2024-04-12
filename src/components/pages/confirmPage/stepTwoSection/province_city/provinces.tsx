import CityInput from "@/components/pages/shared/cityInput/cityInput";
import ProvinceInput from "@/components/pages/shared/provinceInput/provinceInput";
import React from "react";
import { IProvincesCityProps } from "./provinces.types";

const Provinces_City = ({ formik }: IProvincesCityProps) => {
  return (
    <>
      <ProvinceInput
        label="استان محل فعالیت"
        value={formik.values.province}
        onChange={(_, value) => formik.setFieldValue("province", value)}
        error={Boolean(formik.errors?.province?.id && formik.touched.province)}
      />

      <CityInput
        province={formik.values.province?.id}
        label="شهر"
        value={formik.values.county}
        onChange={(_, value) => formik.setFieldValue("county", value)}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors?.county?.id && formik.touched.county)}
        disabled={Boolean(!formik.values.province?.id)}
        helperText={
          Boolean(formik.errors?.county?.id && formik.touched.county) &&
          "شهر خود را وارد کنید"
        }
      />
    </>
  );
};

export default Provinces_City;
