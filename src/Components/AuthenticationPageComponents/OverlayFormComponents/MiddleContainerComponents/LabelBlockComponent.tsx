import React, { useContext } from "react";
import {
  Label,
  LabelBlock,
  SpanText,
  Input,
  ErrorText,
} from "./LabelBlockComponentCss";
import {
  InputStateProps,
  LabelBlockComponentProps,
} from "../../../../Interfaces and Types/Types";
import { FormPropsContext } from "../../../../Contexts/OverlayFormContext";
function LabelBlockComponent({ children, type }: LabelBlockComponentProps) {
  let {
    Styles,
    FocusAchieved,
    BlurAchieved,
    NameErrRef,
    EmailErrRef,
    PasswordErrRef,
    InputChange,
    InputStates,
  } = useContext(FormPropsContext);
  let styles = {
    type: "name",
    WhichState: "",
  };
  let SpanName = "Name";
  let ref = NameErrRef;
  if (type === "email") {
    ref = EmailErrRef;
    SpanName = "Email";
  } else if (type === "password") {
    ref = PasswordErrRef;
    SpanName = "Password";
  }

  if (type === "name") {
    styles = Styles[0];
  } else if (type === "email") {
    styles = Styles[1];
  } else {
    styles = Styles[2];
  }
  let FinType = "text";
  return (
    <LabelBlock>
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
      <ErrorText ref={ref}>{children}</ErrorText>
    </LabelBlock>
  );
}

export default LabelBlockComponent;
