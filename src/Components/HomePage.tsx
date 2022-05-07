import React from "react";
import styled from "styled-components";
import LeftSection from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr 2fr;
  text-align: center;
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
