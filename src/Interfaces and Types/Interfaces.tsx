import React from "react";
import { ChangeStyles } from "./Types";

interface Props {
  primary?: boolean;
  secondary?: boolean;
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
  sideBarDisp?: boolean;
  height?: number;
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
  handleSignUpBtn: (
    Form: "SignUp" | "SignIn",
    action: "open" | "close"
  ) => void;
  signInFormStyles: { opacity: number; display: string };
}
interface sideBarContextProps {
  sideBarState: boolean;
  handleSideBarState: () => void;
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
  children: React.ReactNode;
}
interface PasswordSpanProps {
  showPassword: boolean;
  handleShowPasswordSpan: () => void;
}

interface FormContainersProps {
  signIn: boolean;
}
interface TrendingBlockProps {
  TrendingBlockHeading?: string;
  HashTag?: string;
  NoOfTweets?: string;
  ImgSrc?: string;
}
interface FollowBlockProps {
  FollowBlockHeading: string;
  ImgSrc: string;
}
interface TweetButtonProps {
  primary: boolean;
  height: number | undefined;
}

interface UserPropsContext {
  user: UserState | null;
  RouteProfile: boolean;
  setUserHelper: (user: UserState) => void;
  signedIn: boolean;
  SnackBarState: {
    openSnackBar: { VerificationEmailSent: boolean; SignIn: boolean };
    handleOpenSnackBar: (
      name: "VerificationEmailSent" | "SignIn",
      state: boolean
    ) => void;
  };
}
interface UserDocument {
  name: string;
}
interface UserState extends UserDocument {
  Id: string;
  profileImageUrl: string | null;
  bannerImageUrl: string | null;
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
  sideBarContextProps,
  TrendingBlockProps,
  FollowBlockProps,
  TweetButtonProps,
  UserPropsContext,
  UserDocument,
  UserState,
};
