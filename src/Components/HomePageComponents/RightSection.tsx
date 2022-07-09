import React, { useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { UserContext } from "../../Contexts/UserContext";
import { sizes } from "../../Media Queries/Queries";
import { useContext } from "react";
import { RightContainer } from "./RightSectionCss";
import {
  RightSectionMobile,
  RightSectionMobileL,
  RightSectionLaptop,
} from "./HomePageSectionComponents/RightSectionComponents";

function RightSection() {
  let { user, RouteProfile } = useContext(UserContext);
  let windowWidth = useWindowSize();
  let [RightSectionContent, setRightSectionContent] =
    useState(RightSectionMobile);
  useLayoutEffect(() => {
    console.log("hello");
    if (windowWidth >= Number(sizes.laptop.split("px")[0])) {
      console.log("yo");
      setRightSectionContent(RightSectionLaptop);
    } else if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setRightSectionContent(RightSectionMobileL(user, RouteProfile));
    } else if (windowWidth >= 0) {
      setRightSectionContent(RightSectionMobile);
    }
  }, [windowWidth, RouteProfile]);

  return (
    <RightContainer className="RightContainer">
      {RightSectionContent}
    </RightContainer>
  );
}

export default RightSection;
