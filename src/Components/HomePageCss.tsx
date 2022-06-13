import styled from "styled-components";
import { devices } from "../Media Queries/Queries";
const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 5fr 0.5fr;
  grid-template-areas:
    "LeftSection"
    "MiddleSection"
    "RightSection";

  height: 100vh;
  width: 100%;
  margin: 0 auto;
  @media ${devices.mobileL} {
    width: 100%;
    grid-template-columns: 0.9fr 5fr;

    grid-template-rows: 0.3fr 5fr;
    grid-template-areas:
      "RightSection RightSection"
      "LeftSection MiddleSection";
    max-width: 700px;
  }
  @media ${devices.tablet} {
    grid-template-columns: 0.6fr 5fr;
  }
  @media ${devices.laptop} {
    grid-template-columns: 0.6fr 5fr 2.5fr;
    grid-template-rows: 0.5fr 5fr;
    grid-template-areas:
      "ExtraSection ExtraSection RightSection"
      "LeftSection MiddleSection RightSection";
    max-width: 100%;
  }
  @media ${devices.laptopM} {
    grid-template-columns: 1.2fr 3fr 2fr;
    width: 95%;
    max-width: 1500px;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  &.HeadingDiv {
    border-left: 1px solid #cfd9de;
  }
  &.TweetLogo {
    padding: 0.8em;
    cursor: pointer;
    background: #2da7ed;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &.TweetLogo:hover {
    background: #0d7cbd;
  }
`;
const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
  border-radius: 50%;
  width: min-content;
  border: 0.5px solid black;
  &.LeftSectionMobileS {
    padding: 0.2em;
  }
`;
let HomeHeading = styled.div`
  font-size: clamp(1rem, 0.775rem + 1vw, 1.3rem);
  font-weight: 1000;
  &.RightSectionMobileL {
    padding: 0 0.7em;
  }
`;

const FlexItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
  @media ${devices.laptopM} {
    align-items: start;
  }
  &.flex-row {
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
  }
`;
export { HomeContainer, ItemDiv, ProfileDiv, HomeHeading, FlexItems };
