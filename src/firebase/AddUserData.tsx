import { db } from "./InitializeFirebase";
import { doc, setDoc } from "firebase/firestore";
import { UserDocument } from "../Interfaces and Types/Interfaces";
async function AddUserData(userObj: UserDocument, Id: string): Promise<any> {
  let hmm = await setDoc(doc(db, "Users", Id), {
    ...userObj,
  });
  return hmm;
}
export default AddUserData;
