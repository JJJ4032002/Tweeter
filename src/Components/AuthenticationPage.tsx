import React, { useEffect, useRef, useState } from "react";
import MainComponent from "./AuthenticationPageComponents/MainComponent";
import OverlayForm from "./AuthenticationPageComponents/OverlayForm";
import { ChangeStyles, InputValues } from "../Interfaces and Types/Types";
import { GridContainer } from "./AuthenticationPageCss";
import { OverlayFormProps } from "../Interfaces and Types/Interfaces";
import validateEmail from "../helpers/ValidateEmail";

function AuthenticationPage() {
  return (
    <GridContainer>
      <MainComponent></MainComponent>
      <OverlayForm></OverlayForm>
    </GridContainer>
  );
}

export { AuthenticationPage };
