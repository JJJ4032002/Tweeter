import React, { useContext } from "react";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
import StylesReducer from "../Reducers/StylesReducer";
import { useReducer } from "react";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import validateEmail from "../helpers/ValidateEmail";
import InputsReducer from "../Reducers/InputsReducer";
import { app } from "../firebase/InitializeFirebase";
import { useNavigate } from "react-router-dom";
import {
  FocusAllRedCombinations,
  BlurAllRedCombinations,
  BlurWithTextCombinations,
  BlurWithoutTextCombinations,
  invalidInputLengthChecker,
} from "../helpers/OverlayFormContextHelpers";
import SignUpUser from "../firebase/SignUpUser";
import { UserContext } from "./UserContext";
const FormPropsContext = React.createContext<OverlayFormProps>({
  Styles: [
    {
      type: "name",
      WhichState: "",
    },
    {
      type: "email",
      WhichState: "",
    },
    {
      type: "password",
      WhichState: "",
    },
  ],
  FocusAchieved: (event) => {},
  BlurAchieved: (event) => {},
  NameErrRef: { current: null },
  EmailErrRef: { current: null },
  PasswordErrRef: { current: null },
  InputChange: (event) => {},
  InputStates: { name: "", email: "", password: "" },
  ResetForm: () => {},
  FinBtnState: true,
  validNameEmail: true,
  handleSubmitBtnClick: (event) => {},
  showPassword: false,
  handleShowPasswordSpan: () => {},
  SignUpErr: false,
  loader: false,
});

