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
  ],
  FocusAchieved: (event) => {},
  BlurAchieved: (event) => {},
  NameErrRef: { current: null },
  EmailErrRef: { current: null },
  InputChange: (event) => {},
  InputStates: { name: "", email: "" },
  ResetForm: () => {},
  FinBtnState: true,
  validNameEmail: true,
  handleSubmitBtnClick: () => {},
});

function OverlayFormPropsProvider({
  children,
}: OverlayContextProviderChildren) {
  const [styles, dispatch] = useReducer(StylesReducer, [
    {
      type: "name",
      WhichState: "",
    },
    {
      type: "email",
      WhichState: "",
    },
  ]);
  const [allowBtn, setAllowBtn] = useState({ name: false, email: false });
  let NameErrText = useRef<HTMLSpanElement>(null);
  let EmailErrText = useRef<HTMLSpanElement>(null);
  const [inputVals, setInputVals] = useState<InputValues>({
    name: "",
    email: "",
    nameBool: false,
    emailBool: false,
  });
  const [validEmailInp, setValidEmailInp] = useState(false);
  const [validNameEmail, setValidNameEmail] = useState(true);
  function handleSubmitBtnClick() {
    if (validNameEmail) {
      setValidNameEmail(false);
    } else {
      setValidNameEmail(true);
    }
  }
  function FocusAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Focussed", event.target, event.relatedTarget);

    if (
      (inputVals.nameBool && !inputVals.name && event.target.name === "name") ||
      (inputVals.emailBool &&
        !validEmailInp &&
        event.target.name === "email" &&
        inputVals.email) ||
      (inputVals.emailBool &&
        event.target.name === "name" &&
        !inputVals.name &&
        NameErrText.current != null &&
        NameErrText.current.style.display === "block")
    ) {
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
    if (
      inputVals.nameBool &&
      !inputVals.email &&
      event.target.name === "email"
    ) {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "",
      });
    } else if (
      (inputVals.nameBool && !inputVals.name) ||
      (inputVals.emailBool && !inputVals.name && event.target.name === "name")
    ) {
      dispatch({
        type: `${event.target.name}Change`,
        WhichState: "AllRedBlurred",
      });
    } else if (
      (event.target.name === "name" && inputVals.name !== "") ||
      (event.target.name === "email" && inputVals.email !== "")
    ) {
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
    if (event.target.name === "email") {
      setInputVals({
        ...inputVals,
        [event.target.name]: event.target.value,
        emailBool: true,
        nameBool: false,
      });
      let ans = validateEmail(event.target.value);
      if (ans) {
        setValidEmailInp(true);
      } else {
        setValidEmailInp(false);
      }
    } else {
      setInputVals({
        ...inputVals,
        [event.target.name]: event.target.value,
        emailBool: false,
        nameBool: true,
      });
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
  }, [validEmailInp, inputVals.name, inputVals.email]);
  function ResetForm() {
    setInputVals({
      name: "",
      email: "",
      nameBool: false,
      emailBool: false,
    });
    setAllowBtn({ name: false, email: false });
    dispatch({
      type: "ResetFields",
      WhichState: "",
    });
    if (NameErrText.current != null && EmailErrText.current != null) {
      NameErrText.current.style.display = "none";
      EmailErrText.current.style.display = "none";
    }
  }
  let FinBtnState = allowBtn.name && allowBtn.email ? true : false;
  let contextVal = {
    Styles: styles,
    FocusAchieved: FocusAchieved,
    BlurAchieved: BlurAchieved,
    NameErrRef: NameErrText,
    EmailErrRef: EmailErrText,
    InputChange: InputChange,
    InputStates: { name: inputVals.name, email: inputVals.email },
    ResetForm: ResetForm,
    FinBtnState: FinBtnState,
    validNameEmail: validNameEmail,
    handleSubmitBtnClick: handleSubmitBtnClick,
  };

  return (
    <FormPropsContext.Provider value={contextVal}>
      {children}
    </FormPropsContext.Provider>
  );
}

export { OverlayFormPropsProvider, FormPropsContext };
