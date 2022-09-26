import { app } from "./InitializeFirebase";
import { signOut } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { UserDocument } from "../Interfaces and Types/Interfaces";
interface userData {
  name: string;
  email: string;
  password: string;
}
const actionCodeSettings = {
  url: "http://localhost:3000/Tweeter/home",
  // This must be true.
  handleCodeInApp: true,
};
const auth = getAuth(app);
async function SignUpUser(
  userData: userData,
  ErrFunc: (state: boolean) => void,
  handleSignUpBtn: (
    Form: "SignUp" | "SignIn",
    action: "open" | "close"
  ) => void,
  AddUser: (user: UserDocument, Id: string) => Promise<any>,
  ResetFunc: () => void,
  handleSuccSignUp: () => void
) {
  let { name, email, password } = userData;
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      await AddUser({ name: name }, user.uid);
      await sendEmailVerification(user);
      await signOut(auth);
      handleSignUpBtn("SignUp", "close");
      ResetFunc();
      handleSuccSignUp();
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
