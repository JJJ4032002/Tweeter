import { ChangeStyles } from "../Interfaces and Types/Types";
import { actionProps } from "../Interfaces and Types/Interfaces";
function StylesReducer(
  styles: ChangeStyles,
  action: actionProps
): ChangeStyles {
  switch (action.type) {
    case "nameChange": {
      let newStyles = [...styles];
      newStyles[0] = {
        name: "name",
        borderColor: action.borderColor,
        txtClr: action.txtClr,
        fontSize: action.fontSize,
        position: action.position,
        borderWidth: action.borderWidth,
      };
      return newStyles;
    }
    case "emailChange": {
      let newStyles = [...styles];
      newStyles[1] = {
        name: "email",
        borderColor: action.borderColor,
        txtClr: action.txtClr,
        fontSize: action.fontSize,
        position: action.position,
        borderWidth: action.borderWidth,
      };
      return newStyles;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default StylesReducer;
