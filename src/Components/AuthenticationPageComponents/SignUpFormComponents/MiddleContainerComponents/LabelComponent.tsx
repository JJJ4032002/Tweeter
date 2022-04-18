import React from "react";
import { Label, SpanText, Input } from "./LabelComponentCss";
import { InputStateProps } from "../../../../Interfaces and Types/Types";
import { inputTypeInterface } from "../../../../Interfaces and Types/Interfaces";
function LabelComponent({ inputType }: inputTypeInterface) {
  let styles = {
    type: "name",
    WhichState: "",
  };
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
