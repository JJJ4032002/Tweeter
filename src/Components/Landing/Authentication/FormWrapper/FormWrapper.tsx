import React from "react";
import * as S from "./FormWrapperCss";
function FormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <S.FormWrapper>{children}</S.FormWrapper>
    </>
  );
}

export default FormWrapper;
