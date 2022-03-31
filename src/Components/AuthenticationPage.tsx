import React, { useEffect, useRef, useState } from "react";
import MainComponent from "./AuthenticationPageComponents/MainComponent";
import OverlayForm from "./AuthenticationPageComponents/OverlayForm";
import { ChangeStyles, InputValues } from "../Interfaces and Types/Types";
import { GridContainer } from "./AuthenticationPageCss";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
import validateEmail from "../helpers/ValidateEmail";
import { AuthenticationPageContextProvider } from "../Contexts/AuthenticationPageContext";
import { OverlayFormPropsProvider } from "../Contexts/OverlayFormContext";
function AuthenticationPage() {
  return (
    <GridContainer>
      <OverlayFormPropsProvider>
        <AuthenticationPageContextProvider>
          <MainComponent></MainComponent>
          <OverlayForm></OverlayForm>
        </AuthenticationPageContextProvider>
      </OverlayFormPropsProvider>
    </GridContainer>
  );
}

export { AuthenticationPage };
