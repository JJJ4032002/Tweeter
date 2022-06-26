import React, { useEffect, useState } from "react";
import { LeftSection } from "./HomePageComponents/LeftSection";
import MiddleSection from "./HomePageComponents/MiddleSection";
import RightSection from "./HomePageComponents/RightSection";
import SideBar from "./HomePageComponents/SideBar";
import { HomeContainer } from "./HomePageCss";
import { SideBarContextProvider } from "../Contexts/SideBarContext";
import ExtraSection from "./HomePageComponents/ExtraSection";
import TweetButtonLogo from "./HomePageComponents/TweetButtonLogo";
import ProfilePage from "./ProfilePage";

function HomePage() {
  const [RightContainerHeight, setRightContainerHeight] = useState<
    number | undefined
  >(0);
  useEffect(() => {
    setRightContainerHeight(
      document.body.querySelector(".RightContainer")?.clientHeight
    );
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <SideBarContextProvider>
      <HomeContainer>
        <LeftSection></LeftSection>
        <ProfilePage></ProfilePage>
        <RightSection></RightSection>
        <SideBar></SideBar>
        <ExtraSection></ExtraSection>
        <TweetButtonLogo
          height={RightContainerHeight}
          primary={true}
        ></TweetButtonLogo>
      </HomeContainer>
    </SideBarContextProvider>
  );
}

export default HomePage;
