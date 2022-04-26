import React, { useContext } from "react";
import { Overlay, FormContainer } from "./SignUpFormCss";
import { UpperContainerBlock } from "./SignUpFormComponents/UpperContainerCss";
import { Image } from "../AuthenticationPageCss";
import logo from "../../assets/Icons/logo.svg";
import close from "../../assets/Icons/close.svg";
import { MiddleContainerBlock } from "./SignUpFormComponents/MiddleContainerCss";
import LabelComponent from "./SignUpFormComponents/MiddleContainerComponents/LabelComponent";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
import PasswordSpanComponent from "./SignUpFormComponents/MiddleContainerComponents/PasswordSpanComponent";
import { UpperContainer } from "./SignUpFormComponents/UpperContainer";
import MiddleContainer from "./SignUpFormComponents/MiddleContainer";
function SignInForm() {
  let { signInFormStyles, handleSignUpBtn } = useContext(
    AuthenticationPageContext
  );
  let { SignInResetForm, signInShowPassword, handleSignInShowPasswordSpan } =
    useContext(SignInFormPropsContext);
  let { opacity, display } = signInFormStyles;
  let signInpasswordType = "password";
  if (signInShowPassword) {
    signInpasswordType = "text";
  }
  return (
    <Overlay display={display} opacity={opacity}>
      <FormContainer>
        <UpperContainer signIn={true}></UpperContainer>
        <MiddleContainer signIn={true}></MiddleContainer>
      </FormContainer>
    </Overlay>
  );
}

export default SignInForm;
