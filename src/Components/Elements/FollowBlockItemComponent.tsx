import Img from "./Img";
import { FollowBlockProps } from "../../Interfaces and Types/Interfaces";
import { Button } from "./Button/ButtonCss";
import {
  TrendingBlockItem,
  FlexItem,
} from "../HomePageComponents/HomePageSectionComponents/RightSectionComponentsCss";
import styled from "styled-components/macro";
function FollowBlockItemComponent({
  FollowBlockHeading,
  ImgSrc,
}: FollowBlockProps) {
  return (
    <TrendingBlockItem className="flexBoxType2">
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
    </TrendingBlockItem>
  );
}
const AccountImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

export default FollowBlockItemComponent;
