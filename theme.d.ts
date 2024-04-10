export interface IColorShades {
  main?: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "@mui/material/styles" {
  // allow typescript to use color shades in primary and secondary colors
  interface PaletteColor extends IColorShades {}

  interface BreakpointOverrides {
    xl: false;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pLgLight: true;
    pSmRegular: true;
    h3Medium: true;
    h2ExtraBold: true;
    h2Medium: true;
    textLgExtraBold: true;
    textLgMedium: true;
    textMdRegular: true;
    textMdBold: true;
    textSmRegular: true;
    textLgRegular: true;
    textXsMedium: true;
    textXsExtraBold: true;
    textSmMedium: true;
    label: true;
    errorTitle: true;
    errorSubTitle: true;
    textMdMedium: true;
    textXlMedium: true;
    textXsLight: true;
    textXsRegular: true;
    textLgBold: true;
    textXlExtraBold: true;
    textSmExtraBold: true;
    //TODO: ask design for name
    h1ExtraBold: true;
    h1MoreExtraBold: true;
    h1Medium: true;
  }
}
