import { app } from "./InitializeFirebase";
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
function SignUpUser(
  userData: userData,
  ErrFunc: (state: boolean) => void,
  handleSignUpBtn: (
    Form: "SignUp" | "SignIn",
    action: "open" | "close"
  ) => void,
  AddUser: (user: UserDocument, Id: string) => void,
  ResetFunc: () => void,
  handleSuccSignUp: () => void
) {
  let { name, email, password } = userData;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      AddUser({ name: name }, user.uid);
      sendEmailVerification(user).then(() => {
        handleSignUpBtn("SignUp", "close");
        ResetFunc();
        handleSuccSignUp();
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
