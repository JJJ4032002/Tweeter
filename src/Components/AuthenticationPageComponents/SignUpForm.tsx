import styled from "styled-components";
import { FormContainer } from "./SignUpFormCss";
import { UpperContainer } from "./UpperContainer";
import MiddleContainer from "./MiddleContainer";
import { useContext } from "react";
import LowerContainer from "./LowerContainer";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
import { SignUpFormPropsProvider } from "../../Contexts/SignUpFormContext";
import ModalBackdrop from "../Elements/Modals/ModalBackdrop";
function SignUpForm() {
  let { FormStyles } = useContext(AuthenticationPageContext);
  let { opacity, display } = FormStyles;
  return (
    <>
      <SignUpFormPropsProvider>
        <ModalBackdrop opacity={opacity} display={display}>
          <FormContainer>
            <UpperContainer signIn={false}></UpperContainer>
            <MiddleContainer signIn={false}></MiddleContainer>
            <LowerContainer signIn={false}></LowerContainer>
          </FormContainer>
        </ModalBackdrop>
      </SignUpFormPropsProvider>
    </>
  );
}

export default SignUpForm;
