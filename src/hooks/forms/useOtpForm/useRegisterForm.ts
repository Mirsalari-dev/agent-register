import { FormikConfig, FormikProps, useFormik } from "formik";

import { IRPhoneNumberReg } from "@/utils/regex";
import * as Yup from "yup";
import { ILoginFormikProps } from "./useRegisterForm.types";

export const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("لطفا شماره موبایل را وارد کنید")
    .matches(IRPhoneNumberReg, "شماره موبایل را با فرمت درست وارد کنید."),
});

const initialValues = {
  phone_number: "",
};

const useLoginForm = ({
  validationSchema: validationSchemaOverwrite,
  initialValues: initialValuesOverwrite,
  onSubmit: onSubmitOverwrite,
  ...props
}: Partial<
  FormikConfig<ILoginFormikProps>
>): FormikProps<ILoginFormikProps> => {
  return useFormik<ILoginFormikProps>({
    validationSchema: validationSchemaOverwrite ?? validationSchema,
    initialValues: initialValuesOverwrite ?? initialValues,
    onSubmit: onSubmitOverwrite ?? (() => {}),
    ...props,
  });
};

export default useLoginForm;
