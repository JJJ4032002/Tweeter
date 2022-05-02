import React, { useContext } from "react";

import { FormPropsContext } from "../../Contexts/SignUpFormContext";
import { FormContainersProps } from "../../Interfaces and Types/Interfaces";
import { SubmitButton, LowerContainerBlock } from "./LowerContainerCss";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
function LowerContainer({ signIn }: FormContainersProps) {
  let { FinBtnState, handleSubmitBtnClick, loader } =
    useContext(FormPropsContext);
  let { SignInFinBtnState, handleSignInSubmitButton, signInLoader } =
    useContext(SignInFormPropsContext);
  return (
    <LowerContainerBlock>
      {!signIn ? (
        <>
          <SubmitButton
            onClick={handleSubmitBtnClick}
            FinBtnState={FinBtnState}
          >
            {!loader ? "Submit" : "Loading..."}
          </SubmitButton>
        </>
      ) : (
        <>
          <SubmitButton
            onClick={handleSignInSubmitButton}
            FinBtnState={SignInFinBtnState}
          >
            {!signInLoader ? "Submit" : "Loading..."}
          </SubmitButton>
        </>
      )}
    </LowerContainerBlock>
  );
}

export default LowerContainer;
