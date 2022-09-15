import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import useWindowSize from "../../../hooks/useWindowSize";
import { sizes } from "../../../Media Queries/Queries";
import { MenuWrapper } from "./MenuCss";
import { Mobile, LaptopM, MobileL } from "./Layouts/Layouts";

function Menu() {
  let windowWidth = useWindowSize();

  let { user } = useContext(UserContext);
  let [Content, setContent] = useState(Mobile);

  useEffect(() => {
    console.log("Change in useEffect");
    if (windowWidth >= Number(sizes.laptopM.split("px")[0])) {
      setContent(LaptopM(user));
    } else if (windowWidth >= Number(sizes.mobileL.split("px")[0])) {
      setContent(MobileL(user));
    } else if (windowWidth >= 0) {
      setContent(Mobile);
    }
  }, [windowWidth, user]);

  return <MenuWrapper className="Menu">{Content}</MenuWrapper>;
}

export { Menu, Mobile };
