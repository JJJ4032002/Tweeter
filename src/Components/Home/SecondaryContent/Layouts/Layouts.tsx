import logo from "../../../../assets/Icons/logo.svg";
import { User } from "firebase/auth";
import Img from "../../../Elements/Img";
import ProfilePicture from "../../../Elements/ProfilePicture";
import Search from "./Search/Search";
import Follow from "./Follow/Follow";
import Trending from "./Trending/Trending";
import { FlexItems, HomeHeading, ItemDiv } from "../../HomeCss";
function Mobile(handleSidebarState: () => void) {
  return (
    <>
      <FlexItems>
        <ProfilePicture InteractOnClick={handleSidebarState}></ProfilePicture>
        <HomeHeading>Home</HomeHeading>
      </FlexItems>
    </>
  );
}
function MobileL(user: User | null, RouteProfile: boolean) {
  return (
    <>
      <ItemDiv>
        <Img
          className="leftSection logoInForm gridItemLogo"
          src={logo}
          alt=""
        />
      </ItemDiv>
      <ItemDiv className="HeadingDiv">
        <HomeHeading className="RightSectionMobileL">
          {" "}
          {RouteProfile
            ? user != null
              ? user.displayName
              : "UserName"
            : "Home"}
        </HomeHeading>
      </ItemDiv>
    </>
  );
}

function Laptop() {
  return (
    <>
      <Search></Search>
      <Trending></Trending>
      <Follow></Follow>
    </>
  );
}

export { Mobile, MobileL, Laptop };
