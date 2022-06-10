import React from "react";
import Cat1 from "../../../assets/Images/cat1.jpg";
import Cat2 from "../../../assets/Images/cat2.jpg";
import { TrendingBlock } from "./RightSectionComponentsCss";
import {
  TrendingBlockItemT1Component,
  TrendingBlockItemT2Component,
  TrendingBlockItemT3Component,
} from "./TrendingBlockItemComponent";

function Trending() {
  return (
    <TrendingBlock>
      <TrendingBlockItemT3Component TrendingBlockHeading="What's Happening?"></TrendingBlockItemT3Component>
      <TrendingBlockItemT2Component
        TrendingBlockHeading="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ."
        ImgSrc={Cat1}
      ></TrendingBlockItemT2Component>
      <TrendingBlockItemT1Component
        TrendingBlockHeading="What's Happening"
        HashTag="#HelloWorld"
        NoOfTweets="100k Tweets"
      ></TrendingBlockItemT1Component>
      <TrendingBlockItemT1Component
        TrendingBlockHeading="News . Trending"
        HashTag="#Cats"
        NoOfTweets="160k Tweets"
      ></TrendingBlockItemT1Component>
      <TrendingBlockItemT2Component
        TrendingBlockHeading="Lorem ipsum dolor sit amet elit. Ad ."
        ImgSrc={Cat2}
      ></TrendingBlockItemT2Component>
    </TrendingBlock>
  );
}

export default Trending;
