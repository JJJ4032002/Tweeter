import { app } from "./InitializeFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { User } from "../Interfaces and Types/Interfaces";

const auth = getAuth(app);
function SignUpUser(
  email: string,
  password: string,
  name: string,
  setUserHelper: (user: User) => void,
  ErrFunc: (state: boolean) => void,
  SuccesfulSignUp: () => void
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
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
      setUserHelper({
        displayName: name,
        email: email,
        photoURL: "",
        userId: userCredential.user.uid,
      });
      SuccesfulSignUp();

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
