import React, { useContext, useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { sizes } from "../../Media Queries/Queries";
import {
  LeftSectionMobileL,
  LeftSectionMobile,
} from "./HomePageSectionComponents/LeftSectionComponents";
import { LeftContainer } from "./LeftSectionCss";
import { sideBarPropsContext } from "../../Contexts/SideBarContext";

function LeftSection() {
  let windowWidth = useWindowSize();
  let { handleSideBarState } = useContext(sideBarPropsContext);
  let [LeftSectionContent, setLeftSectionContent] = useState(
    LeftSectionMobile(handleSideBarState)
  );

  useLayoutEffect(() => {
    console.log("hmm");
    console.log(windowWidth);

    if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setLeftSectionContent(LeftSectionMobileL);
    } else if (windowWidth >= 0) {
      setLeftSectionContent(LeftSectionMobile(handleSideBarState));
    }
  }, [windowWidth]);

  return <LeftContainer>{LeftSectionContent}</LeftContainer>;
}

export { LeftSection, LeftSectionMobile };
