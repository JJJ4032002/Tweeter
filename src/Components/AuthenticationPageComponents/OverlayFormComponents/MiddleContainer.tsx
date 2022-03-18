import React from "react";
import LabelBlockComponent from "./LabelBlockComponent";
import {
  MiddleContainerBlock,
  Form,
  SpanText,
  Label,
  DateOfBirthCont,
  Input,
  LabelBlock,
  ErrorText,
} from "./MiddleContainerCss";

function MiddleContainer() {
  return (
    <MiddleContainerBlock>
      <h2>Create your account</h2>
      <Form>
        <LabelBlockComponent type="name">What's your name</LabelBlockComponent>
        <LabelBlockComponent type="email">
          Please enter a valid email
        </LabelBlockComponent>

        <DateOfBirthCont></DateOfBirthCont>
      </Form>
    </MiddleContainerBlock>
  );
}

export default MiddleContainer;
