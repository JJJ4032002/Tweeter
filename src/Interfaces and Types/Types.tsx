type ChangeStyles = {
  borderColor: string;
  position: number;
  fontSize: number;
  focus: string;
  name: string;
  borderWidth: number;
}[];

type InputValues = {
  name: string;
  email: string;
  nameBool: boolean;
  emailBool: boolean;
};

export type { ChangeStyles, InputValues };
