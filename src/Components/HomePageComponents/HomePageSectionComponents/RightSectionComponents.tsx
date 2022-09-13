import { ItemDiv } from "../../HomePageCss";
import Img from "../../Elements/Img";
import logo from "../../../assets/Icons/logo.svg";
import { HomeHeading } from "../../HomePageCss";
import { MenuLayoutMobileData } from "../../../Data";
import Trending from "./Trending";
import SearchBar from "./SearchBar";

import Follow from "./Follow";
import { useContext } from "react";
import { User } from "firebase/auth";

function RightSectionMobile() {
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
function RightSectionMobileL(user: User | null, RouteProfile: boolean) {
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

function RightSectionLaptop() {
  return (
    <>
      <SearchBar></SearchBar>
      <Trending></Trending>
      <Follow></Follow>
    </>
  );
}

export { RightSectionMobile, RightSectionMobileL, RightSectionLaptop };
