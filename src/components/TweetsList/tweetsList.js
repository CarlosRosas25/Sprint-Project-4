import React, { useContext, useEffect } from "react";
import { TweetsContext } from "../../contexts/TweetsContext";
import useTweetCollection from "../../hooks/useTweetCollection";
import Tweet from "../Tweet/tweet";
import "./styles.css";

function TweetsList() {
  const { tweetsArray } = useContext(TweetsContext);
  const { getTweets } = useTweetCollection();

  useEffect(() => {
    const getTweetsAsync = async () => {
      const allTweets = await getTweets();
    };

    setTimeout(() => {
      getTweetsAsync();
    }, 5000);
  }, []);

  return (
    <div className="tweetsList">
      {tweetsArray.length > 0 ? (
        tweetsArray.map((object) => {
          return <Tweet key={object.id} tweetData={object} />;
        })
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}

export default TweetsList;
