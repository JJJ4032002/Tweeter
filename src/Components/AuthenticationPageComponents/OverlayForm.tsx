import styled from "styled-components";
import {
  SpanText,
  FormContainer,
  Label,
  Form,
  Input,
  UpperContainer,
  DateOfBirthCont,
  Overlay,
} from "./OverlayFormCss";

import { UpperContainerBlock } from "./OverlayFormComponents/UpperContainer";

import MiddleContainer from "./OverlayFormComponents/MiddleContainer";
import { OverlayFormPropsProvider } from "../../Contexts/OverlayFormContext";
import { useContext } from "react";

import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";

function OverlayForm() {
  let { FormStyles } = useContext(AuthenticationPageContext);
  let { opacity, top, bottom } = FormStyles;
  return (
    <>
      <OverlayFormPropsProvider>
        <Overlay opacity={opacity} top={top} bottom={bottom}>
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
