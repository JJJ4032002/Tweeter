import Cat3 from "../../../../../assets/Images/cat3.jpg";
import Cat4 from "../../../../../assets/Images/cat4.jpg";
import Cat5 from "../../../../../assets/Images/cat5.jpg";
import { TrendingWrapper } from "../LayoutsCss";
import { TrendingBlockT3 } from "../Trending/TrendingBlockTypes";
import FollowBlock from "./FollowBlock";
function Follow() {
  return (
    <TrendingWrapper>
      <TrendingBlockT3 TrendingBlockHeading="Who to Follow"></TrendingBlockT3>
      <FollowBlock FollowBlockHeading="Persian" ImgSrc={Cat3}></FollowBlock>
      <FollowBlock FollowBlockHeading="Angora" ImgSrc={Cat4}></FollowBlock>
      <FollowBlock FollowBlockHeading="Feline" ImgSrc={Cat5}></FollowBlock>
    </TrendingWrapper>
  );
}

export default Follow;
