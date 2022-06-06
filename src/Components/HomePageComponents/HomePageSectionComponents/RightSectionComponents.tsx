import { ItemDiv } from "../../HomePageCss";
import { Image } from "../../AuthenticationPageCss";
import logo from "../../../assets/Icons/logo.svg";
import { HomeHeading } from "../../HomePageCss";
import { RightSectionMobileData } from "../../../Data";

function RightSectionMobile() {
  return (
    <>
      {RightSectionMobileData.map((item) => {
        return (
          <ItemDiv>
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
        <HomeHeading>Home</HomeHeading>
      </ItemDiv>
    </>
  );
}

export { RightSectionMobile, RightSectionMobileL };
