import React, { useContext } from "react";

import { FormPropsContext } from "../../../Contexts/SignUpFormContext";
import { SubmitButton, LowerContainerBlock } from "./LowerContainerCss";

function LowerContainer() {
  let { FinBtnState, handleSubmitBtnClick } = useContext(FormPropsContext);
  return (
    <LowerContainerBlock>
      <SubmitButton onClick={handleSubmitBtnClick} FinBtnState={FinBtnState}>
        Submit
      </SubmitButton>
    </LowerContainerBlock>
  );
}

export default LowerContainer;
