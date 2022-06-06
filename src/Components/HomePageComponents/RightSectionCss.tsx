import styled from "styled-components";
import { devices } from "../../Media Queries/Queries";
const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;

  grid-area: RightSection;
  @media ${devices.mobileL} {
    grid-template-columns: 0.9fr 5fr;
    display: grid;
  }
  @media ${devices.tablet} {
    grid-template-columns: 0.6fr 5fr;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1fr;
  }
`;

export { RightContainer };
