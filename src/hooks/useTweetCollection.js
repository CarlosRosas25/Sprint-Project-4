import { useContext } from "react";
import { addDoc, getDocs } from "firebase/firestore";
import { tweetsCollectionRef } from "../firebase/config";
import { TweetsContext } from "../contexts/TweetsContext";

function useTweetCollection() {
  const { setTweetsArray } = useContext(TweetsContext);

  const getTweets = async () => {
    try {
      const querySnapshot = await getDocs(tweetsCollectionRef);
      const tweetsCollectionArray = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setTweetsArray(tweetsCollectionArray);
    } catch (e) {
      console.log(e);
    }
  };

  const addNewTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(tweetsCollectionRef, tweetObject);
      await getTweets();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { addNewTweet, getTweets };
}

export default useTweetCollection;
