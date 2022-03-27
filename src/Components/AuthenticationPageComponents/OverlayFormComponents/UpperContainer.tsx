import React, { useContext } from "react";
import { UpperContainer } from "./UpperContainerCss";
import { Image } from "../../AuthenticationPageCss";
import logo from "../../../assets/Icons/logo.svg";
import close from "../../../assets/Icons/close.svg";
import { AuthenticationPageContext } from "../../../Contexts/AuthenticationPageContext";

export const UpperContainerBlock = () => {
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);
  return (
    <UpperContainer>
      <Image onClick={handleSignUpBtn} id="closeImg" src={close}></Image>
      <Image id="logoInForm" src={logo}></Image>
    </UpperContainer>
  );
};
