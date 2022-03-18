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
} from "../../../Interfaces and Types/Types";
import { FormPropsContext } from "../../../Contexts/OverlayFormContext";
function LabelBlockComponent({ children, type }: LabelBlockComponentProps) {
  let {
    Styles,
    FocusAchieved,
    BlurAchieved,
    NameErrRef,
    EmailErrRef,
    InputChange,
    InputStates,
  } = useContext(FormPropsContext);
  let styles = {
    name: "name",
    borderColor: "black",
    txtClr: "",
    fontSize: 1,
    position: 32,
    borderWidth: 1,
  };
  let ref = type === "name" ? NameErrRef : EmailErrRef;
  let SpanName = type === "name" ? "Name" : "Email";
  if (type === "name") {
    styles = Styles[0];
  } else {
    styles = Styles[1];
  }
  return (
    <LabelBlock>
      <Label
        borderWidth={styles.borderWidth}
        borderColor={styles.borderColor}
        htmlFor={type}
      >
        <Input
          value={InputStates[type as keyof InputStateProps]}
          onChange={InputChange}
          name={type}
          onFocus={FocusAchieved}
          onBlur={BlurAchieved}
          type={type}
        />
        <SpanText
          fontSize={styles.fontSize}
          position={styles.position}
          borderColor={styles.borderColor}
        >
          {SpanName}
        </SpanText>
      </Label>
      <ErrorText ref={ref}>{children}</ErrorText>
    </LabelBlock>
  );
}

export default LabelBlockComponent;
