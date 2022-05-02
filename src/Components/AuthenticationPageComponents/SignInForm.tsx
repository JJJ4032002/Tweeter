import React, { useContext } from "react";
import { Overlay, FormContainer } from "./SignUpFormCss";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
import { UpperContainer } from "./UpperContainer";
import MiddleContainer from "./MiddleContainer";
import LowerContainer from "./LowerContainer";
import { SignInFormPropsProvider } from "../../Contexts/SignInFormContext";
function SignInForm() {
  let { signInFormStyles } = useContext(AuthenticationPageContext);

  let { opacity, display } = signInFormStyles;

  return (
    <SignInFormPropsProvider>
      <Overlay id="signIn" display={display} opacity={opacity}>
        <FormContainer>
          <UpperContainer signIn={true}></UpperContainer>
          <MiddleContainer signIn={true}></MiddleContainer>
          <LowerContainer signIn={true}></LowerContainer>
        </FormContainer>
      </Overlay>
    </SignInFormPropsProvider>
  );
}

export default SignInForm;
