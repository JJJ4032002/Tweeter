import profile from "../../../assets/Icons/profile.svg";
import tweet from "../../../assets/Icons/tweet.svg";
import { Image } from "../../AuthenticationPageCss";
import { ItemDiv } from "../../HomePageCss";
import { ProfileDiv } from "../../HomePageCss";
import { HomeHeading } from "../../HomePageCss";
import { LeftSectionMobileLData, LeftSectionMobileMData } from "../../../Data";
import { FlexItems } from "../../HomePageCss";
import { Buttons } from "../../AuthenticationPageCss";
import TweetButtonLogo from "../TweetButtonLogo";
import { User } from "firebase/auth";
import LightTooltip from "../../Elements/LightTooltip";
import SignOutOption from "../../Elements/SignOutOption";
import UserStatus from "../../Elements/UserStatus";

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
        <TweetButtonLogo height={undefined} primary={false}></TweetButtonLogo>
      </FlexItems>
      <FlexItems>
        <ProfileDiv className="LeftSectionMobileS">
          <img src={profile} alt="profile" />
        </ProfileDiv>
      </FlexItems>
    </>
  );
}

function LeftSectionLaptopM(user: User | null) {
  return (
    <>
      <FlexItems>
        {LeftSectionMobileMData.map((item) => {
          return (
            <ItemDiv className="OptionsText" key={item.key}>
              <Image className="leftSection" src={item.imgSrc} alt="" />
              <p>{item.text}</p>
            </ItemDiv>
          );
        })}
        <ItemDiv className="TweetButtonDiv">
          <Buttons className="TweetButton" primary={true}>
            Tweet
          </Buttons>
        </ItemDiv>
      </FlexItems>
      <FlexItems className="flex-row">
        <LightTooltip
          title={
            <>
              <UserStatus user={user} className="Tooltip"></UserStatus>
              <SignOutOption
                text={`Log out ${user?.displayName}`}
              ></SignOutOption>
            </>
          }
        >
          <div>
            <UserStatus user={user} className="OptionsText"></UserStatus>
          </div>
        </LightTooltip>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile, LeftSectionLaptopM };
