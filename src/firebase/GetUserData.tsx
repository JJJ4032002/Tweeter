import React from "react";
import { UserDocument } from "../Interfaces and Types/Interfaces";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "./InitializeFirebase";
import { listAll, ref, StorageReference } from "firebase/storage";

async function GetUserData(Id: string) {
  let docRef = doc(db, "Users", Id);
  let docSnapShot = await getDoc(docRef);
  let Array: StorageReference[] = [];
  const listRef = ref(storage, `images/${Id}`);

  let res = await listAll(listRef);
  res.items.forEach((itemRef) => {
    Array.push(itemRef);
  });
  console.log(Array);
  if (docSnapShot.exists()) {
    let userObj = docSnapShot.data();
    return userObj as UserDocument;
  } else {
    //No such document
    return null;
  }
}

export default GetUserData;
