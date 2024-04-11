import MainButton from "@/components/UI/buttons/mainButton";
import OtpInput from "@/components/UI/inputs/otpInput/otpInput";
import { OTP_INPUT_COUNT } from "@/components/UI/inputs/otpInput/otpSection.constants";
import { Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { IStepTwoProps } from "./stepTwo.types";
import { useRouter } from "next/router";
import { validateOtp } from "../apis/stepTwoApi/api";

const StepTwo = ({ setStepRegister }: IStepTwoProps) => {
  const { query, push } = useRouter();
  const phone_number = query.validateOtp as string;
  const inputReference: React.RefObject<HTMLInputElement> = useRef(null);

  const focusOnFirstInput = (): void => {
    inputReference.current?.focus();
  };
  const [code, setCode] = useState<string>("");

  /// api call for post otp code step
  const { mutate, isLoading } = useMutation(
    () => validateOtp({ phone_number, code }),
    {
      onSuccess() {
        toast.success("اعتبارسنجی شماره تلفن موفقیت آمیز بود.");
        push("/");
        setStepRegister(3);
      },
      onError() {
        toast.error("کد وارد شده نادرست است");
      },
    }
  );

  const onOtpChange = (otpValue: string): void => {
    setCode(otpValue);

    if (otpValue.trim().length === OTP_INPUT_COUNT) {
      mutate();
    }
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
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="textMdBold">کد تایید را وارد کنید</Typography>
        <Typography
          variant="textSmRegular"
          fontSize={10}
          marginTop={2}
          marginBottom={1}
        >
          {`کد تایید برای شماره موبایل ${phone_number}`}
        </Typography>
      </Stack>
      <Stack width={275} gap={2}>
        <OtpInput
          value={code}
          isLoading={isLoading}
          valueLength={OTP_INPUT_COUNT}
          onChange={onOtpChange}
          inputRef={inputReference}
          focus={focusOnFirstInput}
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
      </Stack>
    </Stack>
  );
};
export default StepTwo;
