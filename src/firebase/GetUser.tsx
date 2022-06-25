import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./InitializeFirebase";
import { useEffect } from "react";
import { User } from "firebase/auth";
function GetUser(setUserHelper: (user: User) => void, succSignIn: () => void) {
  useEffect(() => {
    const auth = getAuth(app);
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log(user);
      if (user !== null) {
        setUserHelper(user);
        succSignIn();
      }
    });
    return () => {
      unsubscribe();
      console.log("unsub");
    };
  }, []);
}

export default GetUser;
