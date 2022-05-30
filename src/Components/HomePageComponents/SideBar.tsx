import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Props } from "../../Interfaces and Types/Interfaces";
import LeftSideBarComponent from "./HomePageSectionComponents/LeftSideBarComponent";
import { sideBarProps } from "../../Interfaces and Types/Interfaces";
const SideBarContainer = styled.div<Props>`
  grid-area: "SideBar";
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-row: 1/4;
  grid-column: 1/3;
  transform: scaleX(0);
  ${(props) =>
    props.sideBarDisp === true &&
    css`
      transform: scaleX(1);
    `}
`;

const RightSideBarContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;
function SideBar({ sideBarState, handleSidebarState }: sideBarProps) {
  return (
    <SideBarContainer>
      <LeftSideBarComponent></LeftSideBarComponent>
      <RightSideBarContainer
        onClick={handleSidebarState}
      ></RightSideBarContainer>
    </SideBarContainer>
  );
}

export default SideBar;
