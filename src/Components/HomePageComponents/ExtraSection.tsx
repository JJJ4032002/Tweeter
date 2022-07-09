import { ExtraSectionContainer, ExtraSectionDiv } from "./ExtraSectionCss";
import { ItemDiv } from "../HomePageCss";
import { Image } from "../AuthenticationPageCss";
import logo from "../../assets/Icons/logo.svg";
import { HomeHeading } from "../HomePageCss";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
function ExtraSection() {
  let { RouteProfile, user } = useContext(UserContext);

  return (
    <ExtraSectionContainer>
      <ExtraSectionDiv>
        <Image
          className="leftSection logoInForm gridItemLogo"
          src={logo}
          alt=""
        />
      </ExtraSectionDiv>
      <ItemDiv className="HeadingDiv">
        <HomeHeading className="RightSectionMobileL">
          {RouteProfile
            ? user != null
              ? user.displayName
              : "UserName"
            : "Home"}
        </HomeHeading>
      </ItemDiv>
    </ExtraSectionContainer>
  );
}

export default ExtraSection;
