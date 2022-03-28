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
      name: "name",
      borderColor: "#536471",
      txtClr: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
  ],
  FocusAchieved: (event) => {},
  BlurAchieved: (event) => {},
  NameErrRef: { current: null },
  EmailErrRef: { current: null },
  InputChange: (event) => {},
  InputStates: { name: "", email: "" },
  ResetForm: () => {},
});

function OverlayFormPropsProvider({
  children,
}: OverlayContextProviderChildren) {
  const [styles, dispatch] = useReducer(StylesReducer, [
    {
      name: "name",
      borderColor: "#cfd9de",
      txtClr: "#536471",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
    {
      name: "email",
      borderColor: "#cfd9de",
      txtClr: "#536471",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
  ]);
  let NameErrText = useRef<HTMLSpanElement>(null);
  let EmailErrText = useRef<HTMLSpanElement>(null);
  const [inputVals, setInputVals] = useState<InputValues>({
    name: "",
    email: "",
    nameBool: false,
    emailBool: false,
  });
  const [validEmailInp, setValidEmailInp] = useState(false);
  useEffect(() => {
    console.log(NameErrText.current);
    console.log(EmailErrText.current);
  }, [styles]);
  function FocusAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Focussed", event.target.name);

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
        name: event.target.name,
        borderColor: "red",
        txtClr: "red",
        fontSize: 0.8,
        position: 5,
        borderWidth: 2,
      });
    } else {
      dispatch({
        type: `${event.target.name}Change`,
        name: event.target.name,
        borderColor: "#2da7ed",
        txtClr: "#2da7ed",
        fontSize: 0.8,
        position: 5,
        borderWidth: 2,
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
  function BlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    if (
      (inputVals.nameBool && !inputVals.name) ||
      (inputVals.emailBool && !inputVals.name && event.target.name === "name")
    ) {
      dispatch({
        type: `${event.target.name}Change`,
        name: event.target.name,
        borderColor: "red",
        txtClr: "#536471",
        fontSize: 1,
        position: 32,
        borderWidth: 1,
      });
    } else if (
      (event.target.name === "name" && inputVals.name !== "") ||
      (event.target.name === "email" && inputVals.email !== "")
    ) {
      dispatch({
        type: `${event.target.name}Change`,
        name: event.target.name,
        borderColor: "#cfd9de",
        txtClr: "#536471",
        fontSize: 0.8,
        position: 5,
        borderWidth: 1,
      });
    } else {
      dispatch({
        type: `${event.target.name}Change`,
        name: event.target.name,
        borderColor: "#cfd9de",
        txtClr: "#536471",
        fontSize: 1,
        position: 32,
        borderWidth: 1,
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

        dispatch({
          type: `emailChange`,
          name: `email`,
          borderColor: "red",
          txtClr: "red",
          fontSize: 0.8,
          position: 5,
          borderWidth: 2,
        });
      } else {
        EmailErrText.current.style.display = "none";

        dispatch({
          type: `emailChange`,
          name: `email`,
          borderColor: "#2da7ed",
          txtClr: "#2da7ed",
          fontSize: 0.8,
          position: 5,
          borderWidth: 2,
        });
      }
    } else if (
      inputVals.emailBool &&
      !inputVals.email &&
      null != EmailErrText.current
    ) {
      EmailErrText.current.style.display = "none";

      dispatch({
        type: `emailChange`,
        name: `email`,
        borderColor: "#2da7ed",
        txtClr: "#2da7ed",
        fontSize: 0.8,
        position: 5,
        borderWidth: 2,
      });
    } else {
      if (inputVals.nameBool && null !== NameErrText.current) {
        if (inputVals.name) {
          NameErrText.current.style.display = "none";

          dispatch({
            type: `nameChange`,
            name: `name`,
            borderColor: "#2da7ed",
            txtClr: "#2da7ed",
            fontSize: 0.8,
            position: 5,
            borderWidth: 2,
          });
        } else {
          NameErrText.current.style.display = "block";
          dispatch({
            type: `nameChange`,
            name: `name`,
            borderColor: "red",
            txtClr: "red",
            fontSize: 0.8,
            position: 5,
            borderWidth: 2,
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
    dispatch({
      type: "ResetFields",
      name: `name`,
      borderColor: "red",
      txtClr: "red",
      fontSize: 0.8,
      position: 5,
      borderWidth: 2,
    });
    if (NameErrText.current != null && EmailErrText.current != null) {
      NameErrText.current.style.display = "none";
      EmailErrText.current.style.display = "none";
    }
  }
  let contextVal = {
    Styles: styles,
    FocusAchieved: FocusAchieved,
    BlurAchieved: BlurAchieved,
    NameErrRef: NameErrText,
    EmailErrRef: EmailErrText,
    InputChange: InputChange,
    InputStates: { name: inputVals.name, email: inputVals.email },
    ResetForm: ResetForm,
  };

  return (
    <FormPropsContext.Provider value={contextVal}>
      {children}
    </FormPropsContext.Provider>
  );
}

export { OverlayFormPropsProvider, FormPropsContext };
