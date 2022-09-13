import { useContext } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import Img from "../../Elements/Img";
import { ItemDiv, HomeHeading } from "../HomeCss";
import { HeaderWrapper, LogoWrapper } from "./HeaderCss";
import logo from "../../../assets/Icons/logo.svg";

function Header() {
  let { RouteProfile, user } = useContext(UserContext);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Img
          className="leftSection logoInForm gridItemLogo"
          src={logo}
          alt=""
        />
      </LogoWrapper>
      <ItemDiv className="HeadingDiv">
        <HomeHeading className="RightSectionMobileL">
          {RouteProfile
            ? user != null
              ? user.displayName
              : "UserName"
            : "Home"}
        </HomeHeading>
      </ItemDiv>
    </HeaderWrapper>
  );
}

export default Header;
