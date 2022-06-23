import styled from "styled-components/macro";
import { devices } from "../Media Queries/Queries";
import { Props } from "../Interfaces and Types/Interfaces";
import { css } from "styled-components";
const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 5fr 0.5fr;
  grid-template-areas:
    "LeftSection"
    "MiddleSection"
    "RightSection";
  min-height: 100vh;
  min-height: -webkit-fill-available;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media ${devices.mobileL} {
    width: 100%;
    height: 100vh;
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

const ItemDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 1em;

  &.HeadingDiv {
    border-left: 1px solid #cfd9de;
    border-radius: 0;
    padding: 0.8em;
  }
  &.TweetLogo {
    padding: 0.8em;
    cursor: pointer;
    background: #2da7ed;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: fixed;
    top: calc(100% - (2 * ${(props) => props.height}px));
    left: calc(100% - 4em);
    @media ${devices.mobileL} {
      position: static;
    }
  }
  &.TweetLogo:hover {
    background: #0d7cbd;
  }
  ${(props) =>
    props.primary &&
    css`
      display: flex;
      @media ${devices.mobileL} {
        display: none;
      }
    `}
  @media ${devices.laptopM} {
    padding: 0.7em 0.9em;
    &.TweetButtonDiv {
      padding: 0.7em 0em;
    }
    &.OptionsText {
      border-radius: 2.5em;
    }
    &.OptionsText:hover {
      background-color: lightgray;
    }
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
    gap: 0.8em;
  }
  &.flex-row {
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
  }
`;
export { HomeContainer, ItemDiv, ProfileDiv, HomeHeading, FlexItems };
