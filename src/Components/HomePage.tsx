import React from "react";
import { LeftSection } from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
import SideBar from "./HomePageComponents/SideBar";
import { HomeContainer } from "./HomePageCss";

function HomePage() {
  return (
    <HomeContainer>
      <LeftSection></LeftSection>
      <MiddleSection></MiddleSection>
      <RightSection></RightSection>
      <SideBar></SideBar>
    </HomeContainer>
  );
}

export default HomePage;
