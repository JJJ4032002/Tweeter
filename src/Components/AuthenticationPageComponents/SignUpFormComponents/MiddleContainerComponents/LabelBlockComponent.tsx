import React from "react";
import { LabelBlock } from "./LabelBlockComponentCss";
import { LabelBlockComponentProps } from "../../../../Interfaces and Types/Types";

function LabelBlockComponent({ children }: LabelBlockComponentProps) {
  return <LabelBlock>{children}</LabelBlock>;
}

export default LabelBlockComponent;
