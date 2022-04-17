import React, { useContext } from "react";
import styled from "styled-components";
import LabelBlockComponent from "./MiddleContainerComponents/LabelBlockComponent";
import { MiddleContainerBlock, Form, PasswordSpan } from "./MiddleContainerCss";
import { FormPropsContext } from "../../../Contexts/SignUpFormContext";

const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;

function MiddleContainer() {
  let { validNameEmail, showPassword, handleShowPasswordSpan } =
    useContext(FormPropsContext);
  let passwordType = "password";
  if (showPassword) {
    passwordType = "text";
  }
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
              <LabelBlockComponent type={passwordType}>
                Please enter a password greater than 8 characters
              </LabelBlockComponent>
              {!showPassword ? (
                <PasswordSpan onClick={handleShowPasswordSpan}>
                  Show Password
                </PasswordSpan>
              ) : (
                <PasswordSpan onClick={handleShowPasswordSpan}>
                  Hide Password
                </PasswordSpan>
              )}
            </div>
          </Form>
        </>
      )}
    </MiddleContainerBlock>
  );
}

export default MiddleContainer;
