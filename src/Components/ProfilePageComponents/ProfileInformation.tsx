import React from "react";
import styled from "styled-components";
import FollowTally from "../Elements/FollowTally";
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1em;
  gap: 1em;
`;
const UserName = styled.p`
  font-weight: 900;
  font-size: 1.2rem;
`;

const UserBio = styled.p`
  font-size: 0.8rem;
`;
function ProfileInformation() {
  return (
    <ProfileContainer>
      <UserName>Rohan Patel</UserName>
      <UserBio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        nemo debitis nulla omnis voluptas magni ipsa pariatur dignissimos,
        temporibus inventore!
      </UserBio>
      <FollowTally></FollowTally>
    </ProfileContainer>
  );
}

export default ProfileInformation;
