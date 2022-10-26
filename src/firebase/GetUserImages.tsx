import React from "react";
import { storage } from "./InitializeFirebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { UserStatePartial } from "../Interfaces and Types/Interfaces";

async function GetUserImages(
  Id: string,
  setUserHelper: (user: UserStatePartial | null) => void
) {
  const listRef = ref(storage, `images/${Id}`);
  let res = await listAll(listRef);
  res.items.forEach((itemRef) => {
    console.log(itemRef);
    getDownloadURL(itemRef).then((url) => {
      if (itemRef.name === "Banner.jpg") {
        let user = { bannerImageUrl: url };
        setUserHelper(user);
      } else if (itemRef.name === "Profile.jpg") {
        let user = { profileImageUrl: url };
        setUserHelper(user);
      }
    });
  });
}

export default GetUserImages;
