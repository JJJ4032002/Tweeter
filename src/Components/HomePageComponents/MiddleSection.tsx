import React from "react";
import styled from "styled-components";
const MiddleContainer = styled.div`
  border-right: 1px solid black;
  border-left: 1px solid black;
  background: pink;
  grid-area: MiddleSection;
`;
function MiddleSection() {
  return <MiddleContainer>Middle Container</MiddleContainer>;
}

export default MiddleSection;
