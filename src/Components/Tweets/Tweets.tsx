import React from "react";
import styled from "styled-components/macro";
const TweetsWrapper = styled.div`
  padding: 0em 1em;
  border-right: 1px solid #cfd9de;
  border-left: 1px solid #cfd9de;
  background: pink;
  grid-area: MainContent;
`;
function Tweets() {
  return <TweetsWrapper>Middle Container</TweetsWrapper>;
}

export default Tweets;
