import profile from "../../../../assets/Icons/profile.svg";
import close from "../../../../assets/Icons/close.svg";
import { useContext } from "react";
import { sideBarPropsContext } from "../../../../Contexts/SideBarContext";
import { UserContext } from "../../../../Contexts/UserContext";
import { sideBarOptions } from "../../../../Data";
import { ProfileDiv } from "../../HomeCss";
import Options from "../../../Elements/Options/Options";
import {
  ContentWrapper,
  UpperContainer,
  MiddleContainer,
  SideBarFlexItems,
  Name,
  LowerContainer,
} from "./ContentCss";

function Content() {
  let { user } = useContext(UserContext);
  let { handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <ContentWrapper>
      <UpperContainer>
        <h3>Account info</h3>
        <img onClick={handleSideBarState} src={close} alt="" />
      </UpperContainer>
      <MiddleContainer>
        <SideBarFlexItems>
          <ProfileDiv>
            <img src={profile} alt="" />
          </ProfileDiv>
        </SideBarFlexItems>
        <SideBarFlexItems>
          {user !== null ? <Name>{user.name}</Name> : <Name>Loading..</Name>}
        </SideBarFlexItems>
        <SideBarFlexItems className="flex">
          <p>
            <b>109</b> following
          </p>
          <p>
            <b>4</b> followers
          </p>
        </SideBarFlexItems>
      </MiddleContainer>
      <LowerContainer>
        {sideBarOptions.map((ele) => {
          return (
            <Options key={ele.key} LinkTo={ele.to}>
              <img src={ele.imgSrc} alt="" />
              <p>{ele.OptionName}</p>
            </Options>
          );
        })}
      </LowerContainer>
    </ContentWrapper>
  );
}

export default Content;
