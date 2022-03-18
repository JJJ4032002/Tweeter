type ChangeStyles = {
  borderColor: string;
  position: number;
  fontSize: number;
  txtClr: string;
  name: string;
  borderWidth: number;
}[];

type InputValues = {
  name: string;
  email: string;
  nameBool: boolean;
  emailBool: boolean;
};

type LabelBlockComponentProps = {
  type: string;
  children: string;
};

type InputStateProps = {
  name: string;
  email: string;
};

type OverlayContextProviderChildren = {
  children: React.ReactNode;
};

export type {
  ChangeStyles,
  InputValues,
  LabelBlockComponentProps,
  OverlayContextProviderChildren,
  InputStateProps,
};
