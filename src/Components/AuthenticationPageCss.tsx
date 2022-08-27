import styled, { css } from "styled-components/macro";
import { devices } from "../Media Queries/Queries";
import { Props } from "../Interfaces and Types/Interfaces";
const Buttons = styled.button<Props>`
  display: inline-block;
  width: 70%;
  padding: 1em 1.2em;
  font-weight: 600;
  cursor: pointer;
  margin: 0.5em 0;
  border-radius: 5em;
  background: ${(props) => props.theme.colors.secondarySignUpBtnBackground};
  color: ${(props) => props.theme.colors.secondarySignUpBtnText};
  border: 0.1em solid
    ${(props) => props.theme.colors.primarySignUpBtnBorderColour};
  &.Edit {
    width: max-content;
    padding: 0.7em 1.5em;
  }
  &.SignIn {
    background: ${(props) => props.theme.colors.primarySignUpBtnBackground};
    color: ${(props) => props.theme.colors.primarySignUpBtnText};
  }
  &.SignIn:hover {
    background: ${(props) =>
      props.theme.colors.primarySignUpBtnBackgroundHover};
  }
  &:hover {
    background: ${(props) =>
      props.theme.colors.secondarySignUpBtnBackgroundHover};
  }
  & ~ &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
  &.TweetButton {
    width: 100%;
    padding: 1.2em 6em;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.colors.primaryBtnBackground};
      color: ${(props) => props.theme.colors.primaryBtnText};
    `}
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;
const Para = styled.p<Props>`
  width: 70%;
  text-align: center;
  font-size: clamp(0.8rem, 0.65rem + 0.6667vw, 1rem);
  ${(props) =>
    props.primary &&
    css`
      font-weight: 600;
    `}
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80vh 40vh;
  grid-template-areas:
    "form"
    "Banner";
  @media ${devices.mobileM} {
    grid-template-rows: 65vh 40vh;
  }
  @media ${devices.mobileL} {
    grid-template-rows: 70vh 40vh;
  }
  @media ${devices.tablet} {
    grid-template-rows: 70vh 40vh;
  }
  @media ${devices.laptop} {
    grid-template-columns: 1.1fr 0.9fr;
    grid-template-rows: 110vh;
    grid-template-areas: "Banner form";
  }
  @media ${devices.laptopL} {
    grid-template-rows: 100vh;
  }
`;

const Image = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;

  &.BannerImg {
    grid-area: 1 / 1 / span 4 / span 4;
    width: 100%;
  }
  &#closeImg {
    height: 50%;
  }
  &.logoInForm {
    filter: invert(51%) sepia(81%) saturate(844%) hue-rotate(174deg)
      brightness(96%) contrast(93%);
  }
  &#AbsBannerImg {
    grid-area: 2/2/4/4;
    height: 100%;
    width: 100%;
  }
  &#DarkLogo {
    filter: invert(51%) sepia(81%) saturate(844%) hue-rotate(174deg)
      brightness(96%) contrast(93%);
    height: 100%;
    align-self: center;
  }
  &.leftSection {
    height: initial;
  }
  &.gridItemLogo {
    margin: 0.1em auto;
    padding: 0.3em;
    border-radius: 50%;
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
  &.AccountImage {
    width: 100%;
  }
`;

export { Buttons, Para, Image, GridContainer };
