import Button from "../../../../Elements/Button";
import styled from "styled-components/macro";
import { FollowBlockProps } from "../../../../../Interfaces and Types/Interfaces";
import Img from "../../../../Elements/Img";
import { TrendingBlock, FlexItem } from "../LayoutsCss";
function FollowBlock({ FollowBlockHeading, ImgSrc }: FollowBlockProps) {
  return (
    <TrendingBlock className="flexBoxType2">
      <FlexItem className="flexBoxItem">
        <AccountImageDiv>
          <Img className="AccountImage" src={ImgSrc} alt="" />
        </AccountImageDiv>
        <h4>{FollowBlockHeading}</h4>
      </FlexItem>
      <FlexItem>
        <Button className="FollowButton" secondary={true}>
          Follow
        </Button>
      </FlexItem>
    </TrendingBlock>
  );
}
const AccountImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

export default FollowBlock;
