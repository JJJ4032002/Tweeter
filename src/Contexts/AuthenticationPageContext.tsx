import { createContext, useRef, useState } from "react";
import { AuthenticationPageContextProps } from "../Interfaces and Types/Interfaces";
import { AuthenticationContextProviderChildren } from "../Interfaces and Types/Types";

let AuthenticationPageContext = createContext<AuthenticationPageContextProps>({
  FormStyles: { opacity: 1, display: "none" },
  handleSignUpBtn: (event) => {},
});

function AuthenticationPageContextProvider({
  children,
}: AuthenticationContextProviderChildren) {
  let [FormStyles, setFormStyles] = useState({
    opacity: 1,
    display: "none",
  });
  function handleSignUpBtn(event: React.MouseEvent<HTMLElement>) {
    let ElementType = event.target as Element;
    console.log(ElementType.nodeName);
    if (ElementType.nodeName === "BUTTON") {
      window.scrollTo(0, 0);

      document.body.style.overflowY = "hidden";
      setFormStyles({ opacity: 1, display: "flex" });
    } else {
      window.scrollTo(0, 0);

      document.body.style.overflowY = "visible";
      setFormStyles({ opacity: 1, display: "none" });
    }
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
