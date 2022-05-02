import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./InitializeFirebase";
const auth = getAuth(app);
function SignInUser(
  email: string,
  password: string,
  ErrFunc: (state: boolean) => void,
  SuccesfulSignUp: () => void
) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      SuccesfulSignUp();
      // ...
    })
    .catch((error) => {
      ErrFunc(true);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export default SignInUser;
