import React, { useContext } from "react";
import styled from "styled-components/macro";
import { sideBarPropsContext } from "../../Contexts/SideBarContext";
import { UserContext } from "../../Contexts/UserContext";
import useWindowSize from "../../hooks/useWindowSize";
import ProfilePicture from "../Elements/ProfilePicture";
import { FlexItems, HomeHeading, ItemDiv } from "../Home/HomeCss";
const Wrapper = styled.div`
  border-right: 1px solid #cfd9de;
  border-left: 1px solid #cfd9de;

  grid-area: MainContent;
`;
const TweetsWrapper = styled.div`
  background-color: pink;
`;

function Tweets() {
  let { user } = useContext(UserContext);
  let size = useWindowSize();
  let { handleSideBarState } = useContext(sideBarPropsContext);
  return (
    <Wrapper>
      <ItemDiv className="HeadingDiv">
        {size <= 425 ? (
          user && user.profileImageUrl ? (
            <ProfilePicture
              Image={user.profileImageUrl}
              InteractOnClick={handleSideBarState}
            ></ProfilePicture>
          ) : (
            <ProfilePicture
              InteractOnClick={handleSideBarState}
            ></ProfilePicture>
          )
        ) : (
          ""
        )}
        <HomeHeading>Home</HomeHeading>
      </ItemDiv>
      <TweetsWrapper></TweetsWrapper>
    </Wrapper>
  );
}

export default Tweets;
