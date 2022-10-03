import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import SecondaryContent from "./SecondaryContent/SecondaryContent";
import Header from "./Header/Header";
import TweetButtonLogo from "../Elements/TweetButtonLogo";
import EditProfile from "../Profile/Components/EditProfile/EditProfile";
import { HomeWrapper } from "./HomeCss";
import { SideBarContextProvider } from "../../Contexts/SideBarContext";
function Home() {
  const [MenuHeight, setMenuHeight] = useState<number | undefined>(0);
  useEffect(() => {
    setMenuHeight(document.body.querySelector(".Menu")?.clientHeight);
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <SideBarContextProvider>
      <HomeWrapper>
        <Menu></Menu>
        <Outlet></Outlet>
        <SecondaryContent></SecondaryContent>
        <SideBar></SideBar>
        <Header></Header>
        <TweetButtonLogo height={MenuHeight} primary={true}></TweetButtonLogo>
      </HomeWrapper>
    </SideBarContextProvider>
  );
}

export default Home;
