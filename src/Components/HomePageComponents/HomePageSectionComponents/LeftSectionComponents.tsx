import profile from "../../../assets/Icons/profile.svg";
import tweet from "../../../assets/Icons/tweet.svg";
import { Image } from "../../AuthenticationPageCss";
import styled from "styled-components";
import { ItemDiv } from "../../HomePageCss";
import { devices } from "../../../Media Queries/Queries";
import { ProfileDiv } from "../../HomePageCss";
import { HomeHeading } from "../../HomePageCss";
import { LeftSectionMobileLData } from "../../../Data";

const FlexItems = styled.div`
  display: flex;
  align-items: center;
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
        {LeftSectionMobileLData.map((item) => {
          return (
            <ItemDiv>
              <Image className="leftSection" src={item.imgSrc} alt="" />
            </ItemDiv>
          );
        })}
        <ItemDiv className="TweetLogo">
          <Image className="leftSection TweetLogo" src={tweet} alt="" />
        </ItemDiv>
      </FlexItems>
      <FlexItems>
        <ItemDiv>
          <ProfileDiv className="LeftSectionMobileS">
            <img src={profile} alt="gh" />
          </ProfileDiv>
        </ItemDiv>
      </FlexItems>
    </>
  );
}

function LeftSectionMobile(handleSidebarState: () => void) {
  return (
    <>
      <FlexItems>
        <ProfileDiv className="LeftSectionMobileS">
          <img onClick={handleSidebarState} src={profile} alt="gh" />
        </ProfileDiv>
        <HomeHeading>Home</HomeHeading>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile };
