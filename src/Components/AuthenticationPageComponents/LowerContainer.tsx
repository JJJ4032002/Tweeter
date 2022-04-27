import React, { useContext } from "react";

import { FormPropsContext } from "../../Contexts/SignUpFormContext";
import { FormContainersProps } from "../../Interfaces and Types/Interfaces";
import { SubmitButton, LowerContainerBlock } from "./LowerContainerCss";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
function LowerContainer({ signIn }: FormContainersProps) {
  let { FinBtnState, handleSubmitBtnClick } = useContext(FormPropsContext);
  let { SignInFinBtnState, handleSignInSubmitButton } = useContext(
    SignInFormPropsContext
  );
  return (
    <LowerContainerBlock>
      {!signIn ? (
        <>
          <SubmitButton
            onClick={handleSubmitBtnClick}
            FinBtnState={FinBtnState}
          >
            Submit
          </SubmitButton>
        </>
      ) : (
        <>
          <SubmitButton
            onClick={handleSignInSubmitButton}
            FinBtnState={SignInFinBtnState}
          >
            Submit
          </SubmitButton>
        </>
      )}
    </LowerContainerBlock>
  );
}

export default LowerContainer;
