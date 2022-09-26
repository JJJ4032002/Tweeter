import React from "react";
import { UserDocument } from "../Interfaces and Types/Interfaces";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./InitializeFirebase";
async function GetUserData(Id: string) {
  let docRef = doc(db, "Users", Id);
  let docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    let userObj = docSnapShot.data();
    return userObj as UserDocument;
  } else {
    //No such document
    return null;
  }
}

export default GetUserData;
