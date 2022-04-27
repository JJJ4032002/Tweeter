import MainComponent from "./AuthenticationPageComponents/MainComponent";
import SignUpForm from "./AuthenticationPageComponents/SignUpForm";
import { GridContainer } from "./AuthenticationPageCss";
import { AuthenticationPageContextProvider } from "../Contexts/AuthenticationPageContext";

import SignInForm from "./AuthenticationPageComponents/SignInForm";
function AuthenticationPage() {
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
