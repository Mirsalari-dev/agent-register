import { IConfirmFormikProps } from "@/hooks/forms/useConfirmForm/useConfirmForm.types";
import { FormikProps } from "formik";
import { MouseEvent } from "react";

export interface IStepTwoProps {
  formik: FormikProps<IConfirmFormikProps>
  confirmFormHandleSubmit: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}
