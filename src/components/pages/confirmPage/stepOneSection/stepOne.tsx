import MainButton from "@/components/UI/buttons/mainButton";
import MainInput from "@/components/UI/inputs/main/mainInput";
import { Stack } from "@mui/material";
import { IStepOneProps } from "./stepOne.types";

const StepOne = ({ confirmFormHandleSubmit, formik }: IStepOneProps) => {

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
      <Stack width={275} gap={2}>
        <MainInput
          label="نام"
          required
          {...formik.getFieldProps("first_name")}
          error={!!(formik.errors.first_name && formik.touched.first_name)}
          helperText={!!(formik.errors.first_name && formik.touched.first_name) && "نام خود را وارد کنید"}
        />
        <MainInput
          label=" نام خانوادگی"
          required
          {...formik.getFieldProps("last_name")}
          error={!!(formik.errors.last_name && formik.touched.last_name)}
          helperText={!!(formik.errors.last_name && formik.touched.last_name) && "نام خانوادگی خود را وارد کنید"}

        />
        <MainButton
          variant="contained"
          fullWidth
          size="baseMd"
          color="info"
          onClick={confirmFormHandleSubmit}
        >
          ادامه
        </MainButton>
      </Stack>
    </Stack>
  );
};
export default StepOne;
