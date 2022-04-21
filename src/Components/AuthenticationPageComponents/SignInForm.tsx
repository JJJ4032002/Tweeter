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
function SignInForm() {
  let { signInFormStyles, handleSignUpBtn } = useContext(
    AuthenticationPageContext
  );
  let { SignInResetForm } = useContext(SignInFormPropsContext);
  let { opacity, display } = signInFormStyles;
  return (
    <Overlay display={display} opacity={opacity}>
      <FormContainer>
        <UpperContainerBlock>
          <Image
            id="closeImg"
            onClick={(event) => {
              handleSignUpBtn(event);
              SignInResetForm();
            }}
            src={close}
          ></Image>
          <Image id="logoInForm" src={logo}></Image>
        </UpperContainerBlock>
        <MiddleContainerBlock>
          <LabelComponent type="email" inputType="signIn"></LabelComponent>
          <LabelComponent type="password" inputType="signIn"></LabelComponent>
        </MiddleContainerBlock>
      </FormContainer>
    </Overlay>
  );
}

export default SignInForm;
