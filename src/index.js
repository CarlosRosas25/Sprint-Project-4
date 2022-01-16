import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./contexts/UserContext";
import TweetsProvider from "./contexts/TweetsContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TweetsProvider>
        <App />
      </TweetsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
