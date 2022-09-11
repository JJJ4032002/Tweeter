import React from "react";
import * as S from "./PasswordDisplayToggleCss";
import { PasswordSpanProps } from "../../../Interfaces and Types/Interfaces";
function PasswordDisplayToggle({
  showPassword,
  handleShowPasswordSpan,
}: PasswordSpanProps) {
  return (
    <>
      {!showPassword ? (
        <S.PasswordSpan onClick={handleShowPasswordSpan}>
          Show Password
        </S.PasswordSpan>
      ) : (
        <S.PasswordSpan onClick={handleShowPasswordSpan}>
          Hide Password
        </S.PasswordSpan>
      )}
    </>
  );
}

export default PasswordDisplayToggle;
