import { app } from "./InitializeFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
function SignUpUser(
  email: string,
  password: string,
  name: string,
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
