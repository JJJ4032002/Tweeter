import { db } from "./InitializeFirebase";
import { doc, setDoc } from "firebase/firestore";

async function AddUserData(name: string, Id: string) {
  await setDoc(doc(db, "Users", Id), {
    name: name,
  });
}
export default AddUserData;
