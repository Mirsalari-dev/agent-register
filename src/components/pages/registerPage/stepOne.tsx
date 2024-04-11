import MainButton from "@/components/UI/buttons/mainButton";
import MainInput from "@/components/UI/inputs/main/mainInput";
import { Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createOtp } from "./apis/stepOneApi/api";
import { FormEvent, useState } from "react";
import { ILoginFormikProps } from "@/hooks/forms/useOtpForm/useRegisterForm.types";
import useLoginForm from "@/hooks/forms/useOtpForm/useRegisterForm";
import { formikErrorHandler } from "@/utils/formikErrorHandler";

const StepOne = () => {
  const { mutate, isLoading } = useMutation(createOtp, {
    onSuccess() {
      toast.success("نیازمند با موفقیت حذف شد.");
    },
    onError() {
      toast.error("خطایی رخ داده است");
    },
  });

  const handleLogin = (values: ILoginFormikProps): void => {
    mutate({ phone_number: values.phone_number });
  };

  const loginFormik = useLoginForm({
    onSubmit: handleLogin,
  });

  const registerFormHandleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (formikErrorHandler(loginFormik)) return;
    loginFormik.handleSubmit();
  };
  console.log(loginFormik.values);
  

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={2}
      bgcolor="white"
      paddingX={4}
      paddingY={4}
    >
      <Stack justifyContent="center">
        <Typography variant="textMdBold">
          شماره موبایل خود را وارد کنید
        </Typography>
        <Typography variant="textSmRegular" marginTop={1} marginBottom={2}>
          کد تایید برای شما ارسال خواهد شد
        </Typography>
      </Stack>
      <Stack width={275}>
        <form onSubmit={registerFormHandleSubmit}>
          <MainInput
            placeholder="تلفن همراه"
            margin="normal"
            size="small"
            {...loginFormik.getFieldProps("phone_number")}
            error={Boolean(
              loginFormik.errors.phone_number &&
                loginFormik.touched.phone_number
            )}
            helperText={
              Boolean(
                loginFormik.errors.phone_number &&
                  loginFormik.touched.phone_number
              ) && "شماره تلفن باید ۱۱ رقم باشد"
            }
          />
          <MainButton
            type="submit"
            variant="contained"
            fullWidth
            size="baseMd"
            color="info"
          >
            ادامه
          </MainButton>
        </form>
      </Stack>
    </Stack>
  );
};
export default StepOne;
