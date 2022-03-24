import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./contexts/UserContext";
import TweetsProvider from "./contexts/TweetsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/landingPage";
import TweetsView from "./components/TweetsView/tweetsView";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TweetsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<TweetsView />} />
          </Routes>
        </BrowserRouter>
      </TweetsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
