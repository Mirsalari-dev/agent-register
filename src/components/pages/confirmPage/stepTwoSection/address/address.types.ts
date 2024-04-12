import { IConfirmFormikProps } from "@/hooks/forms/useConfirmForm/useConfirmForm.types";
import { FormikProps } from "formik";

export interface IAddressProps {
  formik: FormikProps<IConfirmFormikProps>;
}
