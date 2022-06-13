import { ExtraSectionContainer, ExtraSectionDiv } from "./ExtraSectionCss";
import { ItemDiv } from "../HomePageCss";
import { Image } from "../AuthenticationPageCss";
import logo from "../../assets/Icons/logo.svg";
import { HomeHeading } from "../HomePageCss";
function ExtraSection() {
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
        <HomeHeading className="RightSectionMobileL">Home</HomeHeading>
      </ItemDiv>
    </ExtraSectionContainer>
  );
}

export default ExtraSection;
