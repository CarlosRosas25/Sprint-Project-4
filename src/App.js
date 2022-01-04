import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import TweetForm from "./components/TweetForm/tweetForm";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return <div className="App">{user ? <TweetForm /> : <LandingPage />}</div>;
}

export default App;
