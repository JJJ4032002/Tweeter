import React from "react";
import { ItemDiv } from "../../HomePageCss";
function OptionsButton({ children }: { children: React.ReactNode }) {
  return <ItemDiv className="TweetButtonDiv">{children}</ItemDiv>;
}

export default OptionsButton;
