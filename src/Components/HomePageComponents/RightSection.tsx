import React, { useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

import { sizes } from "../../Media Queries/Queries";

import { RightContainer } from "./RightSectionCss";
import {
  RightSectionMobile,
  RightSectionMobileL,
} from "./HomePageSectionComponents/RightSectionComponents";

function RightSection() {
  let windowWidth = useWindowSize();
  let [RightSectionContent, setRightSectionContent] =
    useState(RightSectionMobile);
  useLayoutEffect(() => {
    if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setRightSectionContent(RightSectionMobileL);
    } else if (windowWidth >= 0) {
      setRightSectionContent(RightSectionMobile);
    }
  }, [windowWidth]);

  return <RightContainer>{RightSectionContent}</RightContainer>;
}

export default RightSection;
