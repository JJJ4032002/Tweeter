import styled from "styled-components";
import { FormContainer, Overlay } from "./SignUpFormCss";
import { UpperContainer } from "./SignUpFormComponents/UpperContainer";
import MiddleContainer from "./SignUpFormComponents/MiddleContainer";
import { useContext } from "react";
import LowerContainer from "./SignUpFormComponents/LowerContainer";
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
            <UpperContainer></UpperContainer>
            <MiddleContainer></MiddleContainer>
            <LowerContainer></LowerContainer>
          </FormContainer>
        </Overlay>
      </SignUpFormPropsProvider>
    </>
  );
}

export default SignUpForm;
