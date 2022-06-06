import React, { useContext } from "react";
import styled from "styled-components";
import close from "../../../assets/Icons/close.svg";
import profile from "../../../assets/Icons/profile.svg";
import { sideBarOptions } from "../../../Data";
import { sideBarPropsContext } from "../../../Contexts/SideBarContext";
import { ProfileDiv } from "../../HomePageCss";
const LeftSideBarContainer = styled.div`
  background: white;
  padding: 1em 0.7em;
  display: flex;
  flex-direction: column;
  gap: 1.6em;
`;
const UpperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
`;
const FlexItems = styled.div`
  &.flex {
    display: flex;
    gap: 0.8em;
    align-items: center;
  }
`;

const Name = styled.h3``;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;
function LeftSideBarComponent() {
  let { handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <LeftSideBarContainer>
      <UpperContainer>
        <h3>Account info</h3>
        <img onClick={handleSideBarState} src={close} alt="" />
      </UpperContainer>
      <MiddleContainer>
        <FlexItems>
          <ProfileDiv>
            <img src={profile} alt="" />
          </ProfileDiv>
        </FlexItems>
        <FlexItems>
          <Name>Rohan Patel</Name>
        </FlexItems>
        <FlexItems className="flex">
          <p>
            <b>109</b> following
          </p>
          <p>
            <b>4</b> followers
          </p>
        </FlexItems>
      </MiddleContainer>
      <LowerContainer>
        {sideBarOptions.map((ele) => {
          return (
            <FlexItems key={ele.key} className="flex">
              <img src={ele.imgSrc} alt="" />
              <p>{ele.OptionName}</p>
            </FlexItems>
          );
        })}
      </LowerContainer>
    </LeftSideBarContainer>
  );
}

export default LeftSideBarComponent;
