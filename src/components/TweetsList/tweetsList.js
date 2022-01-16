import React, { useContext, useEffect } from "react";
import { TweetsContext } from "../../contexts/TweetsContext";
import useTweetCollection from "../../hooks/useTweetCollection";
import Tweet from "../Tweet/tweet";

function TweetsList() {
  const { tweetsArray } = useContext(TweetsContext);
  const { getTweets } = useTweetCollection();

  useEffect(() => {
    const getTweetsAsync = async () => {
      const allTweets = await getTweets();
    };
    getTweetsAsync();
  }, []);

  return (
    <div>
      {tweetsArray.length > 0
        ? tweetsArray.map((object) => {
            return <Tweet key={object.id} tweetData={object} />;
          })
        : "0 tweets"}
    </div>
  );
}

export default TweetsList;
