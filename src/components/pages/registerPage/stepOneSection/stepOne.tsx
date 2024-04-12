import MainButton from "@/components/UI/buttons/mainButton";
import MainInput from "@/components/UI/inputs/main/mainInput";
import useLoginForm from "@/hooks/forms/useOtpForm/useRegisterForm";
import { ILoginFormikProps } from "@/hooks/forms/useOtpForm/useRegisterForm.types";
import { formikErrorHandler } from "@/utils/formikErrorHandler";
import { Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import { createOtp } from "../apis/stepOneApi/api";
import { IStepOneProps } from "./stepOne.types";

const StepOne = ({ setStepRegister }: IStepOneProps) => {
  const router = useRouter();
  /// api call for create otp step
  const { mutate, isLoading } = useMutation(createOtp, {
    onSuccess() {
      toast.success("پیامک برای شما ارسال شد.");
      router.push({
        query: { validateOtp: loginFormik.values.phone_number },
      });
      setStepRegister(2);
    },
    onError() {
      toast.error("چند دقیقه دیگر دوباره تلاش کنید");
    },
  });

  /// handle form submission with custom hook formik
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
            label="تلفن همراه"
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
            loading={isLoading}
          >
            ادامه
          </MainButton>
        </form>
      </Stack>
    </Stack>
  );
};
export default StepOne;
