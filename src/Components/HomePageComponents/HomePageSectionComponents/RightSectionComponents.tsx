import { ItemDiv } from "../../HomePageCss";
import { Image } from "../../AuthenticationPageCss";
import logo from "../../../assets/Icons/logo.svg";
import { HomeHeading, ProfileDiv } from "../../HomePageCss";
import { RightSectionMobileData } from "../../../Data";
import search from "../../../assets/Icons/search.svg";
import styled from "styled-components";
import Cat1 from "../../../assets/Images/cat1.jpg";
import Cat2 from "../../../assets/Images/cat2.jpg";
import Cat3 from "../../../assets/Images/cat3.jpg";
import Cat4 from "../../../assets/Images/cat4.jpg";
import Cat5 from "../../../assets/Images/cat5.jpg";

function RightSectionMobile() {
  return (
    <>
      {RightSectionMobileData.map((item) => {
        return (
          <ItemDiv key={item.key}>
            <Image className="leftSection" src={item.imgSrc} alt="" />
          </ItemDiv>
        );
      })}
    </>
  );
}
function RightSectionMobileL() {
  return (
    <>
      <ItemDiv>
        <Image
          className="leftSection logoInForm gridItemLogo"
          src={logo}
          alt=""
        />
      </ItemDiv>
      <ItemDiv className="HeadingDiv">
        <HomeHeading className="RightSectionMobileL">Home</HomeHeading>
      </ItemDiv>
    </>
  );
}
const SearchBarBlock = styled.div`
  padding: 0.7em 0.7em;
  border-radius: 2.5em 2.5em 2.5em 2.5em;
  display: flex;
  align-items: center;
  background: #eff3f4;
  color: #596a7f;
  gap: 1em;
`;
const TrendingBlock = styled.div`
  display: flex;
  flex-direction: column;

  background: #eff3f4;

  border-radius: 0.8em;
`;
const TrendingBlockItem = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 0.8em 1em;
  &.flexBox {
    display: flex;
    align-items: center;
    gap: 0.7em;
  }
  &.flexBoxType2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &.BlockHeading:hover {
    background: #eff3f4;
    border-radius: 2.5em 2.5em 0 0;
    cursor: initial;
  }
  &:hover {
    background: #f5f5f5;
  }
  &.lastItem:hover {
    border-radius: 0 0 2.5em 2.5em;
  }
`;
const FlexItem = styled.div`
  width: max-content;
  &.LeftSide {
    width: 95%;
  }
  &.flexBoxItem {
    display: flex;
    align-items: center;
    gap: 1.2em;
  }
  &.flexImageDiv {
    width: 50%;
  }
`;
const TrendingText = styled.p`
  color: #596a7f;
  &.small {
    font-size: 0.8rem;
    margin: 0.2em 0;
  }
`;
const AccountImageDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
const FollowButton = styled.button`
  padding: 0.5em 1.2em;
  border-radius: 2.5em;
  border: transparent;
  background-color: black;
  color: white;
  font-weight: 800;
`;
function RightSectionLaptop() {
  return (
    <>
      <SearchBarBlock>
        <img src={search} alt="" />
        <TrendingText>Search Tweeter</TrendingText>
      </SearchBarBlock>
      <TrendingBlock>
        <TrendingBlockItem className="BlockHeading">
          <h4>What's Happening?</h4>
        </TrendingBlockItem>
        <TrendingBlockItem className="flexBox">
          <FlexItem className="LeftSide">
            {" "}
            <h4>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet .</h4>
          </FlexItem>
          <FlexItem className="flexImageDiv">
            <Image className="flexImage" src={Cat1} alt="" />
          </FlexItem>
        </TrendingBlockItem>
        <TrendingBlockItem>
          <TrendingText className="small">Trending in Lorem</TrendingText>
          <h4>#Hello World</h4>
          <TrendingText className="small">100k Tweets</TrendingText>
        </TrendingBlockItem>
        <TrendingBlockItem>
          <TrendingText className="small">News . Trending</TrendingText>
          <h4>#Cats</h4>
          <TrendingText className="small">160k Tweets</TrendingText>
        </TrendingBlockItem>
        <TrendingBlockItem className="flexBox lastItem">
          <FlexItem className="LeftSide">
            {" "}
            <h4>Lorem ipsum dolor sit amet elit. Ad .</h4>
          </FlexItem>
          <FlexItem className="flexImageDiv">
            <Image className="flexImage" src={Cat2} alt="" />
          </FlexItem>
        </TrendingBlockItem>
      </TrendingBlock>
      <TrendingBlock>
        <TrendingBlockItem className="BlockHeading">
          <h4>Who to follow</h4>
        </TrendingBlockItem>
        <TrendingBlockItem className="flexBoxType2">
          <FlexItem className="flexBoxItem">
            <AccountImageDiv>
              <Image className="flexImage" src={Cat3} alt="" />
            </AccountImageDiv>

            <h4>Persian</h4>
          </FlexItem>
          <FlexItem>
            <FollowButton>Follow</FollowButton>
          </FlexItem>
        </TrendingBlockItem>
        <TrendingBlockItem className="flexBoxType2">
          <FlexItem className="flexBoxItem">
            <AccountImageDiv>
              <Image className="flexImage" src={Cat4} alt="" />
            </AccountImageDiv>

            <h4>Angora</h4>
          </FlexItem>
          <FlexItem>
            <FollowButton>Follow</FollowButton>
          </FlexItem>
        </TrendingBlockItem>
        <TrendingBlockItem className="flexBoxType2 lastItem">
          <FlexItem className="flexBoxItem">
            <AccountImageDiv>
              <Image className="flexImage" src={Cat5} alt="" />
            </AccountImageDiv>

            <h4>Feline</h4>
          </FlexItem>
          <FlexItem>
            <FollowButton>Follow</FollowButton>
          </FlexItem>
        </TrendingBlockItem>
      </TrendingBlock>
    </>
  );
}

export { RightSectionMobile, RightSectionMobileL, RightSectionLaptop };
