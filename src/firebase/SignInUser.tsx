import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "../Interfaces and Types/Interfaces";
import { app } from "./InitializeFirebase";
const auth = getAuth(app);
function SignInUser(
  email: string,
  password: string,
  setUserHelper: (user: User) => void,
  ErrFunc: (state: boolean) => void,
  SuccesfulSignUp: () => void
) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      setUserHelper({
        displayName: user.displayName != null ? user.displayName : "",
        email: user.email != null ? user.email : "",
        photoURL: "",
        userId: user.uid,
      });
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
