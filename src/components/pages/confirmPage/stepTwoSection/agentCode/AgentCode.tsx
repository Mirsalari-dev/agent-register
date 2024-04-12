import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { validateAgentCode } from "../../apis/api";
import { AxiosError } from "axios";
import { IAgentCodeProps } from "./agentCode.types";
import { toast } from "react-toastify";
import MainInput from "@/components/UI/inputs/main/mainInput";
import { InputAdornment, Typography } from "@mui/material";
import IconCancel from "../icons/cancelIcon";
import IconTick from "../icons/tickIcon";

const AgentCode = ({ formik }: IAgentCodeProps) => {
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);

  /// check user agent code is available or unavailable
  const { mutate } = useMutation(validateAgentCode, {
    onSuccess() {
      setErrorMessage(false);
    },
    onError(err: AxiosError<{ error_details: { fa_details: string } }>) {
      setErrorMessage(true);
      toast.error(err?.response?.data?.error_details.fa_details);
    },
  });
  const [timeoutId, setTimeoutId] = useState<any>(null);

  const onAgentCode = (agent_code: string): any => {
    formik.setFieldValue("agent_code", agent_code);

    if (agent_code.length > 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };

  useEffect(() => {
    if (formik.values.agent_code.length > 0) {
      setTimeoutId(
        setTimeout(() => {
          mutate({ agent_code: formik.values.agent_code });
        }, 2500)
      );
    }
  }, [formik.values.agent_code]);

  return (
    <MainInput
      label="کد نمایندگی"
      required
      value={formik.values.agent_code}
      onChange={(e) => onAgentCode(e.target.value)}
      error={!!(formik.errors.agent_code && formik.touched.agent_code)}
      helperText={
        !!(formik.errors.agent_code && formik.touched.agent_code) &&
        "وارد کردن کد نمایندگی الزامی است"
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {errorMessage === true && (
              <Typography
                variant="textXsMedium"
                color="error"
                bgcolor="error.200"
                borderRadius="100%"
                paddingX="3px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography display="flex" margin="0 auto">
                  <IconCancel />
                </Typography>
              </Typography>
            )}
            {errorMessage === false && (
              <Typography
                variant="textXsMedium"
                color="success"
                bgcolor="success.200"
                borderRadius="100%"
                paddingX="3px"
                alignItems="center"
                justifyContent="center"
              >
                <Typography display="flex" margin="0 auto">
                  <IconTick />
                </Typography>
              </Typography>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default AgentCode;
