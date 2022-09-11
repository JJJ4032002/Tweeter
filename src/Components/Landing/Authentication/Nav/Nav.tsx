import React, { useContext } from "react";
import { AuthenticationPageContext } from "../../../../Contexts/AuthenticationPageContext";
import { SignInFormPropsContext } from "../../../../Contexts/SignInFormContext";
import { FormPropsContext } from "../../../../Contexts/SignUpFormContext";
import { FormContainersProps } from "../../../../Interfaces and Types/Interfaces";
import { Image } from "../../LandingCss";
import logo from "../../../../assets/Icons/logo.svg";
import leftArrow from "../../../../assets/Icons/leftArrow.svg";
import close from "../../../../assets/Icons/close.svg";
import { NavBlock } from "./NavCss";
export const Nav = ({ signIn }: FormContainersProps) => {
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);
  let { ResetForm, validNameEmail, handleSubmitBtnClick } =
    useContext(FormPropsContext);
  let { SignInResetForm } = useContext(SignInFormPropsContext);
  return (
    <NavBlock>
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
    </NavBlock>
  );
};
