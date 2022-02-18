import React from "react";
import styled, { css } from "styled-components";
import BannerImg from "../assets/Images/BannerImg.jpg";
import { devices } from "../Media Queries/Queries";
import logo from "../assets/Icons/logo.svg";
interface Props {
  primary?: boolean;
}
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70vh 40vh;
  grid-template-areas:
    "form"
    "Banner";
  @media ${devices.tablet} {
    grid-template-rows: 60vh 40vh;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1.1fr 0.9fr;
    grid-template-rows: 110vh;
    grid-template-areas: "Banner form";
  }
  @media ${devices.laptopL} {
    grid-template-rows: 100vh;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: 1 / 1 / span 4 / span 4;
`;

const GridItemOne = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  grid-area: Banner;
`;
const GridItemTwo = styled.div`
  height: 100%;
  grid-area: form;
  padding: 1.5em;
  display: grid;
  gap: 0.2em;
  grid-template-rows: 0.8fr 1.2fr 0.7fr 1.5fr 1fr;
  @media ${devices.tablet} {
    grid-template-rows: 1fr 2fr 1fr 2fr 1fr;
    padding: 2em;
    gap: 0.7em;
  }
  @media ${devices.laptopL} {
    padding: 3em 2em;
  }
`;
const AbsImg = styled.img`
  grid-area: 2/2/4/4;
  height: 100%;
  width: 100%;
`;
const DarkImage = styled.img`
  filter: invert(17%) sepia(26%) saturate(1140%) hue-rotate(141deg)
    brightness(91%) contrast(96%);
  height: 100%;
  align-self: center;
`;
const PrimaryHeading = styled.h1`
  font-family: "Montserrat", "Times New Roman", Times, serif;
  align-self: center;
  font-size: clamp(2.2rem, 1.5782rem + 2.7636vw, 6rem);
`;
const SecondaryHeading = styled.h2`
  font-family: "Montserrat", "Times New Roman", Times, serif;
  font-size: clamp(1.5rem, 1.2545rem + 1.0909vw, 3rem);
`;
const SignUpButtonsDiv = styled.div``;
const Buttons = styled.button`
  display: inline-block;
  width: 70%;
  padding: 1em 1.2em;
  font-weight: 600;
  margin: 0.5em 0;
  border-radius: 5em;
  background: transparent;
  border: 0.1em solid rgba(0, 0, 0, 0.2);
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;
const Para = styled.p<Props>`
  width: 70%;
  text-align: center;
  ${(props) =>
    props.primary &&
    css`
      font-weight: 600;
    `}
  @media ${devices.tablet} {
    width: 50%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;
const SignInButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function AuthenticationPage() {
  return (
    <GridContainer>
      <GridItemOne>
        <Image src={BannerImg} alt="BannerImg" />
        <AbsImg src={logo} alt="LogoImg"></AbsImg>
      </GridItemOne>
      <GridItemTwo>
        <DarkImage src={logo} alt="LogoImg"></DarkImage>
        <PrimaryHeading>Happening Now</PrimaryHeading>
        <SecondaryHeading>Join Tweeter today</SecondaryHeading>
        <SignUpButtonsDiv>
          <Buttons>Sign in with google</Buttons>
          <Para>or</Para>
          <Buttons>Sign up with phone or email</Buttons>
        </SignUpButtonsDiv>
        <SignInButtonsDiv>
          <Para primary={true}>Already have an account ?</Para>
          <Buttons>Sign in</Buttons>
        </SignInButtonsDiv>
      </GridItemTwo>
    </GridContainer>
  );
}

export default AuthenticationPage;
