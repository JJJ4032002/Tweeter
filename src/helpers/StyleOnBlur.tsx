import React from "react";
import { ChangeStyles } from "../Interfaces and Types/Types";
function StyleOnBlur(
  event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  styles: ChangeStyles
) {
  let FilteredStyles = styles.filter((ele) => {
    return ele.type === event.target.name;
  });
  if (
    FilteredStyles[0].WhichState === "AllBlueFocussed" &&
    event.target.value.length === 0
  ) {
    return "";
  } else if (
    FilteredStyles[0].WhichState === "AllRedFocussed" &&
    event.target.value.length === 0
  ) {
    return "AllRedBlurred";
  } else if (
    FilteredStyles[0].WhichState === "AllBlueFocussed" &&
    event.target.value.length > 0
  ) {
    return "WithTextBlurred";
  } else if (
    FilteredStyles[0].WhichState === "AllRedFocussed" &&
    event.target.value.length > 0
  ) {
    return "WithTextRedBlurred";
  }

  return "Default";
}

export default StyleOnBlur;
