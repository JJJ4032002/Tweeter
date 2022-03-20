import React from "react";
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
}
interface actionProps {
  type: string;
  name: string;
  borderColor: string;
  txtClr: string;
  fontSize: number;
  position: number;
  borderWidth: number;
}

export type { Props, OverlayFormProps, actionProps };
