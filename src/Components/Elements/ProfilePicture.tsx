import React from "react";
import { ProfileDiv } from "../Home/HomeCss";
import profile from "../../assets/Icons/profile.svg";
import Img from "./Img";
function ProfilePicture({
  InteractOnClick,
  Image,
}: {
  InteractOnClick: null | (() => void);
  Image?: string;
}) {
  return (
    <>
      {InteractOnClick !== null ? (
        Image ? (
          <ProfileDiv className="LeftSectionMobileS ImageAvailable">
            <Img onClick={InteractOnClick} src={Image} alt="ProfilePicture " />
          </ProfileDiv>
        ) : (
          <ProfileDiv className="LeftSectionMobileS">
            <Img
              onClick={InteractOnClick}
              src={profile}
              alt="ProfilePicture "
            />
          </ProfileDiv>
        )
      ) : (
        <ProfileDiv className="LeftSectionMobileS">
          <Img src={Image ? Image : profile} alt="ProfilePicture" />
        </ProfileDiv>
      )}
    </>
  );
}

export default ProfilePicture;
