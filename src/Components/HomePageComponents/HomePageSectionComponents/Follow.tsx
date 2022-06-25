import Cat3 from "../../../assets/Images/cat3.jpg";
import Cat4 from "../../../assets/Images/cat4.jpg";
import Cat5 from "../../../assets/Images/cat5.jpg";
import FollowBlockItemComponent from "../../Elements/FollowBlockItemComponent";
import { TrendingBlockItemT3Component } from "./TrendingBlockItemComponent";
import { TrendingBlock } from "./RightSectionComponentsCss";
function Follow() {
  return (
    <TrendingBlock>
      <TrendingBlockItemT3Component TrendingBlockHeading="Who to Follow"></TrendingBlockItemT3Component>
      <FollowBlockItemComponent
        FollowBlockHeading="Persian"
        ImgSrc={Cat3}
      ></FollowBlockItemComponent>
      <FollowBlockItemComponent
        FollowBlockHeading="Angora"
        ImgSrc={Cat4}
      ></FollowBlockItemComponent>
      <FollowBlockItemComponent
        FollowBlockHeading="Feline"
        ImgSrc={Cat5}
      ></FollowBlockItemComponent>
    </TrendingBlock>
  );
}

export default Follow;
