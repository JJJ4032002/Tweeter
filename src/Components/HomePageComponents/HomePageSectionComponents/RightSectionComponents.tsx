import { ItemDiv } from "../../HomePageCss";
import { Image } from "../../AuthenticationPageCss";
import logo from "../../../assets/Icons/logo.svg";
import { HomeHeading } from "../../HomePageCss";
import { RightSectionMobileData } from "../../../Data";
import Trending from "./Trending";
import SearchBar from "./SearchBar";

import Follow from "./Follow";

function RightSectionMobile() {
  return (
    <>
      {RightSectionMobileData.map((item) => {
        return (
          <ItemDiv key={item.key}>
            <Image className="leftSection" src={item.imgSrc} alt="" />
          </ItemDiv>
        );
      })}
    </>
  );
}
function RightSectionMobileL() {
  return (
    <>
      <ItemDiv>
        <Image
          className="leftSection logoInForm gridItemLogo"
          src={logo}
          alt=""
        />
      </ItemDiv>
      <ItemDiv className="HeadingDiv">
        <HomeHeading className="RightSectionMobileL">Home</HomeHeading>
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
