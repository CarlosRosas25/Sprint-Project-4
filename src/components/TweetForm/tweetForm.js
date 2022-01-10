import React, { useState, useContext } from "react";
import useTweetCollection from "../../hooks/useTweetCollection";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

function TweetForm() {
  const [formstate, setFormstate] = useState({ tweet: "" });

  const { user } = useContext(UserContext);
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
    <div className="form-area">
      <img className="photo" src={user.photoURL} alt="profile" />
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="text-area"
          placeholder="What's happening?"
          name="tweet"
          value={formstate.tweet}
          onChange={handleChange}
        />
        <button className="post-button" type="submit">POST</button>
      </form>
    </div>
  );
}

export default TweetForm;
