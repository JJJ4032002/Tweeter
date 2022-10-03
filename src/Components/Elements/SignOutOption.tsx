import SignOutUser from "../../firebase/SignOutUser";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignOutOptionsDiv = styled.div`
  padding: 0.7em 0.9em;
  cursor: pointer;
`;

function SignOutOptions({ text }: { text: string }) {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  function handleSuccesfulSignOut() {
    handleLoadingState(false);
    navigate(`${process.env.PUBLIC_URL}/login`);
  }
  function handleLoadingState(state: boolean) {
    setLoading(state);
  }
  return (
    <SignOutOptionsDiv
      onClick={() => {
        SignOutUser(handleSuccesfulSignOut, handleLoadingState);
      }}
    >
      {!loading ? text : "Loading.."}
    </SignOutOptionsDiv>
  );
}

export default SignOutOptions;
