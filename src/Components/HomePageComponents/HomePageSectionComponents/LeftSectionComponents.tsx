import profile from "../../../assets/Icons/profile.svg";
import tweet from "../../../assets/Icons/tweet.svg";
import { Image } from "../../AuthenticationPageCss";
import { ItemDiv } from "../../HomePageCss";
import { ProfileDiv } from "../../HomePageCss";
import { HomeHeading } from "../../HomePageCss";
import { LeftSectionMobileLData, LeftSectionMobileMData } from "../../../Data";
import { FlexItems } from "../../HomePageCss";
import { Buttons } from "../../AuthenticationPageCss";

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

function LeftSectionMobileL() {
  return (
    <>
      <FlexItems>
        {LeftSectionMobileLData.map((item) => {
          return (
            <ItemDiv key={item.key}>
              <Image className="leftSection" src={item.imgSrc} alt="" />
            </ItemDiv>
          );
        })}
        <ItemDiv className="TweetLogo">
          <Image className="leftSection TweetLogo" src={tweet} alt="" />
        </ItemDiv>
      </FlexItems>
      <FlexItems>
        <ProfileDiv className="LeftSectionMobileS">
          <img src={profile} alt="profile" />
        </ProfileDiv>
      </FlexItems>
    </>
  );
}

function LeftSectionLaptopM() {
  return (
    <>
      <FlexItems>
        {LeftSectionMobileMData.map((item) => {
          return (
            <ItemDiv key={item.key}>
              <Image className="leftSection" src={item.imgSrc} alt="" />
              <p>{item.text}</p>
            </ItemDiv>
          );
        })}
        <ItemDiv>
          <Buttons className="TweetButton" primary={true}>
            Tweet
          </Buttons>
        </ItemDiv>
      </FlexItems>
      <FlexItems className="flex-row">
        <ProfileDiv className="LeftSectionMobileS">
          <img src={profile} alt="gh" />
        </ProfileDiv>
        <h5>Home</h5>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile, LeftSectionLaptopM };
