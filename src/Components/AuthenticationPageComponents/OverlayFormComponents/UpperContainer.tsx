import React from "react";
import { UpperContainer } from "./UpperContainerCss";
import { Image } from "../../AuthenticationPageCss";
import logo from "../../../assets/Icons/logo.svg";
import close from "../../../assets/Icons/close.svg";

export const UpperContainerBlock = () => {
  return (
    <UpperContainer>
      <Image id="closeImg" src={close}></Image>
      <Image id="logoInForm" src={logo}></Image>
    </UpperContainer>
  );
};
