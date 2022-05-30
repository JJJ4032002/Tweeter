import React, { useState } from "react";
import { LeftSection } from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
import SideBar from "./HomePageComponents/SideBar";
import { HomeContainer } from "./HomePageCss";

function HomePage() {
  const [sideBarState, setSideBarState] = useState(false);
  function handleSideBarState(): void {
    setSideBarState((state) => !state);
  }
  return (
    <HomeContainer>
      <LeftSection handleSidebarState={handleSideBarState}></LeftSection>
      <MiddleSection></MiddleSection>
      <RightSection></RightSection>
      <SideBar
        sideBarState={sideBarState}
        handleSidebarState={handleSideBarState}
      ></SideBar>
    </HomeContainer>
  );
}

export default HomePage;
