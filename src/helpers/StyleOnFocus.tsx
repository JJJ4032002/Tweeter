import React from "react";
import { ChangeStyles } from "../Interfaces and Types/Types";
function StyleOnFocus(
  event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  styles: ChangeStyles
) {
  let FilteredStyles = styles.filter((ele) => {
    return ele.type === event.target.name;
  });
  if (
    FilteredStyles[0].WhichState === "AllRedBlurred" ||
    FilteredStyles[0].WhichState === "WithTextRedBlurred"
  ) {
    return "AllRedFocussed";
  } else if (
    FilteredStyles[0].WhichState === "" ||
    FilteredStyles[0].WhichState === "WithTextBlurred"
  ) {
    return "AllBlueFocussed";
  }
  return "Default";
}

export default StyleOnFocus;
