import React from "react";
import { Link } from "react-router-dom";
import { ItemDiv } from "../../Home/HomeCss";
import styled from "styled-components/macro";
const OptionsLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

function Options({
  children,
  LinkTo,
}: {
  children: React.ReactNode;
  LinkTo: string;
}) {
  return (
    <>
      {LinkTo === "disable" ? (
        <ItemDiv className="OptionsText">{children}</ItemDiv>
      ) : (
        <OptionsLink to={`${LinkTo}`}>
          <ItemDiv className="OptionsText">{children}</ItemDiv>
        </OptionsLink>
      )}
    </>
  );
}

export default Options;
