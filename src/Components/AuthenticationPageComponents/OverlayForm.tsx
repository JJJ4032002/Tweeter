import styled from "styled-components";
import { FormContainer, Overlay } from "./OverlayFormCss";

import { UpperContainerBlock } from "./OverlayFormComponents/UpperContainer";

import MiddleContainer from "./OverlayFormComponents/MiddleContainer";

import { useContext } from "react";
import LowerContainer from "./OverlayFormComponents/LowerContainer";
import { AuthenticationPageContext } from "../../Contexts/AuthenticationPageContext";

function OverlayForm() {
  let { FormStyles } = useContext(AuthenticationPageContext);
  let { opacity, top, bottom } = FormStyles;
  return (
    <>
      <Overlay opacity={opacity} top={top} bottom={bottom}>
        <FormContainer>
          <UpperContainerBlock></UpperContainerBlock>
          <MiddleContainer></MiddleContainer>
          <LowerContainer></LowerContainer>
        </FormContainer>
      </Overlay>
    </>
  );
}

export default OverlayForm;
