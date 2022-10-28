import React, { useContext } from "react";
import styled from "styled-components/macro";
import { UserContext } from "../../../Contexts/UserContext";
import FollowTally from "../../Elements/FollowTally";
import Img from "../../Elements/Img";
import link from "../../../assets/Icons/link.svg";
import location from "../../../assets/Icons/location.svg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0em 1em;
  gap: 0.8em;
`;
const UserName = styled.p`
  font-weight: 900;
  font-size: 1.2rem;
`;

const UserBio = styled.p`
  font-size: 1rem;
`;

const SecondaryInformation = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  font-size: 0.9rem;
`;

const Item = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;
function ProfileInformation() {
  let { user } = useContext(UserContext);
  return (
    <Wrapper>
      {user && user.name ? (
        <UserName>{user.name}</UserName>
      ) : (
        <UserName>Loading...</UserName>
      )}
      {user && user.bio ? <UserBio>{user.bio}</UserBio> : ""}
      <SecondaryInformation>
        {user && user.location ? (
          <Item>
            <Img className="logo" src={location}></Img>
            <p>{user.location}</p>
          </Item>
        ) : (
          ""
        )}
        {user && user.website ? (
          <Item>
            <Img className="logo" src={link}></Img>
            <a href={user.website}>{user.website}</a>
          </Item>
        ) : (
          ""
        )}
      </SecondaryInformation>
      <FollowTally></FollowTally>
    </Wrapper>
  );
}

export default ProfileInformation;
