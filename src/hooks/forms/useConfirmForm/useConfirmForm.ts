import { FormikConfig, FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { IConfirmFormikProps } from "./useConfirmForm.types";

type ExtendedFormikConfig = Partial<FormikConfig<IConfirmFormikProps>> & {
  stepConfirm: number;
};

const confirmValidationStepOne = Yup.object().shape({
  //step 1
  first_name: Yup.string().required("لطفا نام خود را وارد کنید."),
  last_name: Yup.string().required("لطفا نام خانوادگی را وارد کنید."),
});

const confirmValidationStepTwo = Yup.object().shape({
  //step 2
  address: Yup.string().required("لطفا آدرس خود را وارد کنید."),
  agency_type: Yup.string().required("لطفا نوع نمایندگی خود را مشخص کنید."),
  agent_code: Yup.string().required("لطفا کد نمایندگی خود را وارد کنید."),
  city_code: Yup.string().required("لطفا کد شهر خود را انتخاب کنید."),
  county: Yup.object().shape({
    id: Yup.number().required("شهر خود را انتخاب کنید"),
  }),
  insurance_branch: Yup.object().shape({
    id: Yup.number().required("کد شعبه بیمه خود را مشخص کنید"),
  }),
  phone: Yup.string().required("لطفا تلفن ثابت خود را وارد کنید."),
  province: Yup.object().shape({
    id: Yup.number().required("استان خود را انتخاب کنید"),
  }),
  Name: Yup.string().required("لطفا نام نمایندگی خود را انتخاب کنید."),
});

export const CONFIRM_FORMIK_VALIDATION_SCHEMA = [
  confirmValidationStepOne,
  confirmValidationStepTwo,
];

export const validationSchema = Yup.object().shape({});

const initialValues: IConfirmFormikProps = {
  // First Step
  first_name: "",
  last_name: "",

  // Second Step
  address: "",
  agency_type: "",
  agent_code: "",
  city_code: "",
  county: {
    id: null,
    is_active: false,
    name: "",
    fanavaran_code: "",
    name_split: "",
    province: {
      id: null,
      is_active: false,
      name: "",
      code: "",
      name_split: "",
      creator_user: null,
      country: null,
    },
    creator_user: {
      id: null,
      first_name: "",
      last_name: "",
      username: "",
    },
  },
  insurance_branch: {
    id: null,
    name: "",
  },
  phone: "",
  province: {
    id: null,
    is_active: false,
    name: "",
    code: "",
    name_split: "",
    creator_user: {
      id: null,
      first_name: "",
      last_name: "",
      username: "",
    },
    country: null,
  },
  Name: "",
};

const useConfirmForm = ({
  validationSchema: validationSchemaOverwrite,
  initialValues: initialValuesOverwrite,
  onSubmit: onSubmitOverwrite,
  ...props
}: ExtendedFormikConfig): FormikProps<IConfirmFormikProps> => {
  return useFormik<IConfirmFormikProps>({
    validationSchema:
      validationSchemaOverwrite ??
      CONFIRM_FORMIK_VALIDATION_SCHEMA[props.stepConfirm],
    initialValues: initialValuesOverwrite ?? initialValues,
    onSubmit: onSubmitOverwrite ?? (() => {}),
    validateOnChange: true,
    ...props,
  });
};

export default useConfirmForm;
