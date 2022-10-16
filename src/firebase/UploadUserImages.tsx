import { ref, uploadString } from "firebase/storage";
import { storage } from "./InitializeFirebase";
function UploadUserImages(Id: string, fileName: string, src: string) {
  let storageRef = ref(storage, `images/${Id}/${fileName}.jpg`);
  uploadString(storageRef, src, "data_url").then((snapshot) => {
    console.log("Uploaded a data_url string!");
  });
}

export default UploadUserImages;
