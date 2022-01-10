import React from "react";
import Header from "../Header/header";
import TweetForm from "../TweetForm/tweetForm";
import TweetsList from "../TweetsList/tweetsList";

function TweetsView() {
  return (
    <div>
      <Header />
      <TweetForm />
      <TweetsList />
    </div>
  );
}

export default TweetsView;
