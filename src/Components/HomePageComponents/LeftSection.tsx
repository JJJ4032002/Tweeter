import React, { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { sizes } from "../../Media Queries/Queries";
import {
  LeftSectionMobileL,
  LeftSectionMobile,
  LeftSectionLaptopM,
} from "./HomePageSectionComponents/LeftSectionComponents";
import { LeftContainer } from "./LeftSectionCss";
import { sideBarPropsContext } from "../../Contexts/SideBarContext";
import { UserContext } from "../../Contexts/UserContext";

function LeftSection() {
  let windowWidth = useWindowSize();
  let { handleSideBarState } = useContext(sideBarPropsContext);
  let { user } = useContext(UserContext);
  let [LeftSectionContent, setLeftSectionContent] = useState(
    LeftSectionMobile(handleSideBarState)
  );

  useEffect(() => {
    if (windowWidth >= Number(sizes.laptopM.split("px")[0])) {
      setLeftSectionContent(LeftSectionLaptopM(user));
    } else if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setLeftSectionContent(LeftSectionMobileL(user));
    } else if (windowWidth >= 0) {
      setLeftSectionContent(LeftSectionMobile(handleSideBarState));
    }
  }, [windowWidth, user]);

  return <LeftContainer>{LeftSectionContent}</LeftContainer>;
}

export { LeftSection, LeftSectionMobile };
