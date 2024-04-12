import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

const RadioActiveIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <svg fill="none">
        <rect width="16" height="16" rx="8" fill={theme.palette.primary.main} />
        <circle cx="8" cy="8" r="3" fill="white" />
      </svg>
    </SvgIcon>
  );
};

export default RadioActiveIcon;
