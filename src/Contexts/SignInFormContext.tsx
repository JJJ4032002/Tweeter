import React, { useState } from "react";
import { OverlaySignInFormProps } from "../Interfaces and Types/Interfaces";
import {
  SignInWithoutTextBlurCombinations,
  SignInWithTextBlurCombinations,
} from "../helpers/OverlayFormContextHelpers";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import SignInUser from "../firebase/SignInUser";
const SignInFormPropsContext = React.createContext<OverlaySignInFormProps>({
  SignInStyles: [
    {
      type: "email",
      WhichState: "",
    },
    {
      type: "password",
      WhichState: "",
    },
  ],
  signInInputStates: { email: "", password: "" },
  SignInFocusAchieved: (event) => {},
  SignInBlurAchieved: (event) => {},
  SignInInputChange: (event) => {},
  SignInResetForm: () => {},
  signInShowPassword: false,
  handleSignInShowPasswordSpan: () => {},
  handleSignInSubmitButton: (event) => {},
  SignInFinBtnState: false,
});

function SignInFormPropsProvider({ children }: OverlayContextProviderChildren) {
  const [styles, setStyles] = useState([
    {
      type: "email",
      WhichState: "",
    },
    {
      type: "password",
      WhichState: "",
    },
  ]);
  const [inputVals, setInputVals] = useState({
    email: "",
    password: "",
    emailBool: false,
    passwordBool: false,
  });
  const [signInShowPassword, setSignInShowPassword] = useState(false);
  function handleSignInShowPasswordSpan() {
    if (!signInShowPassword) {
      setSignInShowPassword(true);
    } else {
      setSignInShowPassword(false);
    }
  }
  function SignInFocusAchieved(
    event: React.FocusEvent<HTMLInputElement>
  ): void {
    console.log("Focussed", event.target.name, event.relatedTarget);
    let newStyles = [...styles];
    if (event.target.name === "email") {
      newStyles[0] = {
        type: "email",
        WhichState: "AllBlueFocussed",
      };
    } else {
      newStyles[1] = {
        type: "password",
        WhichState: "AllBlueFocussed",
      };
    }
    setStyles(newStyles);
  }
  function SignInBlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    let newStyles = [...styles];
    if (SignInWithoutTextBlurCombinations(inputVals, event)) {
      if (event.target.name === "email") {
        newStyles[0] = {
          type: "email",
          WhichState: "",
        };
      } else {
        newStyles[1] = {
          type: "password",
          WhichState: "",
        };
      }
    } else if (SignInWithTextBlurCombinations(inputVals, event)) {
      if (event.target.name === "email") {
        newStyles[0] = {
          type: "email",
          WhichState: "WithTextBlurred",
        };
      } else {
        newStyles[1] = {
          type: "password",
          WhichState: "WithTextBlurred",
        };
      }
    }
    setStyles(newStyles);
  }
  function SignInInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "email") {
      setInputVals({
        ...inputVals,
        [event.target.name]: event.target.value,
        emailBool: true,
        passwordBool: false,
      });
    } else {
      setInputVals({
        ...inputVals,
        [event.target.name]: event.target.value,
        emailBool: false,
        passwordBool: true,
      });
    }
  }
  function handleSignInSubmitButton(event: React.MouseEvent<HTMLElement>) {
    SignInUser(inputVals.email, inputVals.password);
  }
  function SignInResetForm() {
    setInputVals({
      email: "",
      password: "",
      emailBool: false,
      passwordBool: false,
    });
    setStyles([
      {
        type: "email",
        WhichState: "",
      },
      {
        type: "password",
        WhichState: "",
      },
    ]);
    setSignInShowPassword(false);
  }
  let SignInFinBtnState = inputVals.email && inputVals.password ? true : false;
  let ContextObj = {
    SignInStyles: styles,
    signInInputStates: { email: inputVals.email, password: inputVals.password },
    SignInFocusAchieved: SignInFocusAchieved,
    SignInBlurAchieved: SignInBlurAchieved,
    SignInInputChange: SignInInputChange,
    SignInResetForm: SignInResetForm,
    signInShowPassword: signInShowPassword,
    handleSignInShowPasswordSpan: handleSignInShowPasswordSpan,
    handleSignInSubmitButton: handleSignInSubmitButton,
    SignInFinBtnState: SignInFinBtnState,
  };
  return (
    <SignInFormPropsContext.Provider value={ContextObj}>
      {children}
    </SignInFormPropsContext.Provider>
  );
}

export { SignInFormPropsProvider, SignInFormPropsContext };
