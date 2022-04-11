import React, { useContext } from "react";
import styled from "styled-components";
import LabelBlockComponent from "./MiddleContainerComponents/LabelBlockComponent";
import {
  MiddleContainerBlock,
  Form,
  DateOfBirthCont,
} from "./MiddleContainerCss";
import { FormPropsContext } from "../../../Contexts/OverlayFormContext";

const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;

function MiddleContainer() {
  let { validNameEmail } = useContext(FormPropsContext);
  return (
    <MiddleContainerBlock>
      {validNameEmail ? (
        <>
          {" "}
          <FormHeading>Create your account</FormHeading>
          <Form>
            <LabelBlockComponent type="name">
              What's your name
            </LabelBlockComponent>
            <LabelBlockComponent type="email">
              Please enter a valid email
            </LabelBlockComponent>
          </Form>
        </>
      ) : (
        <>
          {" "}
          <FormHeading>Enter Password</FormHeading>
          <Form>
            <div>
              <LabelBlockComponent type="password">
                Please enter a password greater than 8 characters
              </LabelBlockComponent>
            </div>
          </Form>
        </>
      )}
    </MiddleContainerBlock>
  );
}

export default MiddleContainer;
