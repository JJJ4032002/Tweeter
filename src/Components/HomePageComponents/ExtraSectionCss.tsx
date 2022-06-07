import styled from "styled-components";
import { devices } from "../../Media Queries/Queries";

const ExtraSectionContainer = styled.div`
  display: none;
  grid-area: ExtraSection;
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 0.6fr 5fr;
  }
`;

export { ExtraSectionContainer };
