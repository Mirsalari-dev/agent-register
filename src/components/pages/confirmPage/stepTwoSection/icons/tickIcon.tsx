// icon:tick | Teeny Icons https://teenyicons.com/ | Anja van Staden
import { useTheme } from "@mui/material";
import * as React from "react";

function IconTick(props: React.SVGProps<SVGSVGElement>) {
  const theme = useTheme();

  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="square"
        d="M1 7l4.5 4.5L14 3"
      />
    </svg>
  );
}

export default IconTick;
