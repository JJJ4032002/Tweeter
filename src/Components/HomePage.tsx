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
import { Outlet } from "react-router-dom";
import EditProfile from "./ProfilePageComponents/EditProfile";

function HomePage({ EditProfileState }: { EditProfileState: boolean }) {
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
        <Outlet></Outlet>
        <RightSection></RightSection>
        <SideBar></SideBar>
        <ExtraSection></ExtraSection>
        <TweetButtonLogo
          height={RightContainerHeight}
          primary={true}
        ></TweetButtonLogo>
      </HomeContainer>
      <EditProfile EditProfileState={EditProfileState}></EditProfile>
    </SideBarContextProvider>
  );
}

export default HomePage;
