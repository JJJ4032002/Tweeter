import React, { useContext, useRef } from "react";

import { Image, Buttons, Para } from "../AuthenticationPageCss";
import logo from "../../assets/Icons/logo.svg";
import BannerImg from "../../assets/Images/BannerImg-min.jpg";
import {
  GridItemOne,
  GridItemTwo,
  SignInButtonsDiv,
  SignUpButtonsDiv,
  PrimaryHeading,
  SecondaryHeading,
} from "./MainComponentCss";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";
function MainComponent() {
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);

  return (
    <>
      <GridItemOne>
        <Image className="BannerImg" src={BannerImg} alt="BannerImg" />
        <Image id="AbsBannerImg" src={logo} alt="LogoImg"></Image>
      </GridItemOne>
      <GridItemTwo>
        <Image id="DarkLogo" src={logo} alt="LogoImg"></Image>
        <PrimaryHeading>Happening Now</PrimaryHeading>
        <SecondaryHeading>Join Tweeter today</SecondaryHeading>
        <SignUpButtonsDiv>
          <Buttons>Sign in with google</Buttons>
          <Para>or</Para>
          <Buttons
            className="SignUpBtn"
            onClick={handleSignUpBtn}
            primary={true}
          >
            Sign up with email
          </Buttons>
        </SignUpButtonsDiv>
        <SignInButtonsDiv>
          <Para primary={true}>Already have an account ?</Para>
          <Buttons onClick={handleSignUpBtn} className="SignIn">
            Sign in
          </Buttons>
        </SignInButtonsDiv>
      </GridItemTwo>
    </>
  );
}

export default MainComponent;
