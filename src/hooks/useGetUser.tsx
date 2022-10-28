import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../firebase/InitializeFirebase";
import { useEffect } from "react";
function useGetUser(
  handleUserData: (state: User | null) => void,
  handleLoadingState: (state: boolean) => void
) {
  useEffect(() => {
    console.log("This runs How many times.");
    const auth = getAuth(app);
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log(user, "From GetUser listener");
      console.log(user?.emailVerified);
      if (user !== null && user.emailVerified) {
        handleUserData(user);
      } else if (user === null) {
        console.log("The user is null");
        handleLoadingState(true);
      }
    });
    return () => {
      unsubscribe();
      console.log("unsub");
    };
  }, [handleLoadingState, handleUserData]);
}

export default useGetUser;
