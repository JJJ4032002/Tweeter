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
  display?: string;
  opacity?: number;
  top?: number;
  bottom?: number;
  WhichState?: string;
  FinBtnState?: boolean;
  ErrTextDispState?: boolean;
}

interface OverlayFormProps {
  Styles: ChangeStyles;
  FocusAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  BlurAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  NameErrRef: { current: HTMLElement | null };
  EmailErrRef: { current: HTMLElement | null };
  PasswordErrRef: { current: HTMLElement | null };
  InputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputStates: {
    name?: string;
    email: string;
    password: string;
  };
  ResetForm: () => void;
  FinBtnState: boolean;
  validNameEmail: boolean;
  handleSubmitBtnClick: (event: React.MouseEvent<HTMLElement>) => void;
  showPassword: boolean;
  handleShowPasswordSpan: () => void;
  SignUpErr: boolean;
  loader: boolean;
}
interface OverlaySignInFormProps {
  SignInStyles: ChangeStyles;
  signInInputStates: { email: string; password: string };
  SignInFocusAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  SignInBlurAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  SignInInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  SignInResetForm: () => void;
  signInShowPassword: boolean;
  handleSignInShowPasswordSpan: () => void;
  handleSignInSubmitButton: (event: React.MouseEvent<HTMLElement>) => void;
  SignInFinBtnState: boolean;
  SignInErr: boolean;
  signInLoader: boolean;
}
interface AuthenticationPageContextProps {
  FormStyles: { opacity: number; display: string };
  handleSignUpBtn: (event: React.MouseEvent<HTMLElement>) => void;
  signInFormStyles: { opacity: number; display: string };
}
interface actionProps {
  type: string;
  WhichState: string;
}

interface InputValsInterface {
  name: string;
  email: string;
  password: string;
  nameBool: boolean;
  emailBool: boolean;
  passwordBool: boolean;
}
interface SignInInputValsInterface {
  email: string;
  password: string;
  emailBool: boolean;
  passwordBool: boolean;
}
interface inputTypeInterface {
  type: string;
  inputType: string;
}
interface PasswordSpanProps {
  showPassword: boolean;
  handleShowPasswordSpan: () => void;
}
interface FormContainersProps {
  signIn: boolean;
}
export type {
  Props,
  OverlayFormProps,
  actionProps,
  AuthenticationPageContextProps,
  InputValsInterface,
  OverlaySignInFormProps,
  SignInInputValsInterface,
  inputTypeInterface,
  PasswordSpanProps,
  FormContainersProps,
};
