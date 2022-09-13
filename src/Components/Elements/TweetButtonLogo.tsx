import React from "react";
import { ItemDiv } from "../Home/HomeCss";
import Img from "./Img";
import tweet from "../../assets/Icons/tweet.svg";
import { TweetButtonProps } from "../../Interfaces and Types/Interfaces";
function TweetButtonLogo({ primary, height }: TweetButtonProps) {
  return (
    <ItemDiv primary={primary} height={height} className="TweetLogo">
      <Img className="leftSection TweetLogo" src={tweet} alt="" />
    </ItemDiv>
  );
}

export default TweetButtonLogo;
