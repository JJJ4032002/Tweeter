import React, { useContext, useRef } from "react";
import { AuthenticationPageContext } from "../../../Contexts/AuthenticationPageContext";
import SignInWithGoogle from "../../../firebase/SignIn/SignInGoogle";
import Button from "../../Elements/Button";
import Img from "../../Elements/Img";
import {
  GridItemOne,
  GridItemTwo,
  PrimaryHeading,
  SecondaryHeading,
  SignUpButtonsDiv,
  SignInButtonsDiv,
} from "./MainCss";
import BannerImg from "../../../assets/Images/BannerImg-min.jpg";
import logo from "../../../assets/Icons/logo.svg";
import { Para } from "../LandingCss";

function Main() {
  let { handleSignUpBtn } = useContext(AuthenticationPageContext);

  return (
    <>
      <GridItemOne>
        <Img className="BannerImg" src={BannerImg} alt="BannerImg" />
        <Img id="AbsBannerImg" src={logo} alt="LogoImg"></Img>
      </GridItemOne>
      <GridItemTwo>
        <Img id="DarkLogo" src={logo} alt="LogoImg"></Img>
        <PrimaryHeading>Happening Now</PrimaryHeading>
        <SecondaryHeading>Join Tweeter today</SecondaryHeading>
        <SignUpButtonsDiv>
          <Button onClick={SignInWithGoogle}>Sign in with google</Button>
          <Para>or</Para>
          <Button
            className="SignUpBtn"
            primary={true}
            onClick={handleSignUpBtn}
          >
            Sign up with email
          </Button>
        </SignUpButtonsDiv>
        <SignInButtonsDiv>
          <Para primary={true}>Already have an account ?</Para>
          <Button onClick={handleSignUpBtn} className="SignIn">
            Sign in
          </Button>
        </SignInButtonsDiv>
      </GridItemTwo>
    </>
  );
}

export default Main;
