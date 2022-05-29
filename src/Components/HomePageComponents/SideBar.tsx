import React from "react";
import styled from "styled-components";
const SideBarContainer = styled.div`
  grid-area: "SideBar";
  grid-row: 1/3;
  grid-column: 1/3;
`;
function SideBar() {
  return <SideBarContainer>SideBar</SideBarContainer>;
}

export default SideBar;
