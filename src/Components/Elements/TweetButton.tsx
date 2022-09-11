import React from "react";
import { Buttons } from "../Landing/LandingCss";
function TweetButton() {
  return (
    <Buttons className="TweetButton" primary={true}>
      Tweet
    </Buttons>
  );
}

export default TweetButton;
