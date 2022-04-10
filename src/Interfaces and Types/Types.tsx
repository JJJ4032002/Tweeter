type ChangeStyles = {
  WhichState: string;
  type: string;
}[];

type InputValues = {
  name: string;
  email: string;
  password: string;
  nameBool: boolean;
  emailBool: boolean;
  passwordBool: boolean;
};

type LabelBlockComponentProps = {
  type: string;
  children: string;
};

type InputStateProps = {
  name: string;
  email: string;
  password: string;
};

type OverlayContextProviderChildren = {
  children: React.ReactNode;
};
type AuthenticationContextProviderChildren = {
  children: React.ReactNode;
};
export type {
  ChangeStyles,
  InputValues,
  LabelBlockComponentProps,
  OverlayContextProviderChildren,
  InputStateProps,
  AuthenticationContextProviderChildren,
};
