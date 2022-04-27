import styled from "styled-components";
import { FormContainer, Overlay } from "./SignUpFormCss";
import { UpperContainer } from "./UpperContainer";
import MiddleContainer from "./MiddleContainer";
import { useContext } from "react";
import LowerContainer from "./LowerContainer";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
import { SignUpFormPropsProvider } from "../../Contexts/SignUpFormContext";
function SignUpForm() {
  let { FormStyles } = useContext(AuthenticationPageContext);
  let { opacity, display } = FormStyles;
  return (
    <>
      <SignUpFormPropsProvider>
        <Overlay opacity={opacity} display={display}>
          <FormContainer>
            <UpperContainer signIn={false}></UpperContainer>
            <MiddleContainer signIn={false}></MiddleContainer>
            <LowerContainer signIn={false}></LowerContainer>
          </FormContainer>
        </Overlay>
      </SignUpFormPropsProvider>
    </>
  );
}

export default SignUpForm;
