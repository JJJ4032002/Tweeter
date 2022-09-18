import { User } from "firebase/auth";
import {
  MenuLayoutLaptopMData,
  MenuLayoutMobileData,
  MenuLayoutMobileLData,
} from "../../../../Data";
import Img from "../../../Elements/Img";
import Options from "../../../Elements/Options/Options";
import OptionsButton from "../../../Elements/Options/OptionsButton";
import ProfilePicture from "../../../Elements/ProfilePicture";
import SignOutTooltip from "../../../Elements/Tooltip/SignOutTooltip";
import TweetButton from "../../../Elements/TweetButton";
import UserStatus from "../../../Elements/UserStatus";
import TweetButtonLogo from "../../../Elements/TweetButtonLogo";
import { FlexItems, ItemDiv } from "../../HomeCss";
import { UserDocument } from "../../../../Interfaces and Types/Interfaces";

function Mobile() {
  return (
    <>
      {MenuLayoutMobileData.map((item) => {
        return (
          <ItemDiv key={item.key}>
            <Img className="leftSection" src={item.imgSrc} alt="" />
          </ItemDiv>
        );
      })}
    </>
  );
}

function MobileL(user: UserDocument | null) {
  return (
    <>
      <FlexItems>
        {MenuLayoutMobileLData.map((item) => {
          return (
            <Options LinkTo={item.to} key={item.key}>
              <Img className="leftSection" src={item.imgSrc} alt="" />
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

function LaptopM(user: UserDocument | null) {
  return (
    <>
      <FlexItems>
        {MenuLayoutLaptopMData.map((item) => {
          return (
            <Options LinkTo={item.to} key={item.key}>
              <Img className="leftSection" src={item.imgSrc} alt="" />
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

export { MobileL, Mobile, LaptopM };
