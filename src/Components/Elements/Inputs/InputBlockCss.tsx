import styled, { css } from "styled-components/macro";
import { Props } from "../../../Interfaces and Types/Interfaces";
const Label = styled.label<Props>`
  border-width: 1px;
  border-color: #cfd9de;
  border-style: solid;
  position: relative;
  padding: 0.5em 0.5em;
  border-radius: 0.2em;
  display: block;
  width: 100%;
  transition: border-width 150 ease, border-color 150 ease;
  background-color: transparent;
  ${(props) =>
    props.WhichState === "AllRedFocussed" &&
    css`
      border-width: 2px;
      border-color: red;
    `}
  ${(props) =>
    props.WhichState === "AllRedBlurred" &&
    css`
      border-width: 1px;
      border-color: red;
    `}
      ${(props) =>
    props.WhichState === "AllBlueFocussed" &&
    css`
      border-width: 2px;
      border-color: #2da7ed;
    `}
        ${(props) =>
    props.WhichState === "WithTextBlurred" &&
    css`
      border-width: 1px;
      border-color: #cfd9de;
    `}
     ${(props) =>
    props.WhichState === "WithTextRedBlurred" &&
    css`
      border-width: 1px;
      border-color: red;
    `}
`;
const SpanText = styled.span<Props>`
  left: 1.5%;
  top: 32%;
  font-size: 1rem;
  color: #536471;
  transition: top 150ms ease, font-size 150ms ease, color 150ms ease;
  position: absolute;
  ${(props) =>
    props.WhichState === "AllRedFocussed" &&
    css`
      top: 5%;
      font-size: 0.8rem;
      color: red;
    `}
  ${(props) =>
    props.WhichState === "AllRedBlurred" &&
    css`
      top: 32%;
      font-size: 1rem;
      color: #536471;
    `}
     ${(props) =>
    props.WhichState === "AllBlueFocussed" &&
    css`
      top: 5%;
      font-size: 0.8rem;
      color: #2da7ed;
    `}
      ${(props) =>
    props.WhichState === "WithTextBlurred" &&
    css`
      top: 5%;
      font-size: 0.8rem;
      color: #536471;
    `}
     ${(props) =>
    props.WhichState === "WithTextRedBlurred" &&
    css`
      top: 5%;
      font-size: 0.8rem;
      color: red;
    `}
`;

const ErrorText = styled.span<Props>`
  display: none;
  color: red;
  font-size: 0.8rem;
  margin-left: 0.4em;
`;
const InputBlockWrapper = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  border: none;
  font-size: 1.2rem;
  margin-top: 0.8em;
  background-color: transparent;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  -webkit-appearance: none;
  border: none;
  font-size: 1.2rem;
  margin-top: 0.8em;
  background-color: transparent;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }
`;
export { Label, InputBlockWrapper, SpanText, Input, ErrorText, TextArea };
