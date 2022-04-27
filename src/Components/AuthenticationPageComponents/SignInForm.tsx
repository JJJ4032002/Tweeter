import React, { useContext } from "react";
import { Overlay, FormContainer } from "./SignUpFormCss";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
import { UpperContainer } from "./SignUpFormComponents/UpperContainer";
import MiddleContainer from "./SignUpFormComponents/MiddleContainer";
import LowerContainer from "./SignUpFormComponents/LowerContainer";
function SignInForm() {
  let { signInFormStyles } = useContext(AuthenticationPageContext);

  let { opacity, display } = signInFormStyles;

  return (
    <Overlay display={display} opacity={opacity}>
      <FormContainer>
        <UpperContainer signIn={true}></UpperContainer>
        <MiddleContainer signIn={true}></MiddleContainer>
        <LowerContainer signIn={true}></LowerContainer>
      </FormContainer>
    </Overlay>
  );
}

export default SignInForm;
