import { createContext, useRef, useState } from "react";
import { AuthenticationPageContextProps } from "../Interfaces and Types/Interfaces";
import { AuthenticationContextProviderChildren } from "../Interfaces and Types/Types";

let AuthenticationPageContext = createContext<AuthenticationPageContextProps>({
  FormStyles: { opacity: 1, display: "none" },
  handleSignUpBtn: (event) => {},
  signInFormStyles: { opacity: 1, display: "none" },
});

function AuthenticationPageContextProvider({
  children,
}: AuthenticationContextProviderChildren) {
  let [FormStyles, setFormStyles] = useState({
    opacity: 1,
    display: "none",
  });
  let [signInFormStyles, setSignInFormStyles] = useState({
    opacity: 1,
    display: "none",
  });
  function handleSignUpBtn(event: React.MouseEvent<HTMLElement>) {
    let ElementType = event.target as Element;

    if (ElementType.nodeName === "BUTTON") {
      window.scrollTo(0, 0);

      document.body.style.overflowY = "hidden";
      if (ElementType.className === "SignUpBtn") {
        setFormStyles({ opacity: 1, display: "flex" });
      } else {
        console.log("hello");
        setSignInFormStyles({ opacity: 1, display: "flex" });
      }
    } else {
      window.scrollTo(0, 0);

      document.body.style.overflowY = "visible";
      if (ElementType.className === "SignUpBtn") {
        setFormStyles({ opacity: 1, display: "none" });
      } else {
        setSignInFormStyles({ opacity: 1, display: "none" });
      }
    }
  }
  let contextObj = {
    FormStyles: FormStyles,
    handleSignUpBtn: handleSignUpBtn,
    signInFormStyles: signInFormStyles,
  };
  return (
    <AuthenticationPageContext.Provider value={contextObj}>
      {children}
    </AuthenticationPageContext.Provider>
  );
}

export { AuthenticationPageContextProvider, AuthenticationPageContext };
