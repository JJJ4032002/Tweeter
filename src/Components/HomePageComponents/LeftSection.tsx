import React, { useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { sizes } from "../../Media Queries/Queries";
import {
  LeftSectionMobileL,
  LeftSectionMobile,
} from "./HomePageSectionComponents/LeftSectionComponents";
import { LeftContainer } from "./LeftSectionCss";

function LeftSection() {
  let windowWidth = useWindowSize();
  let [LeftSectionContent, setLeftSectionContent] = useState(LeftSectionMobile);

  useLayoutEffect(() => {
    console.log("hmm");
    console.log(windowWidth);

    if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setLeftSectionContent(LeftSectionMobileL);
    } else if (windowWidth >= 0) {
      setLeftSectionContent(LeftSectionMobile);
    }
  }, [windowWidth]);

  return <LeftContainer>{LeftSectionContent}</LeftContainer>;
}

export { LeftSection, LeftSectionMobile };
