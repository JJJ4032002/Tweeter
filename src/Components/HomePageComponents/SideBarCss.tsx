import styled, { css } from "styled-components";
import { devices } from "../../Media Queries/Queries";
import { Props } from "../../Interfaces and Types/Interfaces";

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
export { SideBarContainer, RightSideBarContainer };
