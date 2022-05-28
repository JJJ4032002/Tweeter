import React, { useContext } from "react";
import { UpperContainerBlock } from "./UpperContainerCss";
import { Image } from "../AuthenticationPageCss";
import logo from "../../assets/Icons/logo.svg";
import close from "../../assets/Icons/close.svg";
import leftArrow from "../../assets/Icons/leftArrow.svg";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
import { FormPropsContext } from "../../Contexts/SignUpFormContext";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
import { FormContainersProps } from "../../Interfaces and Types/Interfaces";
export const UpperContainer = ({ signIn }: FormContainersProps) => {
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);
  let { ResetForm, validNameEmail, handleSubmitBtnClick } =
    useContext(FormPropsContext);
  let { SignInResetForm } = useContext(SignInFormPropsContext);
  return (
    <UpperContainerBlock>
      {!signIn ? (
        <>
          <Image
            onClick={(event) => {
              if (validNameEmail) {
                handleSignUpBtn(event);
                ResetForm();
              } else {
                handleSubmitBtnClick(event);
              }
            }}
            className="SignUpBtn"
            id="closeImg"
            src={validNameEmail ? close : leftArrow}
          ></Image>
          <Image className="logoInForm" src={logo}></Image>
        </>
      ) : (
        <>
          {" "}
          <Image
            id="closeImg"
            onClick={(event) => {
              handleSignUpBtn(event);
              SignInResetForm();
            }}
            src={close}
          ></Image>
          <Image className="logoInForm" src={logo}></Image>
        </>
      )}
    </UpperContainerBlock>
  );
};
