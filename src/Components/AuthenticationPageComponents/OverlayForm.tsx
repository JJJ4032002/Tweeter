import styled from "styled-components";
import {
  SpanText,
  FormContainer,
  Label,
  Form,
  Input,
  UpperContainer,
  Overlay,
  DateOfBirthCont,
} from "./OverlayFormCss";

import { UpperContainerBlock } from "./OverlayFormComponents/UpperContainer";

import MiddleContainer from "./OverlayFormComponents/MiddleContainer";
import { OverlayFormPropsProvider } from "../../Contexts/OverlayFormContext";
import { useContext } from "react";
import { Props } from "../../Interfaces and Types/Interfaces";
const ErrorText = styled.span<Props>`
  display: none;
  color: red;
  font-size: 0.8rem;
  margin-left: 0.4em;
`;
const LabelBlock = styled.div`
  width: 100%;
`;
function OverlayForm() {
  return (
    <>
      <OverlayFormPropsProvider>
        <Overlay>
          <FormContainer>
            <UpperContainerBlock></UpperContainerBlock>
            <MiddleContainer></MiddleContainer>
          </FormContainer>
        </Overlay>
      </OverlayFormPropsProvider>
    </>
  );
}

export default OverlayForm;
