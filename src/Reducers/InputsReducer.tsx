interface inputsVal {
  name: string;
  email: string;
  password: string;
  nameBool: boolean;
  emailBool: boolean;
  passwordBool: boolean;
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
        emailBool: false,
        nameBool: true,
        passwordBool: false,
      };
      return newInputs;
    }
    case "emailInputChange": {
      let newInputs = {
        ...inputs,
        email: action.Value,
        emailBool: true,
        nameBool: false,
        passwordBool: false,
      };
      return newInputs;
    }
    case "passwordInputChange": {
      let newInputs = {
        ...inputs,
        password: action.Value,
        emailBool: false,
        nameBool: false,
        passwordBool: true,
      };
      return newInputs;
    }
    case "passwordReset": {
      let newInputs = {
        ...inputs,
        password: action.Value,
        passwordBool: false,
      };
      return newInputs;
    }
    case "ResetInputs": {
      let newInputs = {
        name: "",
        email: "",
        password: "",
        nameBool: false,
        emailBool: false,
        passwordBool: false,
      };
      return newInputs;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default InputsReducer;
