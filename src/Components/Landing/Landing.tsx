import { useEffect } from "react";
import { AuthenticationPageContextProvider } from "../../Contexts/AuthenticationPageContext";
import { GridContainer } from "./LandingCss";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Main from "./Main/Main";
function Landing() {
  useEffect(() => {
    document.body.style.overflowY = "visible";
  }, []);
  return (
    <GridContainer>
      <AuthenticationPageContextProvider>
        <Main></Main>
        <SignUp></SignUp>
        <SignIn></SignIn>
      </AuthenticationPageContextProvider>
    </GridContainer>
  );
}

export { Landing };
