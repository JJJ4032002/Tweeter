import { app } from "./InitializeFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
function RegisterUser(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default RegisterUser;