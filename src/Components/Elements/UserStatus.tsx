import React from "react";
import { ItemDiv } from "../Home/HomeCss";
import { ProfileDiv } from "../Home/HomeCss";
import profile from "../../assets/Icons/profile.svg";
import { User } from "firebase/auth";
import styled from "styled-components/macro";
const UserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
function UserStatus({
  user,
  className,
}: {
  user: User | null;
  className: string;
}) {
  console.log(user?.displayName, "HereUserName in UserStatus");
  return (
    <>
      <ItemDiv className={className}>
        <ProfileDiv className="LeftSectionMobileS">
          <img src={profile} alt="profilePic" />
        </ProfileDiv>
        {user !== null ? (
          <UserName>{user.displayName}</UserName>
        ) : (
          <UserName>Loading..</UserName>
        )}
      </ItemDiv>
    </>
  );
}

export default UserStatus;
