import React, { useContext } from "react";
import styled from "styled-components";
import LabelBlockComponent from "./SignUpFormComponents/MiddleContainerComponents/LabelBlockComponent";
import { MiddleContainerBlock, Form, PasswordSpan } from "./MiddleContainerCss";
import { FormPropsContext } from "../../Contexts/SignUpFormContext";
import PasswordSpanComponent from "./PasswordSpanComponent";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
import { FormContainersProps } from "../../Interfaces and Types/Interfaces";
import LabelComponent from "./LabelComponent";
const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;

function MiddleContainer({ signIn }: FormContainersProps) {
  let { validNameEmail, showPassword, handleShowPasswordSpan } =
    useContext(FormPropsContext);
  let { signInShowPassword, handleSignInShowPasswordSpan } = useContext(
    SignInFormPropsContext
  );
  let passwordType = "password";
  if (showPassword) {
    passwordType = "text";
  }
  let signInpasswordType = "password";
  if (signInShowPassword) {
    signInpasswordType = "text";
  }
  return (
    <MiddleContainerBlock>
      {!signIn ? (
        <>
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
                  <PasswordSpanComponent
                    showPassword={showPassword}
                    handleShowPasswordSpan={handleShowPasswordSpan}
                  ></PasswordSpanComponent>
                </div>
              </Form>
            </>
          )}
        </>
      ) : (
        <>
          <LabelComponent type="email" inputType="signIn"></LabelComponent>
          <div>
            <LabelComponent
              type={signInpasswordType}
              inputType="signIn"
            ></LabelComponent>
            <PasswordSpanComponent
              showPassword={signInShowPassword}
              handleShowPasswordSpan={handleSignInShowPasswordSpan}
            ></PasswordSpanComponent>
          </div>
        </>
      )}
    </MiddleContainerBlock>
  );
}

export default MiddleContainer;
