import {
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./InitializeFirebase";
import { useEffect } from "react";
import { UserDocument } from "../Interfaces and Types/Interfaces";
function GetUser(
  setUserHelper: (user: UserDocument) => void,
  succSignIn: () => void,
  GetUserData: (
    Id: string,
    setUserHelper: (user: UserDocument) => void,
    SuccSign: () => void
  ) => void,
  handleLoadingState: (state: boolean) => void
) {
  useEffect(() => {
    const auth = getAuth(app);
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log(user, "From GetUser listener");
      console.log(user?.emailVerified);
      if (user !== null && user.emailVerified) {
        console.log("This happens again");
        GetUserData(user.uid, setUserHelper, succSignIn);
      } else if (user !== null && !user.emailVerified) {
        signOut(auth).then(() => {
          console.log("User signed out");
        });
      } else if (user === null) {
        handleLoadingState(true);
      }
    });
    return () => {
      unsubscribe();
      console.log("unsub");
    };
  }, []);
}

export default GetUser;
