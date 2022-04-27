import React, { useContext } from "react";
import { LabelBlock, ErrorText } from "./LabelBlockComponentCss";
import { LabelBlockComponentProps } from "../../../../Interfaces and Types/Types";
import { FormPropsContext } from "../../../../Contexts/SignUpFormContext";
import LabelComponent from "../../LabelComponent";
function LabelBlockComponent({ children, type }: LabelBlockComponentProps) {
  let { NameErrRef, EmailErrRef, PasswordErrRef } =
    useContext(FormPropsContext);

  let ref = NameErrRef;
  if (type === "email") {
    ref = EmailErrRef;
  } else if (type === "password" || type === "text") {
    ref = PasswordErrRef;
  }

  return (
    <LabelBlock>
      <LabelComponent type={type} inputType="signUp"></LabelComponent>
      <ErrorText ref={ref}>{children}</ErrorText>
    </LabelBlock>
  );
}

export default LabelBlockComponent;
