import { useContext, useEffect } from "react";
import { AuthenticationPageContextProvider } from "../../Contexts/AuthenticationPageContext";
import { GridContainer } from "./LandingCss";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Main from "./Main/Main";
import Loading from "./Loading";
import { Snackbar } from "@mui/material";
import { UserContext } from "../../Contexts/UserContext";
function Landing() {
  let { signedIn, SnackBarState } = useContext(UserContext);

  useEffect(() => {
    document.body.style.overflowY = "visible";
  }, []);
  return (
    <>
      {signedIn ? (
        <GridContainer>
          <AuthenticationPageContextProvider>
            <Main></Main>
            <SignUp></SignUp>
            <SignIn></SignIn>
            <Snackbar
              open={SnackBarState.openSnackBar}
              autoHideDuration={3000}
              message="Verification Email Sent. Check your spam folder"
              onClose={() => {
                SnackBarState.handleOpenSnackBar(false);
              }}
            ></Snackbar>
          </AuthenticationPageContextProvider>
        </GridContainer>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export { Landing };
