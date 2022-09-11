import { Image } from "../Landing/LandingCss";
import { FollowBlockProps } from "../../Interfaces and Types/Interfaces";
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
const FollowButton = styled.button`
  padding: 0.5em 1.2em;
  border-radius: 2.5em;
  border: transparent;
  background-color: ${(props) => props.theme.colors.secondaryBtnBackgound};
  color: ${(props) => props.theme.colors.secondaryBtnText};
  font-weight: 800;
  cursor: pointer;
`;
const AccountImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

export default FollowBlockItemComponent;
