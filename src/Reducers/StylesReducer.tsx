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
        type: "name",
        WhichState: action.WhichState,
      };
      return newStyles;
    }
    case "emailChange": {
      let newStyles = [...styles];
      newStyles[1] = {
        type: "email",
        WhichState: action.WhichState,
      };
      return newStyles;
    }
    case "ResetFields": {
      let newStyles = [
        {
          type: "name",
          WhichState: "",
        },
        {
          type: "email",
          WhichState: "",
        },
      ];
      return newStyles;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default StylesReducer;
