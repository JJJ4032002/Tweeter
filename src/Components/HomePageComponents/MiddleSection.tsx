import React from "react";
import styled from "styled-components";
const MiddleContainer = styled.div`
  padding: 0em 1em;
  border-right: 1px solid #cfd9de;
  border-left: 1px solid #cfd9de;
  background: pink;
  grid-area: MiddleSection;
`;
function MiddleSection() {
  return <MiddleContainer>Middle Container</MiddleContainer>;
}

export default MiddleSection;
