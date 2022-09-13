import { TrendingBlockProps } from "../../../../../Interfaces and Types/Interfaces";
import Img from "../../../../Elements/Img";
import { TrendingBlock, TrendingText, FlexItem } from "../LayoutsCss";

function TrendingBlockT1({
  TrendingBlockHeading,
  HashTag,
  NoOfTweets,
}: TrendingBlockProps) {
  return (
    <TrendingBlock>
      <TrendingText className="small">{TrendingBlockHeading}</TrendingText>
      <h4>{HashTag}</h4>
      <TrendingText className="small">{NoOfTweets}</TrendingText>
    </TrendingBlock>
  );
}

function TrendingBlockT2({ TrendingBlockHeading, ImgSrc }: TrendingBlockProps) {
  return (
    <TrendingBlock className="flexBox lastItem">
      <FlexItem className="LeftSide">
        {" "}
        <h4>{TrendingBlockHeading}</h4>
      </FlexItem>
      <FlexItem className="flexImageDiv">
        <Img className="flexImage" src={ImgSrc} alt="" />
      </FlexItem>
    </TrendingBlock>
  );
}

function TrendingBlockT3({ TrendingBlockHeading }: TrendingBlockProps) {
  return (
    <TrendingBlock className="BlockHeading">
      <h4>{TrendingBlockHeading}</h4>
    </TrendingBlock>
  );
}

export { TrendingBlockT1, TrendingBlockT2, TrendingBlockT3 };
