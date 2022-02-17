import React from "react";
import styled from "styled-components";
import BannerImg from "../assets/Images/BannerImg.jpg";
import { devices } from "../Media Queries/Queries";
import logo from "../assets/Icons/logo.svg";
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 50vh;
  grid-template-areas:
    "form"
    "Banner";
  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "Banner form";
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
  padding: 0.5em;
  display: grid;
  grid-template-rows: 1fr 2fr 2.5fr 1fr;
`;
const AbsImg = styled.img`
  grid-area: 2/2/4/4;
  height: 100%;
  width: 100%;
`;
const DarkImage = styled.img`
  filter: invert(17%) sepia(26%) saturate(1140%) hue-rotate(141deg)
    brightness(91%) contrast(96%);
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
      </GridItemTwo>
    </GridContainer>
  );
}

export default AuthenticationPage;
