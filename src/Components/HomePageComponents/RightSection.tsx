import React, { useLayoutEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import home from "../../assets/Icons/home.svg";
import search from "../../assets/Icons/search.svg";
import notifications from "../../assets/Icons/notifications.svg";
import messages from "../../assets/Icons/messages.svg";
import { devices } from "../../Media Queries/Queries";
import { sizes } from "../../Media Queries/Queries";
import { LeftSectionMobile } from "./LeftSection";
import logo from "../../assets/Icons/logo.svg";
import { Image } from "../AuthenticationPageCss";
const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;

  grid-area: RightSection;
  @media ${devices.mobileL} {
    grid-template-columns: 0.6fr 5fr;
    display: grid;
  }
`;
const HomeHeading = styled.h4`
  padding: 0 1em;
`;
const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  &.HeadingDiv {
    border-left: 1px solid #cfd9de;
  }
`;
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
function RightSectionMobile() {
  return (
    <>
      <ItemDiv>
        <Image className="leftSection" src={home} alt="" />
      </ItemDiv>
      <ItemDiv>
        <Image className="leftSection" src={search} alt="" />
      </ItemDiv>
      <ItemDiv>
        <Image className="leftSection" src={notifications} alt="" />
      </ItemDiv>
      <ItemDiv>
        <Image className="leftSection" src={messages} alt="" />
      </ItemDiv>
    </>
  );
}
function RightSectionMobileL() {
  return (
    <>
      <ItemDiv>
        <Image
          className="leftSection logoInForm gridItemLogo"
          src={logo}
          alt=""
        />
      </ItemDiv>
      <ItemDiv className="HeadingDiv">
        <HomeHeading>Home</HomeHeading>
      </ItemDiv>
    </>
  );
}

export default RightSection;
