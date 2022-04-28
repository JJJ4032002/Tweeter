import React from "react";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
import StylesReducer from "../Reducers/StylesReducer";
import { useReducer } from "react";
import { OverlayContextProviderChildren } from "../Interfaces and Types/Types";
import { useRef } from "react";
import { useState } from "react";
import { InputValues } from "../Interfaces and Types/Types";
import { useEffect } from "react";
import validateEmail from "../helpers/ValidateEmail";
import { app } from "../firebase/InitializeFirebase";
import {
  FocusAllRedCombinations,
  BlurAllRedCombinations,
  BlurWithTextCombinations,
  BlurWithoutTextCombinations,
  invalidInputLengthChecker,
} from "../helpers/OverlayFormContextHelpers";
import SignUpUser from "../firebase/SignUpUser";
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
});

function SignUpFormPropsProvider({ children }: OverlayContextProviderChildren) {
  const [styles, dispatch] = useReducer(StylesReducer, [
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
  const [inputVals, setInputVals] = useState<InputValues>({
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
  function handleSubmitBtnClick(event: React.MouseEvent<HTMLElement>) {
    let ElementType = event.target as Element;
    setInputVals({ ...inputVals, password: "", passwordBool: false });
    dispatch({ type: "passwordChange", WhichState: "" });
    if (validNameEmail) {
      setValidNameEmail(false);
    } else {
      if (ElementType.nodeName === "BUTTON") {
        SignUpUser(inputVals.email, inputVals.password, handleSignUpErr);
      } else {
        setValidNameEmail(true);
        setAllowBtn((prev) => ({ ...prev, password: false }));
        setShowPassword(false);
      }
    }
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
    setTimeout(() => {
      handleSignUpErr(false);
    }, 1000);
  }, [SignUpErr]);
  function FocusAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Focussed", event.target, event.relatedTarget);

    if (FocusAllRedCombinations(inputVals, event, validEmailInp, NameErrText)) {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "AllRedFocussed",
      });
    } else {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "AllBlueFocussed",
      });
    }
  }
  function BlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    if (BlurWithoutTextCombinations(inputVals, event)) {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "",
      });
    } else if (BlurAllRedCombinations(inputVals, event)) {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "AllRedBlurred",
      });
    } else if (BlurWithTextCombinations(inputVals, event)) {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "WithTextBlurred",
      });
    } else {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "",
      });
    }
  }
  function InputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);
    if (invalidInputLengthChecker(inputVals, event)) {
      console.log("Do nothing");
      console.log(event.target.value);
    } else {
      if (event.target.name === "email") {
        setInputVals({
          ...inputVals,
          [event.target.name]: event.target.value,
          emailBool: true,
          nameBool: false,
          passwordBool: false,
        });
        let ans = validateEmail(event.target.value);
        if (ans) {
          setValidEmailInp(true);
        } else {
          setValidEmailInp(false);
        }
      } else if (event.target.name === "password") {
        setInputVals({
          ...inputVals,
          [event.target.name]: event.target.value,
          emailBool: false,
          nameBool: false,
          passwordBool: true,
        });
      } else {
        setInputVals({
          ...inputVals,
          [event.target.name]: event.target.value,
          emailBool: false,
          nameBool: true,
          passwordBool: false,
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
        dispatch({
          type: `emailChange`,
          WhichState: "AllRedFocussed",
        });
      } else {
        EmailErrText.current.style.display = "none";
        setAllowBtn((prev) => ({ ...prev, email: true }));
        dispatch({
          type: `emailChange`,
          WhichState: "AllBlueFocussed",
        });
      }
    } else if (inputVals.passwordBool && null !== PasswordErrText.current) {
      if (inputVals.password.length < 8) {
        console.log("PasswordError");
        PasswordErrText.current.style.display = "block";
        setAllowBtn((prev) => ({ ...prev, password: false }));
        dispatch({
          type: `passwordChange`,
          WhichState: "AllRedFocussed",
        });
      } else {
        PasswordErrText.current.style.display = "none";
        setAllowBtn((prev) => ({ ...prev, password: true }));
        dispatch({
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

      dispatch({
        type: `emailChange`,
        WhichState: "AllBlueFocussed",
      });
    } else {
      if (inputVals.nameBool && null !== NameErrText.current) {
        if (inputVals.name) {
          setAllowBtn((prev) => ({ ...prev, name: true }));
          NameErrText.current.style.display = "none";

          dispatch({
            type: `nameChange`,
            WhichState: "AllBlueFocussed",
          });
        } else {
          setAllowBtn((prev) => ({ ...prev, name: false }));
          NameErrText.current.style.display = "block";
          dispatch({
            type: `nameChange`,
            WhichState: "AllRedFocussed",
          });
        }
      }
    }
  }, [validEmailInp, inputVals.name, inputVals.email, inputVals.password]);
  function ResetForm() {
    setInputVals({
      name: "",
      email: "",
      password: "",
      nameBool: false,
      emailBool: false,
      passwordBool: false,
    });
    setAllowBtn({ name: false, email: false, password: false });
    dispatch({
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
  };

  return (
    <FormPropsContext.Provider value={contextVal}>
      {children}
    </FormPropsContext.Provider>
  );
}

export { SignUpFormPropsProvider, FormPropsContext };