function SignUpFormPropsProvider({ children }: OverlayContextProviderChildren) {
  let navigate = useNavigate();
  let { setUserHelper } = useContext(UserContext);
  const [styles, dispatchStyles] = useReducer(StylesReducer, [
    {
      type: "name",
      WhichState: "",
    },
    {
      type: "email",
      WhichState: "",
    },
    {
      type: "password",
      WhichState: "",
    },
  ]);
  const [allowBtn, setAllowBtn] = useState({
    name: false,
    email: false,
    password: false,
  });
  let NameErrText = useRef<HTMLSpanElement | null>(null);
  let EmailErrText = useRef<HTMLSpanElement | null>(null);
  let PasswordErrText = useRef<HTMLSpanElement | null>(null);

  const [inputVals, dispatchInputs] = useReducer(InputsReducer, {
    name: "",
    email: "",
    password: "",
    nameBool: false,
    emailBool: false,
    passwordBool: false,
  });
  const [validEmailInp, setValidEmailInp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validNameEmail, setValidNameEmail] = useState(true);
  const [SignUpErr, setSignUpErr] = useState(false);
  const [loader, setLoader] = useState(false);
  function handleSubmitBtnClick(event: React.MouseEvent<HTMLElement>) {
    let ElementType = event.target as Element;
    dispatchInputs({ type: "passwordReset", Value: "" });
    dispatchStyles({ type: "passwordChange", WhichState: "" });
    setAllowBtn((prev) => ({ ...prev, password: false }));
    if (validNameEmail) {
      setValidNameEmail(false);
    } else {
      if (ElementType.nodeName === "BUTTON") {
        setLoader(true);
        SignUpUser(
          inputVals.email,
          inputVals.password,
          inputVals.name,
          setUserHelper,
          handleSignUpErr,
          handleSuccesfulSignUp
        );
      } else {
        setValidNameEmail(true);

        setShowPassword(false);
      }
    }
  }
  function handleSuccesfulSignUp() {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }
  function handleSignUpErr(param: boolean) {
    setSignUpErr(param);
  }
  function handleShowPasswordSpan() {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }
  useEffect(() => {
    setLoader(false);
    setTimeout(() => {
      handleSignUpErr(false);
    }, 2500);
  }, [SignUpErr]);
  function FocusAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Focussed", event.target, event.relatedTarget);

    if (FocusAllRedCombinations(inputVals, event, validEmailInp, NameErrText)) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "AllRedFocussed",
      });
    } else {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "AllBlueFocussed",
      });
    }
  }
  function BlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    if (BlurWithoutTextCombinations(inputVals, event)) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "",
      });
    } else if (BlurAllRedCombinations(inputVals, event)) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "AllRedBlurred",
      });
    } else if (BlurWithTextCombinations(inputVals, event)) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "WithTextBlurred",
      });
    } else {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "",
      });
    }
  }
  function InputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);
    if (invalidInputLengthChecker(inputVals, event)) {
      return;
    } else {
      if (event.target.name === "email") {
        dispatchInputs({
          type: "emailInputChange",
          Value: event.target.value,
        });

        let ans = validateEmail(event.target.value);
        if (ans) {
          setValidEmailInp(true);
        } else {
          setValidEmailInp(false);
        }
      } else if (event.target.name === "password") {
        dispatchInputs({
          type: "passwordInputChange",
          Value: event.target.value,
        });
      } else {
        dispatchInputs({
          type: "nameInputChange",
          Value: event.target.value,
        });
      }
    }
  }

  useEffect(() => {
    if (
      inputVals.emailBool &&
      inputVals.email &&
      null != EmailErrText.current
    ) {
      if (!validEmailInp) {
        EmailErrText.current.style.display = "block";
        setAllowBtn((prev) => ({ ...prev, email: false }));
        dispatchStyles({
          type: `emailChange`,
          WhichState: "AllRedFocussed",
        });
      } else {
        EmailErrText.current.style.display = "none";
        setAllowBtn((prev) => ({ ...prev, email: true }));
        dispatchStyles({
          type: `emailChange`,
          WhichState: "AllBlueFocussed",
        });
      }
    } else if (inputVals.passwordBool && null !== PasswordErrText.current) {
      if (inputVals.password.length < 8) {
        console.log("PasswordError");
        PasswordErrText.current.style.display = "block";
        setAllowBtn((prev) => ({ ...prev, password: false }));
        dispatchStyles({
          type: `passwordChange`,
          WhichState: "AllRedFocussed",
        });
      } else {
        PasswordErrText.current.style.display = "none";
        setAllowBtn((prev) => ({ ...prev, password: true }));
        dispatchStyles({
          type: `passwordChange`,
          WhichState: "AllBlueFocussed",
        });
      }
    } else if (
      inputVals.emailBool &&
      !inputVals.email &&
      null != EmailErrText.current
    ) {
      EmailErrText.current.style.display = "none";
      setAllowBtn((prev) => ({ ...prev, email: false }));

      dispatchStyles({
        type: `emailChange`,
        WhichState: "AllBlueFocussed",
      });
    } else {
      if (inputVals.nameBool && null !== NameErrText.current) {
        if (inputVals.name) {
          setAllowBtn((prev) => ({ ...prev, name: true }));
          NameErrText.current.style.display = "none";

          dispatchStyles({
            type: `nameChange`,
            WhichState: "AllBlueFocussed",
          });
        } else {
          setAllowBtn((prev) => ({ ...prev, name: false }));
          NameErrText.current.style.display = "block";
          dispatchStyles({
            type: `nameChange`,
            WhichState: "AllRedFocussed",
          });
        }
      }
    }
  }, [validEmailInp, inputVals.name, inputVals.email, inputVals.password]);
  function ResetForm() {
    dispatchInputs({ type: "ResetInputs", Value: "" });
    setAllowBtn({ name: false, email: false, password: false });
    dispatchStyles({
      type: "ResetFields",
      WhichState: "",
    });
    if (NameErrText.current != null && EmailErrText.current != null) {
      NameErrText.current.style.display = "none";
      EmailErrText.current.style.display = "none";
    }
  }
  let FinBtnState = true;
  if (!validNameEmail) {
    FinBtnState = allowBtn.password ? true : false;
  } else {
    FinBtnState = allowBtn.name && allowBtn.email ? true : false;
  }

  let contextVal = {
    Styles: styles,
    FocusAchieved: FocusAchieved,
    BlurAchieved: BlurAchieved,
    NameErrRef: NameErrText,
    EmailErrRef: EmailErrText,
    PasswordErrRef: PasswordErrText,
    InputChange: InputChange,
    InputStates: {
      name: inputVals.name,
      email: inputVals.email,
      password: inputVals.password,
    },
    ResetForm: ResetForm,
    FinBtnState: FinBtnState,
    validNameEmail: validNameEmail,
    handleSubmitBtnClick: handleSubmitBtnClick,
    showPassword: showPassword,
    handleShowPasswordSpan: handleShowPasswordSpan,
    SignUpErr: SignUpErr,
    loader: loader,
  };

  return (
    <FormPropsContext.Provider value={contextVal}>
      {children}
    </FormPropsContext.Provider>
  );
}

export { SignUpFormPropsProvider, FormPropsContext };
