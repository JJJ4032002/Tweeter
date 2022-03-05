import React, { useEffect, useRef, useState } from "react";
import MainComponent from "./AuthenticationPageComponents/MainComponent";
import OverlayForm from "./AuthenticationPageComponents/OverlayForm";
import { ChangeStyles, InputValues } from "../Interfaces and Types/Types";
import { GridContainer } from "./AuthenticationPageCss";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
const FormPropsContext = React.createContext<OverlayFormProps>({
  ChangeStyles: [
    {
      name: "name",
      borderColor: "black",
      focus: "",
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
});
function AuthenticationPage() {
  const [ChangeStyles, setChangeStyles] = useState<ChangeStyles>([
    {
      name: "name",
      borderColor: "black",
      focus: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
    {
      name: "email",
      borderColor: "black",
      focus: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    },
  ]);
  let NameErrText = useRef(null);
  let EmailErrText = useRef(null);
  const [inputVals, setInputVals] = useState<InputValues>({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(NameErrText.current);
    console.log(EmailErrText.current);
  }, [ChangeStyles]);

  function FocusAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Focussed", event.target.name);
    let FilteredArr = ChangeStyles.filter((value) => {
      return value.name !== event.target.name;
    });
    let newObj = {
      name: event.target.name,
      borderColor: "#2da7ed",
      focus: "",
      fontSize: 0.8,
      position: 5,
      borderWidth: 2,
    };
    if (event.target.name === "name") {
      setChangeStyles([newObj, ...FilteredArr]);
    } else {
      setChangeStyles([...FilteredArr, newObj]);
    }
  }
  function BlurAchieved(event: React.FocusEvent<HTMLInputElement>): void {
    console.log("Blurred", event.target);
    let FilteredArr = ChangeStyles.filter((value) => {
      return value.name !== event.target.name;
    });
    let newObj = {
      name: event.target.name,
      borderColor: "black",
      focus: "",
      fontSize: 1,
      position: 32,
      borderWidth: 1,
    };
    if (event.target.name === "name") {
      setChangeStyles([newObj, ...FilteredArr]);
    } else {
      setChangeStyles([...FilteredArr, newObj]);
    }
  }
  function InputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.name);
    console.log(event.target.value);

    setInputVals({ ...inputVals, [event.target.name]: event.target.value });
  }
  return (
    <GridContainer>
      <MainComponent></MainComponent>
      <FormPropsContext.Provider
        value={{
          ChangeStyles: ChangeStyles,
          FocusAchieved: FocusAchieved,
          BlurAchieved: BlurAchieved,
          NameErrRef: NameErrText,
          EmailErrRef: EmailErrText,
          InputChange: InputChange,
          InputStates: { ...inputVals },
        }}
      >
        <OverlayForm></OverlayForm>
      </FormPropsContext.Provider>
    </GridContainer>
  );
}

export { FormPropsContext, AuthenticationPage };
