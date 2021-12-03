import { addDoc } from "firebase/firestore";
import { tweetsCollectionRef } from "../firebase/config";

function useTweetCollection() {
  const addNewTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(tweetsCollectionRef, tweetObject);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { addNewTweet };
}

export default useTweetCollection;
