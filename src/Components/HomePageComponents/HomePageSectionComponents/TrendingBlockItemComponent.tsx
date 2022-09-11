import { TrendingBlockProps } from "../../../Interfaces and Types/Interfaces";
import Img from "../../Elements/Img";
import {
  TrendingBlockItem,
  FlexItem,
  TrendingText,
} from "./RightSectionComponentsCss";
function TrendingBlockItemT1Component({
  TrendingBlockHeading,
  HashTag,
  NoOfTweets,
}: TrendingBlockProps) {
  return (
    <TrendingBlockItem>
      <TrendingText className="small">{TrendingBlockHeading}</TrendingText>
      <h4>{HashTag}</h4>
      <TrendingText className="small">{NoOfTweets}</TrendingText>
    </TrendingBlockItem>
  );
}

function TrendingBlockItemT2Component({
  TrendingBlockHeading,
  ImgSrc,
}: TrendingBlockProps) {
  return (
    <TrendingBlockItem className="flexBox lastItem">
      <FlexItem className="LeftSide">
        {" "}
        <h4>{TrendingBlockHeading}</h4>
      </FlexItem>
      <FlexItem className="flexImageDiv">
        <Img className="flexImage" src={ImgSrc} alt="" />
      </FlexItem>
    </TrendingBlockItem>
  );
}

function TrendingBlockItemT3Component({
  TrendingBlockHeading,
}: TrendingBlockProps) {
  return (
    <TrendingBlockItem className="BlockHeading">
      <h4>{TrendingBlockHeading}</h4>
    </TrendingBlockItem>
  );
}

export {
  TrendingBlockItemT1Component,
  TrendingBlockItemT2Component,
  TrendingBlockItemT3Component,
};
