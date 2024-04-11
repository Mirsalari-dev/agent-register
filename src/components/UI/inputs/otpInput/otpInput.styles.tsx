import { Box, alpha, keyframes, styled } from "@mui/material";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% {  transform: rotate(359deg); }
`;

const StyledLoadingIconContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  inset: "0",
  backgroundColor: alpha(theme.palette.background.paper as string, 0.75),
  "& svg": {
    animation: `${spin}  2s linear infinite`,
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "100%",
  maxWidth: "360px",
  justifyContent: "space-around",
  columnGap: "10px",
  ...(theme.direction === "rtl" && { flexDirection: "row-reverse" }),
}));

const OtpInputStyled = styled("input")<{ error: boolean }>(
  ({ theme, error = false }) => ({
    width: "38.67px",
    height: "49px",
    border: "none",
    borderBottom: `3px solid ${
      error ? theme.palette.error[400] : theme.palette.grey[100]
    } `,
    color: theme?.palette.grey[300],
    textAlign: "center",
    fontSize: "2.7rem",

    "&:focus": {
      borderColor: theme.palette.primary[500],
      outline: "none",
    },
    "&:disabled": {
      background: "none ",
    },
  })
);

const otpInputStyles = {
  OtpInputStyled,
  StyledContainer,
  StyledLoadingIconContainer,
};

export default otpInputStyles;
