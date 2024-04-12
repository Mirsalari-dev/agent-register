import { FC } from "react";

import { PopperProps } from "@mui/material";

import { StyledAutoComplete, StyledPopper } from "./mainAutocomplete.styles";
import { TMainAutocompleteProps } from "./mainAutocomplete.types";
import SelectDropdownIcon from "./icons/selectDropDown";

const AutoCompletePopper: FC<PopperProps> = (props) => {
  return (
    <StyledPopper
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 5],
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: 5,
          },
        },
        {
          name: "flip",
          options: {
            padding: 5,
          },
        },
      ]}
      {...props}
    />
  );
};

const MainAutocomplete: FC<TMainAutocompleteProps> = ({ ...params }) => {
  return (
    <StyledAutoComplete
      PopperComponent={AutoCompletePopper}
      disableClearable
      noOptionsText="داده ای موجود نیست"
      loadingText="در حال پردازش ..."
      popupIcon={
        <SelectDropdownIcon
          color="inherit"
          viewBox="0 0 16 9"
          sx={{ fontSize: "1.5rem" }}
        />
      }
      {...params}
    />
  );
};

export default MainAutocomplete;
