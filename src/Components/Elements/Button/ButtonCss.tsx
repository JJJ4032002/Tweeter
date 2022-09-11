import styled, { css } from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
import { Props } from "../../../Interfaces and Types/Interfaces";
const Button = styled.button<Props>`
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
      &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
      }
    `}
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.laptopL} {
    width: 40%;
  }
`;

export { Button };
