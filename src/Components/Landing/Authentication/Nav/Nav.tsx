import React, { useContext } from "react";
import { AuthenticationPageContext } from "../../../../Contexts/AuthenticationPageContext";
import { SignInFormPropsContext } from "../../../../Contexts/SignInFormContext";
import { FormPropsContext } from "../../../../Contexts/SignUpFormContext";
import { FormContainersProps } from "../../../../Interfaces and Types/Interfaces";
import Img from "../../../Elements/Img";
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
          <Img
            onClick={(event) => {
              if (validNameEmail) {
                handleSignUpBtn("SignUp", "close");
                ResetForm();
              } else {
                handleSubmitBtnClick(event);
              }
            }}
            className="SignUpBtn"
            id="closeImg"
            src={validNameEmail ? close : leftArrow}
          ></Img>
          <Img className="logoInForm" src={logo}></Img>
        </>
      ) : (
        <>
          {" "}
          <Img
            className="closeImg"
            onClick={(event) => {
              handleSignUpBtn("SignIn", "close");
              SignInResetForm();
            }}
            src={close}
          ></Img>
          <Img className="logoInForm" src={logo}></Img>
        </>
      )}
    </NavBlock>
  );
};
