import styled from "styled-components/macro";
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
const TrendingText = styled.p`
  color: #596a7f;
  &.small {
    font-size: 0.8rem;
    margin: 0.2em 0;
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

export { TrendingBlock, TrendingBlockItem, FlexItem, TrendingText };
