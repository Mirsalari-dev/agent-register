import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import {
  MainLayoutChildren,
  MainLayoutContainer,
  MainLayoutTopSheet,
} from "./mainLayout.styles";
import DayLogo from "@images/Day.png";
import Image from "next/image";
const MainLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <MainLayoutContainer bgcolor={theme.palette.grey[200]}>
      <MainLayoutTopSheet bgcolor={theme.palette.info[500]}>
        <Image
          alt="logo"
          src={DayLogo}
          width={100}
          height={85}
          className="logo"
        />
      </MainLayoutTopSheet>
      <MainLayoutChildren>{children}</MainLayoutChildren>
    </MainLayoutContainer>
  );
};
export default MainLayout;
