import { useContext } from "react";
import { AuthenticationPageContext } from "../../../Contexts/AuthenticationPageContext";
import { SignUpFormPropsProvider } from "../../../Contexts/SignUpFormContext";
import ModalBackdrop from "../../Elements/Modals/ModalBackdrop";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import { Nav } from "./Nav/Nav";
import FormWrapper from "./FormWrapper/FormWrapper";
function SignUpForm() {
  let { FormStyles } = useContext(AuthenticationPageContext);
  let { opacity, display } = FormStyles;
  return (
    <>
      <SignUpFormPropsProvider>
        <ModalBackdrop opacity={opacity} display={display}>
          <FormWrapper>
            <Nav signIn={false}></Nav>
            <Content signIn={false}></Content>
            <Footer signIn={false}></Footer>
          </FormWrapper>
        </ModalBackdrop>
      </SignUpFormPropsProvider>
    </>
  );
}

export default SignUpForm;
