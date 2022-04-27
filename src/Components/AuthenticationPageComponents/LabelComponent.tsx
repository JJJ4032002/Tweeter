import React, { useContext } from "react";
import { Label, SpanText, Input } from "./LabelComponentCss";
import { InputStateProps } from "../../Interfaces and Types/Types";
import { inputTypeInterface } from "../../Interfaces and Types/Interfaces";
import { FormPropsContext } from "../../Contexts/SignUpFormContext";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
function LabelComponent({ type, inputType }: inputTypeInterface) {
  let { Styles, FocusAchieved, BlurAchieved, InputChange, InputStates } =
    useContext(FormPropsContext);
  let {
    SignInStyles,
    signInInputStates,
    SignInFocusAchieved,
    SignInBlurAchieved,
    SignInInputChange,
  } = useContext(SignInFormPropsContext);
  let styles = {
    type: "name",
    WhichState: "",
  };
  if (type === "name") {
    styles = Styles[0];
  } else if (type === "email") {
    styles = Styles[1];
  } else {
    styles = Styles[2];
  }

  if (inputType === "signIn") {
    InputStates = signInInputStates;
    FocusAchieved = SignInFocusAchieved;
    BlurAchieved = SignInBlurAchieved;
    InputChange = SignInInputChange;
    if (type === "email") {
      styles = SignInStyles[0];
    } else {
      styles = SignInStyles[1];
    }
  }
  let FinType = "text";
  if (type === "password") {
    FinType = "password";
  } else if (type === "text") {
    type = "password";
  }
  let SpanName = "Name";

  if (type === "email") {
    SpanName = "Email";
  } else if (type === "password" || type === "text") {
    SpanName = "Password";
  }

  return (
    <Label WhichState={styles.WhichState} htmlFor={type}>
      <Input
        value={InputStates[type as keyof InputStateProps]}
        id={type}
        onChange={InputChange}
        name={type}
        onFocus={FocusAchieved}
        onBlur={BlurAchieved}
        type={FinType}
      />
      <SpanText WhichState={styles.WhichState}>{SpanName}</SpanText>
    </Label>
  );
}

export default LabelComponent;
