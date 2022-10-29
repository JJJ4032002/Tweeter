import React, { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./InitializeFirebase";
import { getAuth, Unsubscribe } from "firebase/auth";
import { UserStatePartial } from "../Interfaces and Types/Interfaces";
const auth = getAuth();
function useUserDataChangeListener(
  setUserHelper: (user: UserStatePartial | null) => void
) {
  let unsub: null | Unsubscribe = null;
  useEffect(() => {
    if (auth.currentUser) {
      unsub = onSnapshot(doc(db, "Users", auth.currentUser?.uid), (doc) => {
        let newObj = {
          ...doc.data(),
        };
        console.log(doc.data());
        setUserHelper(newObj);
      });
    }

    return () => {
      console.log("return runs");
      if (unsub !== null) {
        console.log("unsubbed");
        unsub();
      }
    };
  }, [auth.currentUser, setUserHelper]);
}

export default useUserDataChangeListener;
