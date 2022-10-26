import styled from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;

  &.BannerImg {
    grid-area: 1 / 1 / span 4 / span 4;
    width: 100%;
    height: 100%;
  }
  &.closeImg {
    width: 25px;
  }
  &.logoInForm {
    width: 25px;
    filter: invert(51%) sepia(81%) saturate(844%) hue-rotate(174deg)
      brightness(96%) contrast(93%);
  }
  &#AbsBannerImg {
    grid-area: 2/2/4/4;
    width: 100%;
  }
  &#DarkLogo {
    filter: invert(51%) sepia(81%) saturate(844%) hue-rotate(174deg)
      brightness(96%) contrast(93%);
    align-self: center;
    width: 50px;
  }
  &.leftSection {
    height: initial;
  }
  &.gridItemLogo {
    margin: 0.1em auto;
    padding: 0.3em;
    border-radius: 50%;
    width: 30px;
    border: 1px solid transparent;
    @media ${devices.laptopM} {
      margin: 0.1em 0;
      padding: 0;
    }
  }
  &.gridItemLogo:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &.TweetLogo {
    filter: invert(100%) sepia(0%) saturate(109%) hue-rotate(181deg)
      brightness(115%) contrast(101%);
  }
  &.flexImage {
    width: 60%;
    margin-left: auto;
  }
  &.ProfileImage {
    width: 100%;
    border-radius: 50%;
  }
`;

export { Img };
