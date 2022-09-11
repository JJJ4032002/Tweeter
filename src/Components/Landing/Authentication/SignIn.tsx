import React, { useContext } from "react";
import { AuthenticationPageContext } from "../../../Contexts/AuthenticationPageContext";
import { SignInFormPropsProvider } from "../../../Contexts/SignInFormContext";
import ModalBackdrop from "../../Elements/Modals/ModalBackdrop";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import { Nav } from "./Nav/Nav";
import FormWrapper from "./FormWrapper/FormWrapper";
function SignInForm() {
  let { signInFormStyles } = useContext(AuthenticationPageContext);

  let { opacity, display } = signInFormStyles;

  return (
    <SignInFormPropsProvider>
      <ModalBackdrop display={display} opacity={opacity}>
        <FormWrapper>
          <Nav signIn={true}></Nav>
          <Content signIn={true}></Content>
          <Footer signIn={true}></Footer>
        </FormWrapper>
      </ModalBackdrop>
    </SignInFormPropsProvider>
  );
}

export default SignInForm;
