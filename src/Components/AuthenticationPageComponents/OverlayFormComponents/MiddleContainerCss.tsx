import styled from "styled-components";
import { Props } from "../../../Interfaces and Types/Interfaces";
const MiddleContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  overflow-y: auto;
  width: 90%;
  margin: 0 auto;
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

const DateOfBirthCont = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;
const Label = styled.label<Props>`
  border-width: ${(props) => props.borderWidth}px;
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  position: relative;
  padding: 0.5em 0.5em;
  border-radius: 0.2em;
  display: block;
  width: 100%;
  transition: border-width 150 ease, border-color 150 ease;
  background-color: transparent;
`;
const SpanText = styled.span<Props>`
  left: 1.5%;
  top: ${(props) => props.position}%;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.borderColor};
  transition: top 150ms ease, font-size 150ms ease;
  position: absolute;
`;
const ErrorText = styled.span<Props>`
  display: none;
  color: red;
  font-size: 0.8rem;
  margin-left: 0.4em;
`;
const LabelBlock = styled.div`
  width: 100%;
`;

export {
  MiddleContainerBlock,
  Form,
  SpanText,
  Label,
  DateOfBirthCont,
  Input,
  LabelBlock,
  ErrorText,
};
