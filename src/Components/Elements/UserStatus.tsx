import React from "react";
import { ItemDiv, ProfileDiv } from "../Home/HomeCss";
import profile from "../../assets/Icons/profile.svg";
import styled from "styled-components/macro";
import { UserStatePartial } from "../../Interfaces and Types/Interfaces";
import Img from "./Img";
const UserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
function UserStatus({
  user,
  className,
}: {
  user: UserStatePartial | null;
  className: string;
}) {
  console.log(user?.name, "HereUserName in UserStatus");
  return (
    <>
      <ItemDiv className={className}>
        {user && user.profileImageUrl ? (
          <ProfileDiv className="LeftSectionMobileS ImageAvailable">
            <Img src={user.profileImageUrl} alt="profilePic" />
          </ProfileDiv>
        ) : (
          <ProfileDiv className="LeftSectionMobileS">
            <Img src={profile} alt="profilePic" />
          </ProfileDiv>
        )}

        {user !== null ? (
          <UserName>{user.name}</UserName>
        ) : (
          <UserName>Loading..</UserName>
        )}
      </ItemDiv>
    </>
  );
}

export default UserStatus;
