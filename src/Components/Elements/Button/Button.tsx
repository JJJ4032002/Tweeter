import React, { ButtonHTMLAttributes } from "react";
import * as S from "./ButtonCss";
import { Props } from "../../../Interfaces and Types/Interfaces";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Props,
    React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}
function Button({ children, className, id, ...props }: ButtonProps) {
  return (
    <S.Button className={className} id={id} {...props}>
      {children}
    </S.Button>
  );
}

export default Button;
