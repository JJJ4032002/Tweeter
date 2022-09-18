import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./InitializeFirebase";
import { useEffect } from "react";
import { User } from "firebase/auth";
import { UserDocument } from "../Interfaces and Types/Interfaces";
function GetUser(
  setUserHelper: (user: UserDocument) => void,
  succSignIn: () => void,
  GetUserData: (
    Id: string,
    setUserHelper: (user: UserDocument) => void,
    SuccSign: () => void
  ) => void
) {
  useEffect(() => {
    const auth = getAuth(app);
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log(user, "From listener");

      if (user !== null && user.emailVerified) {
        console.log("This happens again");
        GetUserData(user.uid, setUserHelper, succSignIn);
      }
    });
    return () => {
      unsubscribe();
      console.log("unsub");
    };
  }, []);
}

export default GetUser;
