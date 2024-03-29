import styled, { css } from "styled-components/macro";
import { devices } from "../../Media Queries/Queries";
import { Props } from "../../Interfaces and Types/Interfaces";
const Buttons = styled.button<Props>`
  display: inline-block;
  width: 70%;
  padding: 1em 1.2em;
  font-weight: 600;
  cursor: pointer;
  margin: 0.5em 0;
  border-radius: 5em;
  background: ${(props) => props.theme.colors.secondarySignInBtnBackground};
  color: ${(props) => props.theme.colors.secondarySignInBtnText};
  border: 0.1em solid
    ${(props) => props.theme.colors.primarySignInBtnBorderColour};
  &.Edit {
    width: max-content;
    padding: 0.7em 1.5em;
  }
  &.SignIn {
    background: ${(props) => props.theme.colors.primarySignInBtnBackground};
    color: ${(props) => props.theme.colors.primarySignInBtnText};
  }
  &.SignIn:hover {
    background: ${(props) =>
      props.theme.colors.primarySignInBtnBackgroundHover};
  }
  &:hover {
    background: ${(props) =>
      props.theme.colors.secondarySignInBtnBackgroundHover};
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

export { Para, GridContainer, Buttons };
