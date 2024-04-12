import DayLogo from "@images/Day.png";
import { useTheme } from "@mui/material";
import Image from "next/image";
import {
  MainLayoutChildren,
  MainLayoutContainer,
  MainLayoutTopSheet,
} from "./mainLayout.styles";
import { IMainLayoutProps } from "./mainLayout.types";
const MainLayout = ({ children }: IMainLayoutProps) => {
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
