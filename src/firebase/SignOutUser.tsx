import { getAuth, signOut } from "firebase/auth";
import { app } from "./InitializeFirebase";
const auth = getAuth(app);
function SignOutUser(
  succSignOut: () => void,
  LoadingFunc: (state: boolean) => void
) {
  LoadingFunc(false);
  signOut(auth)
    .then(() => {
      // Sign-out successful.

      succSignOut();
    })
    .catch((error) => {
      // An error happened.
    });
}

export default SignOutUser;
