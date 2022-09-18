import React from "react";
import { UserDocument } from "../Interfaces and Types/Interfaces";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./InitializeFirebase";
async function GetUserData(
  Id: string,
  setUserHelper: (user: UserDocument) => void,
  SuccSign: () => void
) {
  let docRef = doc(db, "Users", Id);
  let docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    console.log(docSnapShot.data());
  } else {
    //No such document
  }
}

export default GetUserData;
