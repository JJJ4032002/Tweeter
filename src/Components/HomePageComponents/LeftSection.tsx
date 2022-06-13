import React, { useContext, useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { sizes } from "../../Media Queries/Queries";
import {
  LeftSectionMobileL,
  LeftSectionMobile,
  LeftSectionLaptopM,
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
    if (windowWidth >= Number(sizes.laptopM.split("px")[0])) {
      setLeftSectionContent(LeftSectionLaptopM);
    } else if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setLeftSectionContent(LeftSectionMobileL);
    } else if (windowWidth >= 0) {
      setLeftSectionContent(LeftSectionMobile(handleSideBarState));
    }
  }, [windowWidth]);

  return <LeftContainer>{LeftSectionContent}</LeftContainer>;
}

export { LeftSection, LeftSectionMobile };
