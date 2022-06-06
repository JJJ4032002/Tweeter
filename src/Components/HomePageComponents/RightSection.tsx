import React, { useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import { sizes } from "../../Media Queries/Queries";

import { RightContainer } from "./RightSectionCss";
import {
  RightSectionMobile,
  RightSectionMobileL,
  RightSectionLaptop,
} from "./HomePageSectionComponents/RightSectionComponents";

function RightSection() {
  let windowWidth = useWindowSize();
  let [RightSectionContent, setRightSectionContent] =
    useState(RightSectionMobile);
  useLayoutEffect(() => {
    console.log("hello");
    if (windowWidth >= Number(sizes.laptop.split("px")[0])) {
      setRightSectionContent(RightSectionLaptop);
    } else if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setRightSectionContent(RightSectionMobileL);
    } else if (windowWidth >= 0) {
      setRightSectionContent(RightSectionMobile);
    }
  }, [windowWidth]);

  return <RightContainer>{RightSectionContent}</RightContainer>;
}

export default RightSection;
