import styled, { css } from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
import { Props } from "../../../Interfaces and Types/Interfaces";
import { GridContainer as LandingPageGridContainer } from "../../Landing/LandingCss";
const Button = styled.button<Props>`
  display: inline-block;
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

  &.FollowButton {
    padding: 0.5em 1.2em;
    border-radius: 2.5em;
    border: transparent;
    font-weight: 800;
  }
  &.TweetButton {
    width: 100%;
    padding: 1.2em 6em;
  }
  ${(props: Props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.colors.primaryBtnBackground};
      color: ${(props) => props.theme.colors.primaryBtnText};
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
      }
    `}

  ${(props: Props) =>
    props.disabled &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `}

  ${(props: Props) =>
    props.size === "small" &&
    css`
      padding: 0.5em 1.2em;
    `}

      ${(props: Props) =>
    props.size === "medium" &&
    css`
      padding: 1em 1.2em;
    `}

    ${(props: Props) =>
    props.size === "large" &&
    css`
      padding: 1.4em 1.2em;
    `}

  ${(props: Props) => {
    return (
      props.secondary &&
      css`
        background-color: ${(props) =>
          props.theme.colors.secondaryBtnBackgound};
        color: ${(props) => props.theme.colors.secondaryBtnText};
        &:hover {
          background-color: ${(props) =>
            props.theme.colors.secondaryBtnBackgroundHover};
        }
      `
    );
  }}
  ${LandingPageGridContainer} & {
    width: 70%;
  }

  @media ${devices.tablet} {
    ${LandingPageGridContainer} & {
      width: 60%;
    }
  }
  @media ${devices.laptopL} {
    ${LandingPageGridContainer} & {
      width: 40%;
    }
  }
`;

export { Button };
