interface inputsVal {
  name: string;
  email: string;
  password: string;
}
interface actionProps {
  type: string;
  Value: string;
}

function InputsReducer(inputs: inputsVal, action: actionProps): inputsVal {
  switch (action.type) {
    case "nameInputChange": {
      let newInputs = {
        ...inputs,
        name: action.Value,
      };
      return newInputs;
    }
    case "emailInputChange": {
      let newInputs = {
        ...inputs,
        email: action.Value,
      };
      return newInputs;
    }
    case "passwordInputChange": {
      let newInputs = {
        ...inputs,
        password: action.Value,
      };
      return newInputs;
    }
    case "passwordReset": {
      let newInputs = {
        ...inputs,
        password: action.Value,
      };
      return newInputs;
    }
    case "ResetInputs": {
      let newInputs = {
        name: "",
        email: "",
        password: "",
      };
      return newInputs;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default InputsReducer;
