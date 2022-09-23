import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "../InitializeFirebase";
interface userData {
  email: string;
  password: string;
}
const auth = getAuth(app);
function SignInUser(
  user: userData,
  ErrFunc: (state: boolean) => void,
  handleSignUpBtn: (
    Form: "SignUp" | "SignIn",
    action: "open" | "close"
  ) => void,
  VerificationError: () => void,
  ResetFunc: () => void
) {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user !== null && !user.emailVerified) {
        handleSignUpBtn("SignIn", "close");
        ResetFunc();
        VerificationError();
      } else if (user !== null && user.emailVerified) {
        //SignIn
      }
      // ...
    })
    .catch((error) => {
      ErrFunc(true);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export default SignInUser;
