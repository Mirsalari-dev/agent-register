import { FC } from "react";

import { RadioProps } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioDisabledIcon from "./icons/radioDisabled";
import RadioActiveIcon from "./icons/radioActive";


const MainRadioButton: FC<RadioProps> = (props) => {
  return (
    <Radio
      size="small"
      icon={<RadioDisabledIcon color="info" />}
      checkedIcon={<RadioActiveIcon color="info" />}
      {...props}
    />
  );
};

export default MainRadioButton;
