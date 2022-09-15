import { User, getAuth } from "firebase/auth";
import { app } from "./InitializeFirebase";
let auth = getAuth(app);
async function GetLatestUserData(setUserData: (user: User) => void) {
  let user = await auth.currentUser;
  console.log(user);
  await user?.reload();
  user = await auth.currentUser;
  console.log(user?.displayName);
  if (user !== null) {
    console.log("setting");
    setUserData(user);
  }
}

export default GetLatestUserData;
