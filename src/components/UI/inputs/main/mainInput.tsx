import { FC } from "react";

import { TextFieldProps, Typography } from "@mui/material";

import styles from "./mainInput.styles";

const MainInput: FC<TextFieldProps> = (props) => {
  const { StyledMainInput } = styles;

  const { required, label, ...otherProps } = props;

  return (
    <StyledMainInput
      label={
        label ? (
          <>
            {label}
            {required ? (
              <Typography component={"span"} className="requied-label">
                {" "}
                *
              </Typography>
            ) : (
              ""
            )}
          </>
        ) : null
      }
      {...otherProps}
    />
  );
};

export default MainInput;
