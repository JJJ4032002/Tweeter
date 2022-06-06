import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Props } from "../../Interfaces and Types/Interfaces";
import LeftSideBarComponent from "./HomePageSectionComponents/LeftSideBarComponent";
import { devices } from "../../Media Queries/Queries";
import { sideBarPropsContext } from "../../Contexts/SideBarContext";
const SideBarContainer = styled.div<Props>`
  grid-area: "SideBar";
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-row: 1/4;
  grid-column: 1/3;
  transform: translateX(-100%);
  transform-origin: left;
  transition: transform 0.3s ease-out;
  ${(props) =>
    props.sideBarDisp === true &&
    css`
      transform: translateX(0%);
    `}
  @media ${devices.mobileL} {
    display: none;
  }
`;

const RightSideBarContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;
function SideBar() {
  let { sideBarState, handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <SideBarContainer sideBarDisp={sideBarState}>
      <LeftSideBarComponent></LeftSideBarComponent>
      <RightSideBarContainer
        onClick={handleSideBarState}
      ></RightSideBarContainer>
    </SideBarContainer>
  );
}

export default SideBar;
