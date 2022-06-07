import React, { useState } from "react";
import { LeftSection } from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
import SideBar from "./HomePageComponents/SideBar";
import { HomeContainer } from "./HomePageCss";
import { SideBarContextProvider } from "../Contexts/SideBarContext";
import ExtraSection from "./HomePageComponents/ExtraSection";

function HomePage() {
  return (
    <SideBarContextProvider>
      <HomeContainer>
        <LeftSection></LeftSection>
        <MiddleSection></MiddleSection>
        <RightSection></RightSection>
        <SideBar></SideBar>
        <ExtraSection></ExtraSection>
      </HomeContainer>
    </SideBarContextProvider>
  );
}

export default HomePage;
