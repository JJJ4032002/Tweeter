import React, { useContext } from "react";

import { FormPropsContext } from "../../../Contexts/OverlayFormContext";
import { SubmitButton, LowerContainerBlock } from "./LowerContainerCss";

function LowerContainer() {
  let { FinBtnState } = useContext(FormPropsContext);
  return (
    <LowerContainerBlock>
      <SubmitButton FinBtnState={FinBtnState}>Submit</SubmitButton>
    </LowerContainerBlock>
  );
}

export default LowerContainer;
