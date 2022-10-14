import React, { MutableRefObject, useContext } from "react";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
import StylesReducer from "../Reducers/StylesReducer";
import { useReducer } from "react";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import validateEmail from "../helpers/ValidateEmail";
import InputsReducer from "../Reducers/InputsReducer";
import { useNavigate } from "react-router-dom";
import AddUserData from "../firebase/AddUserData";
import { invalidInputLengthChecker } from "../helpers/OverlayFormContextHelpers";
import SignUpUser from "../firebase/SignUpUser";
import { UserContext } from "./UserContext";
import { AuthenticationPageContext } from "./AuthenticationPageContext";
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
  let { SnackBarState } = useContext(UserContext);
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);
  let navigate = useNavigate();
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
          {
            name: inputVals.name,
            email: inputVals.email,
            password: inputVals.password,
          },
          handleSignUpErr,
          handleSignUpBtn,
          AddUserData,
          ResetForm,
          handleSuccesfulSignUp
        );
      } else {
        setValidNameEmail(true);
        setShowPassword(false);
      }
    }
  }
  function handleSuccesfulSignUp() {
    SnackBarState.handleOpenSnackBar("VerificationEmailSent", true);
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
    let FilteredStyles = styles.filter((ele) => {
      return ele.type === event.target.name;
    });
    if (
      FilteredStyles[0].WhichState === "AllRedBlurred" ||
      FilteredStyles[0].WhichState === "WithTextRedBlurred"
    ) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "AllRedFocussed",
      });
    } else if (
      FilteredStyles[0].WhichState === "" ||
      FilteredStyles[0].WhichState === "WithTextBlurred"
    ) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "AllBlueFocussed",
      });
    }
  }

  function BlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Blurred  Input", event.target);
    let FilteredStyles = styles.filter((ele) => {
      return ele.type === event.target.name;
    });
    if (
      FilteredStyles[0].WhichState === "AllBlueFocussed" &&
      event.target.value.length === 0
    ) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "",
      });
    } else if (
      FilteredStyles[0].WhichState === "AllRedFocussed" &&
      event.target.value.length === 0
    ) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "AllRedBlurred",
      });
    } else if (
      FilteredStyles[0].WhichState === "AllBlueFocussed" &&
      event.target.value.length > 0
    ) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "WithTextBlurred",
      });
    } else if (
      FilteredStyles[0].WhichState === "AllRedFocussed" &&
      event.target.value.length > 0
    ) {
      dispatchStyles({
        type: `${event.target.name}Change`,
        WhichState: "WithTextRedBlurred",
      });
    }
  }
  function AfterInputChangeEffects(
    refObj: { ref: MutableRefObject<HTMLSpanElement | null>; display: string },
    allowBtnObj: { type: string; booleanValue: boolean },
    stylesObj: { type: string; whichState: string }
  ) {
    if (refObj.ref.current) {
      refObj.ref.current.style.display = refObj.display;
    }
    setAllowBtn((prev) => ({
      ...prev,
      [allowBtnObj.type]: allowBtnObj.booleanValue,
    }));
    dispatchStyles({
      type: stylesObj.type,
      WhichState: stylesObj.whichState,
    });
  }
  function InputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (invalidInputLengthChecker(inputVals, event)) {
      return;
    } else {
      if (event.target.name === "email") {
        dispatchInputs({
          type: "emailInputChange",
          Value: event.target.value,
        });
        let EmailValid = validateEmail(event.target.value);
        if (EmailValid || !event.target.value) {
          AfterInputChangeEffects(
            { ref: EmailErrText, display: "none" },
            { type: "email", booleanValue: true },
            { type: "emailChange", whichState: "AllBlueFocussed" }
          );
        } else {
          AfterInputChangeEffects(
            { ref: EmailErrText, display: "block" },
            { type: "email", booleanValue: false },
            { type: "emailChange", whichState: "AllRedFocussed" }
          );
        }
      } else if (event.target.name === "password") {
        dispatchInputs({
          type: "passwordInputChange",
          Value: event.target.value,
        });
        if (event.target.value.length < 8) {
          AfterInputChangeEffects(
            { ref: PasswordErrText, display: "block" },
            { type: "password", booleanValue: false },
            { type: "passwordChange", whichState: "AllRedFocussed" }
          );
        } else {
          AfterInputChangeEffects(
            { ref: PasswordErrText, display: "none" },
            { type: "password", booleanValue: true },
            { type: "passwordChange", whichState: "AllBlueFocussed" }
          );
        }
      } else if (event.target.name === "name") {
        dispatchInputs({
          type: "nameInputChange",
          Value: event.target.value,
        });

        if (event.target.value) {
          AfterInputChangeEffects(
            { ref: NameErrText, display: "none" },
            { type: "name", booleanValue: true },
            { type: "nameChange", whichState: "AllBlueFocussed" }
          );
        } else {
          AfterInputChangeEffects(
            { ref: NameErrText, display: "block" },
            { type: "name", booleanValue: false },
            { type: "nameChange", whichState: "AllRedFocussed" }
          );
        }
      }
    }
  }

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
