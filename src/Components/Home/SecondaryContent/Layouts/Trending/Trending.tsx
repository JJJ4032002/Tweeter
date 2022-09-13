import React from "react";
import Cat1 from "../../../../../assets/Images/cat1.jpg";
import Cat2 from "../../../../../assets/Images/cat2.jpg";
import { TrendingWrapper } from "../LayoutsCss";
import {
  TrendingBlockT3,
  TrendingBlockT2,
  TrendingBlockT1,
} from "./TrendingBlockTypes";

function Trending() {
  return (
    <TrendingWrapper>
      <TrendingBlockT3 TrendingBlockHeading="What's Happening?"></TrendingBlockT3>
      <TrendingBlockT2
        TrendingBlockHeading="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ."
        ImgSrc={Cat1}
      ></TrendingBlockT2>
      <TrendingBlockT1
        TrendingBlockHeading="What's Happening"
        HashTag="#HelloWorld"
        NoOfTweets="100k Tweets"
      ></TrendingBlockT1>
      <TrendingBlockT1
        TrendingBlockHeading="News . Trending"
        HashTag="#Cats"
        NoOfTweets="160k Tweets"
      ></TrendingBlockT1>
      <TrendingBlockT2
        TrendingBlockHeading="Lorem ipsum dolor sit amet elit. Ad ."
        ImgSrc={Cat2}
      ></TrendingBlockT2>
    </TrendingWrapper>
  );
}

export default Trending;
