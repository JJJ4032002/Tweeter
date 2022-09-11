import React, { ImgHTMLAttributes } from "react";
import * as S from "./ImgCss";
interface ImgProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    React.ComponentPropsWithoutRef<"img"> {
  className?: string;
  id?: string;
}

function Img({ className, id, ...props }: ImgProps) {
  return <S.Img className={className} id={id} {...props}></S.Img>;
}

export default Img;
