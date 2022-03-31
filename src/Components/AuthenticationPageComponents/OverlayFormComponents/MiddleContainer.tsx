import React from "react";
import styled from "styled-components";
import LabelBlockComponent from "./MiddleContainerComponents/LabelBlockComponent";
import {
  MiddleContainerBlock,
  Form,
  DateOfBirthCont,
} from "./MiddleContainerCss";

const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;

function MiddleContainer() {
  return (
    <MiddleContainerBlock>
      <FormHeading>Create your account</FormHeading>
      <Form>
        <LabelBlockComponent type="name">What's your name</LabelBlockComponent>
        <LabelBlockComponent type="email">
          Please enter a valid email
        </LabelBlockComponent>
      </Form>
    </MiddleContainerBlock>
  );
}

export default MiddleContainer;
