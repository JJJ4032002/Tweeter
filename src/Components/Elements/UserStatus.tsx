import React from "react";
import { ItemDiv } from "../Home/HomeCss";
import { ProfileDiv } from "../Home/HomeCss";
import profile from "../../assets/Icons/profile.svg";
import { User } from "firebase/auth";
import styled from "styled-components/macro";
import { UserDocument } from "../../Interfaces and Types/Interfaces";
const UserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
function UserStatus({
  user,
  className,
}: {
  user: UserDocument | null;
  className: string;
}) {
  console.log(user?.name, "HereUserName in UserStatus");
  return (
    <>
      <ItemDiv className={className}>
        <ProfileDiv className="LeftSectionMobileS">
          <img src={profile} alt="profilePic" />
        </ProfileDiv>
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
