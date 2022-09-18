import { db } from "./InitializeFirebase";
import { doc, setDoc } from "firebase/firestore";
import { UserDocument } from "../Interfaces and Types/Interfaces";
async function AddUserData(userObj: UserDocument, Id: string) {
  await setDoc(doc(db, "Users", Id), {
    ...userObj,
  });
}
export default AddUserData;
