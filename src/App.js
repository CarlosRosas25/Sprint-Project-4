import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import TweetsView from "./components/TweetsView/tweetsView";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return <div className="App">{user ? <TweetsView /> : <LandingPage />}</div>;
}

export default App;
