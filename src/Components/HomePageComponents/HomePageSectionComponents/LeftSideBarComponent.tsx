import React, { useContext } from "react";
import close from "../../../assets/Icons/close.svg";
import profile from "../../../assets/Icons/profile.svg";
import { sideBarOptions } from "../../../Data";
import { sideBarPropsContext } from "../../../Contexts/SideBarContext";
import { ProfileDiv } from "../../HomePageCss";
import {
  Name,
  LowerContainer,
  LeftSideBarContainer,
  MiddleContainer,
  UpperContainer,
  SideBarFlexItems,
} from "./LeftSideBarComponentCss";
import { UserContext } from "../../../Contexts/UserContext";
function LeftSideBarComponent() {
  let { user } = useContext(UserContext);
  let { handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <LeftSideBarContainer>
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
          <Name>{UserContext.displayName}</Name>
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
            <SideBarFlexItems key={ele.key} className="flex">
              <img src={ele.imgSrc} alt="" />
              <p>{ele.OptionName}</p>
            </SideBarFlexItems>
          );
        })}
      </LowerContainer>
    </LeftSideBarContainer>
  );
}

export default LeftSideBarComponent;
