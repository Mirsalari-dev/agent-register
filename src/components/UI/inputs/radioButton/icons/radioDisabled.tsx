import { SvgIcon, SvgIconProps } from "@mui/material";

const RadioDisabledIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <svg fill="none">
        <circle cx="8" cy="8" r="7.5" stroke="#D0D5DD" />
      </svg>
    </SvgIcon>
  );
};

export default RadioDisabledIcon;
