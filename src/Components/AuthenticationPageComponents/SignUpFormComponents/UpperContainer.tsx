import React, { useContext } from "react";
import { UpperContainer } from "./UpperContainerCss";
import { Image } from "../../AuthenticationPageCss";
import logo from "../../../assets/Icons/logo.svg";
import close from "../../../assets/Icons/close.svg";
import leftArrow from "../../../assets/Icons/leftArrow.svg";
import { AuthenticationPageContext } from "../../../Contexts/AuthenticationPageContext";
import { FormPropsContext } from "../../../Contexts/SignUpFormContext";
export const UpperContainerBlock = () => {
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);
  let { ResetForm, validNameEmail, handleSubmitBtnClick } =
    useContext(FormPropsContext);
  return (
    <UpperContainer>
      <Image
        onClick={(event) => {
          if (validNameEmail) {
            handleSignUpBtn(event);
            ResetForm();
          } else {
            handleSubmitBtnClick(event);
          }
        }}
        id="closeImg"
        src={validNameEmail ? close : leftArrow}
      ></Image>
      <Image id="logoInForm" src={logo}></Image>
    </UpperContainer>
  );
};
