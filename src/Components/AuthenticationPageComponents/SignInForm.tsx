import React from "react";
import { Overlay, FormContainer } from "./SignUpFormCss";
import { UpperContainer } from "./SignUpFormComponents/UpperContainerCss";
import { Image } from "../AuthenticationPageCss";
import logo from "../../assets/Icons/logo.svg";
import close from "../../assets/Icons/close.svg";
function SignInForm() {
  return (
    <Overlay display="flex">
      <FormContainer>
        <UpperContainer>
          <Image id="closeImg" src={close}></Image>
          <Image id="logoInForm" src={logo}></Image>
        </UpperContainer>
      </FormContainer>
    </Overlay>
  );
}

export default SignInForm;
