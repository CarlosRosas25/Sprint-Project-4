import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";

function Tweet({ tweetData }) {
  const { tweet: text, author, id, email, uid } = tweetData;
  const { user } = useContext(UserContext);

  return (
    <div className="tweet-card">
      <img className="photo-tweet" src={user.photoURL} alt="profile" />
      <div>
        <span className="username">{author}</span>
        <span className="email"> - {email}</span>
        <p className="tweet-text-area">{text}</p>
      </div>
    </div>
  );
}

export default Tweet;
