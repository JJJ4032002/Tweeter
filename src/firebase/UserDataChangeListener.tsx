import React from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./InitializeFirebase";
import { UserStatePartial } from "../Interfaces and Types/Interfaces";
async function UserDataChangeListener(
  Id: string,
  setUserHelper: (user: UserStatePartial | null) => void
) {
  const unsub = onSnapshot(doc(db, "Users", Id), (doc) => {
    let newObj = {
      ...doc.data(),
    };
    console.log(doc.data());
    setUserHelper(newObj);
  });
}

export default UserDataChangeListener;
