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
const FlexItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2em;
`;
const ItemDiv = styled.div`
  padding: 0.2em;
  &.TweetLogo {
    padding: 0.8em;
    cursor: pointer;
    background: #2da7ed;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &.TweetLogo:hover {
    background: #0d7cbd;
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

export default LeftSectionMobileL;
