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
        <ItemDiv>
          <ProfileDiv className="LeftSectionMobileS">
            <img src={profile} alt="gh" />
          </ProfileDiv>
          {user !== null ? <h5>{user.displayName}</h5> : <h5>Loading..</h5>}
        </ItemDiv>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile, LeftSectionLaptopM };
