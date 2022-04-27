import React from "react";
import { PasswordSpan } from "./MiddleContainerCss";
import { PasswordSpanProps } from "../../Interfaces and Types/Interfaces";
function PasswordSpanComponent({
  showPassword,
  handleShowPasswordSpan,
}: PasswordSpanProps) {
  return (
    <>
      {!showPassword ? (
        <PasswordSpan onClick={handleShowPasswordSpan}>
          Show Password
        </PasswordSpan>
      ) : (
        <PasswordSpan onClick={handleShowPasswordSpan}>
          Hide Password
        </PasswordSpan>
      )}
    </>
  );
}

export default PasswordSpanComponent;
