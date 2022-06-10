import MainComponent from "./AuthenticationPageComponents/MainComponent";
import SignUpForm from "./AuthenticationPageComponents/SignUpForm";
import { GridContainer } from "./AuthenticationPageCss";
import { AuthenticationPageContextProvider } from "../Contexts/AuthenticationPageContext";
import SignInForm from "./AuthenticationPageComponents/SignInForm";
import { useEffect } from "react";
function AuthenticationPage() {
  useEffect(() => {
    document.body.style.overflowY = "visible";
  }, []);
  return (
    <GridContainer>
      <AuthenticationPageContextProvider>
        <MainComponent></MainComponent>
        <SignUpForm></SignUpForm>
        <SignInForm></SignInForm>
      </AuthenticationPageContextProvider>
    </GridContainer>
  );
}

export { AuthenticationPage };
