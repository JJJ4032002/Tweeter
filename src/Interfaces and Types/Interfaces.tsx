import { ChangeStyles } from "./Types";

interface Props {
  primary?: boolean;
  position?: number;
  fontSize?: number;
  borderColor?: string;
  borderWidth?: number;
}

interface OverlayFormProps {
  ChangeStyles: ChangeStyles;
  FocusAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  BlurAchieved: (event: React.FocusEvent<HTMLInputElement>) => void;
  NameErrRef: { current: HTMLElement | null };
  EmailErrRef: { current: HTMLElement | null };
}

export type { Props, OverlayFormProps };
