import React from "react";
import { ItemDiv } from "../../Home/HomeCss";
function OptionsButton({ children }: { children: React.ReactNode }) {
  return <ItemDiv className="TweetButtonDiv">{children}</ItemDiv>;
}

export default OptionsButton;
