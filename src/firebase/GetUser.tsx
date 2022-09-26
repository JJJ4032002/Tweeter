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
  GetUserData: (Id: string) => Promise<UserDocument | null>,
  handleLoadingState: (state: boolean) => void
) {
  useEffect(() => {
    console.log("This runs");
    const auth = getAuth(app);
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log(user, "From GetUser listener");
      console.log(user?.emailVerified);
      if (user !== null && user.emailVerified) {
        console.log("This happens again");
        GetUserData(user.uid).then((result) => {
          if (result !== null) {
            setUserHelper(result);
            succSignIn();
          }
        });
      } else if (user === null) {
        console.log("The user is null");
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
