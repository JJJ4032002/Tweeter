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
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
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

export { HomeContainer, ItemDiv };
