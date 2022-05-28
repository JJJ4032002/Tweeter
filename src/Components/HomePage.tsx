import React from "react";
import styled from "styled-components";
import { LeftSection } from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
import { devices } from "../Media Queries/Queries";
const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 5fr 0.5fr;
  grid-template-areas:
    "LeftSection"
    "MiddleSection"
    "RightSection";

  height: 100vh;
  width: 95%;
  margin: 0 auto;
  @media ${devices.mobileL} {
    width: 100%;
    grid-template-columns: 0.6fr 5fr;

    grid-template-rows: 0.3fr 5fr;
    grid-template-areas:
      "RightSection RightSection"
      "LeftSection MiddleSection";
    max-width: 700px;
  }
`;
function HomePage() {
  return (
    <HomeContainer>
      <LeftSection></LeftSection>
      <MiddleSection></MiddleSection>
      <RightSection></RightSection>
    </HomeContainer>
  );
}

export default HomePage;
