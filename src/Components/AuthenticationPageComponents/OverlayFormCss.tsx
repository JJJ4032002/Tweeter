import styled from "styled-components";
import { Props } from "../../Interfaces and Types/Interfaces";
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;
const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 0.4em 1em;
  background-color: white;
  border-radius: 0.7em;
  display: grid;
  height: 85%;
  grid-template-rows: 0.5fr 3fr 1fr;
  overflow: auto;
  gap: 0.5em;
`;
const UpperContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
`;
const MiddleContainer = styled.div`
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
export {
  SpanText,
  FormContainer,
  Label,
  Form,
  Input,
  MiddleContainer,
  UpperContainer,
  Overlay,
  DateOfBirthCont,
};
