import React from "react";
import { Overlay } from "./ModalBackdropCss";
function ModalBackdrop({
  children,
  opacity,
  display,
}: {
  children: React.ReactNode;
  opacity: number;
  display: string;
}) {
  return (
    <Overlay opacity={opacity} display={display}>
      {children}
    </Overlay>
  );
}

export default ModalBackdrop;
