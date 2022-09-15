import { app } from "./InitializeFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from "firebase/auth";
import GetLatestUserData from "./GetLatestUserData";
const auth = getAuth(app);
function SignUpUser(
  email: string,
  password: string,
  name: string,
  ErrFunc: (state: boolean) => void,
  setUserHelper: (user: User) => void
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      updateProfile(userCredential.user, {
        displayName: name,
      })
        .then(() => {
          // Profile updated!
          // ...
          GetLatestUserData(setUserHelper);
          console.log("Profile updated");
        })
        .catch((error) => {
          // An error occurred
          // ...
        });

      // ...
    })
    .catch((error) => {
      ErrFunc(true);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default SignUpUser;
