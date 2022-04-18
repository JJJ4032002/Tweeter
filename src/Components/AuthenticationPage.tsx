import React, { useEffect, useRef, useState } from "react";
import MainComponent from "./AuthenticationPageComponents/MainComponent";
import SignUpForm from "./AuthenticationPageComponents/SignUpForm";
import { ChangeStyles, InputValues } from "../Interfaces and Types/Types";
import { GridContainer } from "./AuthenticationPageCss";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
import validateEmail from "../helpers/ValidateEmail";
import { AuthenticationPageContextProvider } from "../Contexts/AuthenticationPageContext";
import { SignUpFormPropsProvider } from "../Contexts/SignUpFormContext";
import SignInForm from "./AuthenticationPageComponents/SignInForm";
function AuthenticationPage() {
  return (
    <GridContainer>
      <SignUpFormPropsProvider>
        <AuthenticationPageContextProvider>
          <MainComponent></MainComponent>
          <SignUpForm></SignUpForm>
          <SignInForm></SignInForm>
        </AuthenticationPageContextProvider>
      </SignUpFormPropsProvider>
    </GridContainer>
  );
}

export { AuthenticationPage };
