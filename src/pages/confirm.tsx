import { signupCode } from "@/components/pages/confirmPage/apis/api";
import useConfirmForm from "@/hooks/forms/useConfirmForm/useConfirmForm";
import { IConfirmFormikProps } from "@/hooks/forms/useConfirmForm/useConfirmForm.types";
import { setTokenInCookies } from "@/utils/cookies/token";
import { formikErrorHandler } from "@/utils/formikErrorHandler";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { toast } from "react-toastify";
/// dynamic import for avoid extra render
const StepOne = dynamic(
  () => import("../components/pages/confirmPage/stepOneSection/stepOne")
);
const StepTwo = dynamic(
  () => import("../components/pages/confirmPage/stepTwoSection/stepTwo")
);

const Confirm = () => {
  const [stepConfirm, setStepConfirm] = useState(1);
  const { query, push } = useRouter();

  const { mutate } = useMutation(signupCode, {
    onSuccess(res) {
      setTokenInCookies(res.response.access, res.response.refresh);
      toast.success("اطلاعات با موفقیت ثبت شد");
      push("/status");
    },
    onError(err: AxiosError<{ error_details: { fa_details: string } }>) {
      toast.error(err?.response?.data?.error_details.fa_details);
    },
  });

  const handleSubmit = (values: IConfirmFormikProps): void => {
    const isLastStep = stepConfirm === 2;
    if (isLastStep) {
      mutate({
        ...values,
        county: values.county.id,
        province: values.province.id,
        insurance_branch: values.insurance_branch.id,
        phone_number: query.user,
      });
    } else {
      setStepConfirm((prev) => prev + 1);
    }
  };

  const comfirmFormik = useConfirmForm({
    onSubmit: handleSubmit,
    stepConfirm: stepConfirm - 1,
  });

  const confirmFormHandleSubmit = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void => {
    event.preventDefault();
    if (formikErrorHandler(comfirmFormik)) return;
    comfirmFormik.handleSubmit();
  };

  const wizardSteps: JSX.Element[] = [
    <StepOne
      key="wizard-step-0"
      formik={comfirmFormik}
      confirmFormHandleSubmit={confirmFormHandleSubmit}
    />,
    <StepTwo
      key="wizard-step-1"
      formik={comfirmFormik}
      confirmFormHandleSubmit={confirmFormHandleSubmit}
    />,
  ];

  return (
    <>
      <Head>
        <title>Agent register Confirmation</title>
        <meta
          name="description"
          content="Agent register for iranian poshesh company"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {wizardSteps[stepConfirm - 1]}
    </>
  );
};

export default Confirm;
