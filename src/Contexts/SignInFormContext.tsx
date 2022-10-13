import React, { useState, useEffect, useContext } from "react";
import { OverlaySignInFormProps } from "../Interfaces and Types/Interfaces";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import SignInUser from "../firebase/SignIn/SignInUser";
import { useNavigate } from "react-router-dom";
import { AuthenticationPageContext } from "./AuthenticationPageContext";
import { UserContext } from "./UserContext";
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
  SignInErr: false,
  signInLoader: false,
});

function SignInFormPropsProvider({ children }: OverlayContextProviderChildren) {
  let navigate = useNavigate();
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);
  let { SnackBarState } = useContext(UserContext);
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
  const [SignInErr, setSignInErr] = useState(false);
  const [signInLoader, setSignInLoader] = useState(false);
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
  function handleSignInErr(param: boolean) {
    setSignInErr(param);
  }

  useEffect(() => {
    setSignInLoader(false);
    setTimeout(() => {
      handleSignInErr(false);
    }, 2500);
  }, [SignInErr]);
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
    if (event.target.value.length === 0) {
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
    } else if (event.target.value.length > 0) {
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
  function VerificationEmailError() {
    SnackBarState.handleOpenSnackBar("SignIn", true);
  }
  function handleSignInSubmitButton(event: React.MouseEvent<HTMLElement>) {
    setSignInLoader(true);
    SignInUser(
      {
        email: inputVals.email,
        password: inputVals.password,
      },
      handleSignInErr,
      handleSignUpBtn,
      VerificationEmailError,
      SignInResetForm
    );
    setInputVals({
      email: "",
      password: "",
      emailBool: false,
      passwordBool: false,
    });
  }
  function SignInResetForm() {
    setSignInLoader(false);
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
    SignInErr: SignInErr,
    signInLoader: signInLoader,
  };
  return (
    <SignInFormPropsContext.Provider value={ContextObj}>
      {children}
    </SignInFormPropsContext.Provider>
  );
}

export { SignInFormPropsProvider, SignInFormPropsContext };
