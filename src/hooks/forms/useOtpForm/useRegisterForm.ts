import { useFormik, FormikConfig, FormikProps } from "formik";

import * as Yup from "yup";
import { ILoginFormikProps } from "./useRegisterForm.types";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("شماره موبایل خود را وارد کنید")
    .matches((/^[۰۱۲۳۴۵۶۷۸۹0-9]+$/), "شماره موبایل باید ۱۱ رقم باشد"),
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
