import styled from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";

const ExtraSectionContainer = styled.div`
  display: none;
  grid-area: ExtraSection;
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 0.6fr 5fr;
  }
  @media ${devices.laptopM} {
    display: grid;
    grid-template-columns: 1.2fr 3fr;
  }
`;
const ExtraSectionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  width: 100%;
  @media ${devices.laptopM} {
    padding-left: 2em;
  }
`;

export { ExtraSectionContainer, ExtraSectionDiv };
