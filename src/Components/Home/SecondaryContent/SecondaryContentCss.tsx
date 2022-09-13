import styled from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
const SecondaryContentWrapper = styled.div`
  display: flex;
  padding: 0px 1em;
  grid-area: SecondaryContent;
  @media ${devices.mobileL} {
    border-left: 1px solid #cfd9de;
    grid-template-columns: 0.9fr 5fr;
    padding: 0em;
    display: grid;
  }
  @media ${devices.tablet} {
    grid-template-columns: 0.6fr 5fr;
  }
  @media ${devices.laptop} {
    padding: 0.3em 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow: scroll;
    gap: 1.5em;
  }
  &::-webkit-scrollbar {
    width: 0.3em;
    height: 0px;
    border-radius: 0.3em;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 0.3em;
  }
`;

export { SecondaryContentWrapper };
