import { ItemDiv } from "../../HomePageCss";
import { Image } from "../../AuthenticationPageCss";
import styled from "styled-components";
import home from "../../../assets/Icons/home.svg";
import search from "../../../assets/Icons/search.svg";
import notifications from "../../../assets/Icons/notifications.svg";
import messages from "../../../assets/Icons/messages.svg";
import logo from "../../../assets/Icons/logo.svg";
const HomeHeading = styled.h4`
  padding: 0 1em;
`;
function RightSectionMobile() {
  return (
    <>
      <ItemDiv>
        <Image className="leftSection" src={home} alt="" />
      </ItemDiv>
      <ItemDiv>
        <Image className="leftSection" src={search} alt="" />
      </ItemDiv>
      <ItemDiv>
        <Image className="leftSection" src={notifications} alt="" />
      </ItemDiv>
      <ItemDiv>
        <Image className="leftSection" src={messages} alt="" />
      </ItemDiv>
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
