import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./InitializeFirebase";
const auth = getAuth(app);
function SignInUser(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export default SignInUser;
