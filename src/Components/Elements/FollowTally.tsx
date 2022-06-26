import React from "react";
import styled from "styled-components/macro";
const FollowTallyContainer = styled.div`
  display: flex;
  gap: 0.8em;
  align-items: center;
  color: gray;
`;
const Bold = styled.b`
  color: black;
`;
function FollowTally() {
  return (
    <FollowTallyContainer>
      <p>
        <Bold>109</Bold> following
      </p>
      <p>
        <Bold>4</Bold> followers
      </p>
    </FollowTallyContainer>
  );
}

export default FollowTally;
