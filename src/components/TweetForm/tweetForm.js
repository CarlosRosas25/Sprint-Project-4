import React, { useState } from "react";
import useTweetCollection from "../../hooks/useTweetCollection";

function TweetForm() {
  const [formstate, setFormstate] = useState({ tweet: "" });

  const { addNewTweet } = useTweetCollection();

  const handleChange = (e) => {
    setFormstate({
      ...formstate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewTweet(formstate);

    setFormstate({ tweet: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          name="tweet"
          value={formstate.tweet}
          onChange={handleChange}
        />
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

export default TweetForm;
