import { Image } from "../../AuthenticationPageCss";
import { FollowBlockProps } from "../../../Interfaces and Types/Interfaces";
import { FollowButton, AccountImageDiv } from "./FollowItemBlockComponentCss";
import { TrendingBlockItem, FlexItem } from "./RightSectionComponentsCss";

function FollowBlockItemComponent({
  FollowBlockHeading,
  ImgSrc,
}: FollowBlockProps) {
  return (
    <TrendingBlockItem className="flexBoxType2">
      <FlexItem className="flexBoxItem">
        <AccountImageDiv>
          <Image className="AccountImage" src={ImgSrc} alt="" />
        </AccountImageDiv>
        <h4>{FollowBlockHeading}</h4>
      </FlexItem>
      <FlexItem>
        <FollowButton>Follow</FollowButton>
      </FlexItem>
    </TrendingBlockItem>
  );
}

export default FollowBlockItemComponent;
