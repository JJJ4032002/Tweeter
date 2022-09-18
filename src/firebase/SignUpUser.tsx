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
  SuccSignUp: () => void,
  AddUser: (user: UserDocument, Id: string) => void
) {
  let { name, email, password } = userData;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      AddUser({ name: name }, user.uid);
      sendEmailVerification(user, actionCodeSettings).then(() => {
        SuccSignUp();
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
