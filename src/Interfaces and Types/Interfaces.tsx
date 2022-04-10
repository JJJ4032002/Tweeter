import React from "react";
import {
  CSSObject,
  InterpolationFunction,
  StyledComponent,
} from "styled-components";
import { ChangeStyles } from "./Types";

interface Props {
  primary?: boolean;
  position?: number;
  fontSize?: number;
  borderColor?: string;
  borderWidth?: number;
  nameDisp?: string;
  emailDisp?: string;
  textColor?: string;
  opacity?: number;
  top?: number;
  bottom?: number;
  WhichState?: string;
  FinBtnState?: boolean;
}

interface OverlayFormProps {
  Styles: ChangeStyles;
  FocusAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  BlurAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  NameErrRef: { current: HTMLElement | null };
  EmailErrRef: { current: HTMLElement | null };
  InputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputStates: {
    name: string;
    email: string;
  };
  ResetForm: () => void;
  FinBtnState: boolean;
  validNameEmail: boolean;
  handleSubmitBtnClick: () => void;
}
interface AuthenticationPageContextProps {
  FormStyles: { opacity: number; top: number; bottom: number };
  handleSignUpBtn: (event: React.MouseEvent<HTMLElement>) => void;
}
interface actionProps {
  type: string;
  WhichState: string;
}

export type {
  Props,
  OverlayFormProps,
  actionProps,
  AuthenticationPageContextProps,
};
