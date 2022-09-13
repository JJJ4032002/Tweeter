import styled from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: Menu;
  padding: 0 1em;
  @media ${devices.mobileL} {
    justify-content: space-between;
    flex-direction: column;
    padding: 0.5em 0;
  }
  @media ${devices.laptopM} {
    align-items: start;
    padding-left: 1.1em;
  }
`;

export { MenuWrapper };
