import styled from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";

const HeaderWrapper = styled.div`
  display: none;
  grid-area: Header;
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 0.6fr 5fr;
  }
  @media ${devices.laptopM} {
    display: grid;
    grid-template-columns: 1.2fr 3fr;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  width: 100%;
  @media ${devices.laptopM} {
    padding-left: 2em;
  }
`;

export { HeaderWrapper, LogoWrapper };
