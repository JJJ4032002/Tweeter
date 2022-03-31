import React from "react";
import styled from "styled-components";
import { Buttons } from "../../AuthenticationPageCss";
const SubmitButton = styled(Buttons)`
  width: 100%;
  border-radius: 5em;
  margin: 0;
  font-size: 1rem;
  background-color: black;
  color: white;
`;
const LowerContainerBlock = styled.div`
  width: 90%;
  margin: 0.5em auto 0.8em auto;
`;
function LowerContainer() {
  return (
    <LowerContainerBlock>
      <SubmitButton>Submit</SubmitButton>
    </LowerContainerBlock>
  );
}

export default LowerContainer;
