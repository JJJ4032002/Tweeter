import React from "react";
import styled from "styled-components/macro";

const CloseWrappper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  margin: 1.5em auto;
  padding: 2.5em 2.5em;
  text-align: center;
  width: max-content;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
function Close() {
  return (
    <CloseWrappper>
      <h1>Verification Email Sent</h1>
      <p>Please find the mail in spam folder and verify your email address</p>
      <p>You can close this page now.</p>
    </CloseWrappper>
  );
}

export default Close;
