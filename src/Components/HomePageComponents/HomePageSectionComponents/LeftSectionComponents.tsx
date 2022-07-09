import { Image } from "../../AuthenticationPageCss";
import { HomeHeading } from "../../HomePageCss";
import { LeftSectionMobileLData, LeftSectionLaptopMData } from "../../../Data";
import { FlexItems } from "../../HomePageCss";
import TweetButtonLogo from "../TweetButtonLogo";
import { User } from "firebase/auth";
import UserStatus from "../../Elements/UserStatus";
import Options from "../../Elements/Options/Options";
import OptionsButton from "../../Elements/Options/OptionsButton";
import TweetButton from "../../Elements/TweetButton";
import ProfilePicture from "../../Elements/ProfilePicture";
import SignOutTooltip from "../../Elements/Tooltip/SignOutTooltip";

function LeftSectionMobile(handleSidebarState: () => void) {
  return (
    <>
      <FlexItems>
        <ProfilePicture InteractOnClick={handleSidebarState}></ProfilePicture>
        <HomeHeading>Home</HomeHeading>
      </FlexItems>
    </>
  );
}

function LeftSectionMobileL(user: User | null) {
  return (
    <>
      <FlexItems>
        {LeftSectionMobileLData.map((item) => {
          return (
            <Options LinkTo="disabled" key={item.key}>
              <Image className="leftSection" src={item.imgSrc} alt="" />
            </Options>
          );
        })}
        <TweetButtonLogo height={undefined} primary={false}></TweetButtonLogo>
      </FlexItems>
      <FlexItems>
        <SignOutTooltip clickable={true} user={user}>
          <ProfilePicture InteractOnClick={null}></ProfilePicture>
        </SignOutTooltip>
      </FlexItems>
    </>
  );
}

function LeftSectionLaptopM(user: User | null) {
  return (
    <>
      <FlexItems>
        {LeftSectionLaptopMData.map((item) => {
          return (
            <Options LinkTo={item.to} key={item.key}>
              <Image className="leftSection" src={item.imgSrc} alt="" />
              <p>{item.text}</p>
            </Options>
          );
        })}
        <OptionsButton>
          <TweetButton></TweetButton>
        </OptionsButton>
      </FlexItems>
      <FlexItems className="flex-row">
        <SignOutTooltip clickable={false} user={user}>
          <UserStatus user={user} className="OptionsText"></UserStatus>
        </SignOutTooltip>
      </FlexItems>
    </>
  );
}

export { LeftSectionMobileL, LeftSectionMobile, LeftSectionLaptopM };
