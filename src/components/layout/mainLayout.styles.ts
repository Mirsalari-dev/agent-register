import { Box, styled } from "@mui/material";

export const MainLayoutContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  position: "relative",
}));

export const MainLayoutTopSheet = styled(Box)(() => ({
  width: "100%",
  minHeight: "25%",
  borderBottomLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  "& .logo": {
    display: "flex",
    margin: "0 auto",
  },
}));
export const MainLayoutChildren = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-150px",
}));
