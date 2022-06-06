import React, { useState } from "react";
import { LeftSection } from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
import SideBar from "./HomePageComponents/SideBar";
import { HomeContainer } from "./HomePageCss";
import { SideBarContextProvider } from "../Contexts/SideBarContext";

function HomePage() {
  return (
    <SideBarContextProvider>
      <HomeContainer>
        <LeftSection></LeftSection>
        <MiddleSection></MiddleSection>
        <RightSection></RightSection>
        <SideBar></SideBar>
      </HomeContainer>
    </SideBarContextProvider>
  );
}

export default HomePage;
