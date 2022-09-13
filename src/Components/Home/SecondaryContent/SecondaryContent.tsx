import React, { useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { sideBarPropsContext } from "../../../Contexts/SideBarContext";
import { UserContext } from "../../../Contexts/UserContext";
import useWindowSize from "../../../hooks/useWindowSize";
import { sizes } from "../../../Media Queries/Queries";
import { Laptop, MobileL, Mobile } from "./Layouts/Layouts";
import { SecondaryContentWrapper } from "./SecondaryContentCss";

function SecondaryContent() {
  let { user, RouteProfile } = useContext(UserContext);
  let windowWidth = useWindowSize();
  let { handleSideBarState } = useContext(sideBarPropsContext);
  let [Content, setContent] = useState(Mobile(handleSideBarState));
  useLayoutEffect(() => {
    if (windowWidth >= Number(sizes.laptop.split("px")[0])) {
      setContent(Laptop);
    } else if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setContent(MobileL(user, RouteProfile));
    } else if (windowWidth >= 0) {
      setContent(Mobile(handleSideBarState));
    }
  }, [windowWidth, RouteProfile]);

  return <SecondaryContentWrapper>{Content}</SecondaryContentWrapper>;
}

export default SecondaryContent;
