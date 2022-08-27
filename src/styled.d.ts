import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
      primaryBtnText: string;
      primaryBtnBackground: string;
      primarySignUpBtnText: string;
      primarySignUpBtnBackground: string;
      primarySignUpBtnBackgroundHover: string;
      primarySignUpBtnBorderColour: string;
      secondarySignUpBtnText: string;
      secondarySignUpBtnBackground: string;
      secondarySignUpBtnBackgroundHover: string;
      secondaryBtnText: string;
      secondaryBtnBackgound: string;
    };
  }
}
