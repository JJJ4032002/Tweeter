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
      primarySignInBtnText: string;
      primarySignInBtnBackground: string;
      primarySignInBtnBackgroundHover: string;
      primarySignInBtnBorderColour: string;
      secondarySignInBtnText: string;
      secondarySignInBtnBackground: string;
      secondarySignInBtnBackgroundHover: string;
      secondaryBtnText: string;
      secondaryBtnBackgound: string;
      secondaryBtnBackgroundHover: string;
    };
  }
}
