import { createContext, useRef, useState } from "react";
import { AuthenticationPageContextProps } from "../Interfaces and Types/Interfaces";
import { AuthenticationContextProviderChildren } from "../Interfaces and Types/Types";

let AuthenticationPageContext = createContext<AuthenticationPageContextProps>({
  FormStyles: { opacity: 1, top: 0, bottom: 0 },
  handleSignUpBtn: (event) => {},
});

function AuthenticationPageContextProvider({
  children,
}: AuthenticationContextProviderChildren) {
  let [FormStyles, setFormStyles] = useState({
    opacity: 1,
    top: -1000,
    bottom: 1000,
  });
  function handleSignUpBtn(event: React.MouseEvent<HTMLElement>) {
    console.log(event.target);
    window.scrollTo(0, 0);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    setFormStyles({ opacity: 1, top: 0, bottom: 0 });
  }
  let contextObj = {
    FormStyles: FormStyles,
    handleSignUpBtn: handleSignUpBtn,
  };
  return (
    <AuthenticationPageContext.Provider value={contextObj}>
      {children}
    </AuthenticationPageContext.Provider>
  );
}

export { AuthenticationPageContextProvider, AuthenticationPageContext };
