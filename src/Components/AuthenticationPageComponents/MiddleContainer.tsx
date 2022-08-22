import React, { useContext } from "react";
import styled from "styled-components";
import InputBlock from "../Elements/Inputs/InputBlock";
import {
  MiddleContainerBlock,
  Form,
  PasswordSpan,
  SignInErrText,
} from "./MiddleContainerCss";
import { FormPropsContext } from "../../Contexts/SignUpFormContext";
import PasswordSpanComponent from "./PasswordSpanComponent";
import { SignInFormPropsContext } from "../../Contexts/SignInFormContext";
import { FormContainersProps } from "../../Interfaces and Types/Interfaces";
import { Label, SpanText } from "../Elements/Inputs/InputBlockCss";
import { ErrorText, Input } from "../Elements/Inputs/InputBlockCss";
const FormHeading = styled.h2`
  font-size: clamp(1.2rem, 1.1571rem + 0.2143vw, 1.5rem);
`;

function MiddleContainer({ signIn }: FormContainersProps) {
  let {
    validNameEmail,
    showPassword,
    handleShowPasswordSpan,
    SignUpErr,
    Styles,
    FocusAchieved,
    BlurAchieved,
    InputChange,
    InputStates,
    NameErrRef,
    EmailErrRef,
    PasswordErrRef,
  } = useContext(FormPropsContext);
  let {
    signInShowPassword,
    handleSignInShowPasswordSpan,
    SignInErr,
    SignInStyles,
    signInInputStates,
    SignInFocusAchieved,
    SignInBlurAchieved,
    SignInInputChange,
  } = useContext(SignInFormPropsContext);
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
                <InputBlock>
                  <>
                    <Label WhichState={Styles[0].WhichState} htmlFor="name">
                      <Input
                        value={InputStates.name}
                        id="name"
                        onChange={InputChange}
                        name="name"
                        onFocus={FocusAchieved}
                        onBlur={BlurAchieved}
                        type="text"
                      />
                      <SpanText WhichState={Styles[0].WhichState}>
                        Name
                      </SpanText>
                    </Label>

                    <ErrorText ref={NameErrRef}>What's your name</ErrorText>
                  </>
                </InputBlock>
                <InputBlock>
                  <>
                    <Label WhichState={Styles[1].WhichState} htmlFor="email">
                      <Input
                        value={InputStates.email}
                        id="email"
                        onChange={InputChange}
                        name="email"
                        onFocus={FocusAchieved}
                        onBlur={BlurAchieved}
                        type="email"
                      />
                      <SpanText WhichState={Styles[1].WhichState}>
                        Email
                      </SpanText>
                    </Label>

                    <ErrorText ref={EmailErrRef}>What's your email?</ErrorText>
                  </>
                </InputBlock>
              </Form>
            </>
          ) : (
            <>
              {" "}
              <FormHeading>Enter Password</FormHeading>
              <Form>
                <div>
                  <InputBlock>
                    <>
                      <Label
                        WhichState={Styles[2].WhichState}
                        htmlFor="password"
                      >
                        <Input
                          value={InputStates.password}
                          id="password"
                          onChange={InputChange}
                          name="password"
                          onFocus={FocusAchieved}
                          onBlur={BlurAchieved}
                          type={passwordType}
                        />
                        <SpanText WhichState={Styles[2].WhichState}>
                          Password
                        </SpanText>
                      </Label>

                      <ErrorText ref={PasswordErrRef}>
                        Please enter a password greater than 8 characters
                      </ErrorText>
                    </>
                  </InputBlock>
                  <PasswordSpanComponent
                    showPassword={showPassword}
                    handleShowPasswordSpan={handleShowPasswordSpan}
                  ></PasswordSpanComponent>
                </div>
                <SignInErrText ErrTextDispState={SignUpErr}>
                  This email is already in use!
                </SignInErrText>
              </Form>
            </>
          )}
        </>
      ) : (
        <>
          <FormHeading>Sign In into your account</FormHeading>

          <Label WhichState={SignInStyles[0].WhichState} htmlFor="email">
            <Input
              value={signInInputStates.email}
              id="email"
              onChange={SignInInputChange}
              name="email"
              onFocus={SignInFocusAchieved}
              onBlur={SignInBlurAchieved}
              type="email"
            />
            <SpanText WhichState={SignInStyles[0].WhichState}>Email</SpanText>
          </Label>

          <Form>
            <div>
              <Label WhichState={SignInStyles[1].WhichState} htmlFor="password">
                <Input
                  value={signInInputStates.password}
                  id="password"
                  onChange={SignInInputChange}
                  name="password"
                  onFocus={SignInFocusAchieved}
                  onBlur={SignInBlurAchieved}
                  type={signInpasswordType}
                />
                <SpanText WhichState={SignInStyles[1].WhichState}>
                  Password
                </SpanText>
              </Label>

              <PasswordSpanComponent
                showPassword={signInShowPassword}
                handleShowPasswordSpan={handleSignInShowPasswordSpan}
              ></PasswordSpanComponent>
              <SignInErrText ErrTextDispState={SignInErr}>
                Invalid email/password!
              </SignInErrText>
            </div>
          </Form>
        </>
      )}
    </MiddleContainerBlock>
  );
}

export default MiddleContainer;
