import { useContext } from "react";
import { SignInFormPropsContext } from "../../../../Contexts/SignInFormContext";
import { FormPropsContext } from "../../../../Contexts/SignUpFormContext";
import { FormContainersProps } from "../../../../Interfaces and Types/Interfaces";
import { SubmitButton, FooterBlock } from "./FooterCss";
function LowerContainer({ signIn }: FormContainersProps) {
  let { FinBtnState, handleSubmitBtnClick, loader } =
    useContext(FormPropsContext);
  let { SignInFinBtnState, handleSignInSubmitButton, signInLoader } =
    useContext(SignInFormPropsContext);
  return (
    <FooterBlock>
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
    </FooterBlock>
  );
}

export default LowerContainer;
