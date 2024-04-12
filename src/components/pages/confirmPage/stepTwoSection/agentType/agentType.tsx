import React, { useEffect, useState } from "react";
import { IAgentTypeProps } from "./agentType.types";
import { FormControlLabel, RadioGroup, Stack, Typography } from "@mui/material";
import MainRadioButton from "@/components/UI/inputs/radioButton/radioButton";
import MainInput from "@/components/UI/inputs/main/mainInput";

const AgentType = ({ formik }: IAgentTypeProps) => {
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    if (formik.values.agency_type === "legal") {
      setShowName(true);
    } else {
      setShowName(false);
    }
  }, [formik.values.agency_type]);

  return (
    <>
      <RadioGroup defaultValue={true} {...formik.getFieldProps("agency_type")}>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Typography marginRight="3px" fontSize="12px">
            نوع نمایندگی :
          </Typography>
          <FormControlLabel
            value="real"
            control={<MainRadioButton />}
            label="حقیقی"
          />
          <FormControlLabel
            value="legal"
            control={<MainRadioButton />}
            label="حقوقی"
          />
        </Stack>
      </RadioGroup>
      {showName && (
        <MainInput
          label="نام نمایندگی"
          required
          {...formik.getFieldProps("name")}
          error={!!(formik.errors.name && formik.touched.name)}
          helperText={
            !!(formik.errors.name && formik.touched.name) &&
            "نام نمایندگی خود را وارد کنید"
          }
        />
      )}
    </>
  );
};

export default AgentType;
