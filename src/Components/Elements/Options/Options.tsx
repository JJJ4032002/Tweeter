import React from "react";
import { ItemDiv } from "../../HomePageCss";
function Options({ children }: { children: React.ReactNode }) {
  return <ItemDiv className="OptionsText">{children}</ItemDiv>;
}

export default Options;
