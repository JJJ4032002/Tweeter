import profile from "../../../assets/Icons/profile.svg";
import tweet from "../../../assets/Icons/tweet.svg";
import { Image } from "../../AuthenticationPageCss";
import { ItemDiv } from "../../HomePageCss";
import { ProfileDiv } from "../../HomePageCss";
import { HomeHeading } from "../../HomePageCss";
import { LeftSectionMobileLData } from "../../../Data";
import { FlexItems } from "../../HomePageCss";

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
          <img src={profile} alt="gh" />
        </ProfileDiv>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile };
