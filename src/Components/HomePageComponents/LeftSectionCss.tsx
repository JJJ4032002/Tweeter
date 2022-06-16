import styled from "styled-components";
import { devices } from "../../Media Queries/Queries";
const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: LeftSection;
  padding: 0 1em;
  @media ${devices.mobileL} {
    flex-direction: column;
    padding: 0.5em 0;
  }
  @media ${devices.laptopM} {
    align-items: start;
    padding-left: 1.1em;
  }
`;

export { LeftContainer };
