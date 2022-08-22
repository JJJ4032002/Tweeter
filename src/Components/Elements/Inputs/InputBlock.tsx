import React from "react";
import { InputBlockWrapper } from "./InputBlockCss";
import { LabelBlockComponentProps } from "../../../Interfaces and Types/Types";

function InputBlock({ children }: LabelBlockComponentProps) {
  return <InputBlockWrapper>{children}</InputBlockWrapper>;
}

export default InputBlock;
