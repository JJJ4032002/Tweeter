import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import SecondaryContent from "./SecondaryContent/SecondaryContent";
import TweetButtonLogo from "../Elements/TweetButtonLogo";
import { HomeWrapper } from "./HomeCss";
import { SideBarContextProvider } from "../../Contexts/SideBarContext";
import useWindowSize from "../../hooks/useWindowSize";
function Home() {
  let size = useWindowSize();
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
        {size <= 1024 ? "" : <SecondaryContent></SecondaryContent>}
        <SideBar></SideBar>
        <TweetButtonLogo height={MenuHeight} primary={true}></TweetButtonLogo>
      </HomeWrapper>
    </SideBarContextProvider>
  );
}

export default Home;
