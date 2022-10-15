import {
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Location } from "react-router-dom";
import { app } from "./InitializeFirebase";
import { useEffect } from "react";
import { UserDocument } from "../Interfaces and Types/Interfaces";
function GetUser(
  setUserHelper: (user: UserDocument) => void,
  succSignIn: () => void,
  GetUserData: (Id: string) => Promise<UserDocument | null>,
  handleLoadingState: (state: boolean) => void,
  location: Location
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
            console.log(location.pathname);
            if (
              location.pathname === "/Tweeter/login" ||
              location.pathname === "/Tweeter"
            )
              succSignIn();
            handleLoadingState(true);
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
