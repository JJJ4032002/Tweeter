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
    let userObj = docSnapShot.data();
    setUserHelper(userObj as UserDocument);
    SuccSign();
  } else {
    //No such document
  }
}

export default GetUserData;
