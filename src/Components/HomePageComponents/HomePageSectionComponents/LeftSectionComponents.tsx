import React from "react";
import home from "../../../assets/Icons/home.svg";
import search from "../../../assets/Icons/search.svg";
import notifications from "../../../assets/Icons/notifications.svg";
import messages from "../../../assets/Icons/messages.svg";
import profile from "../../../assets/Icons/profile.svg";
import settings from "../../../assets/Icons/settings.svg";
import tweet from "../../../assets/Icons/tweet.svg";
import { Image } from "../../AuthenticationPageCss";
import styled from "styled-components";
import { ItemDiv } from "../../HomePageCss";
import { devices } from "../../../Media Queries/Queries";
const FlexItems = styled.div`
  display: flex;
  gap: 0.7em;
  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`;

function LeftSectionMobileL() {
  return (
    <>
      <FlexItems>
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
        <ItemDiv>
          <Image className="leftSection" src={profile} alt="" />
        </ItemDiv>
        <ItemDiv>
          <Image className="leftSection" src={settings} alt="" />
        </ItemDiv>
        <ItemDiv className="TweetLogo">
          <Image className="leftSection TweetLogo" src={tweet} alt="" />
        </ItemDiv>
      </FlexItems>
      <FlexItems>
        <ItemDiv>
          <Image src={home}></Image>
        </ItemDiv>
      </FlexItems>
    </>
  );
}

function LeftSectionMobile() {
  return (
    <>
      <FlexItems>
        <img src="" alt="gh" />
        <h4>Home</h4>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile };
