import React from "react";
import logo from "../../images/logo.svg";
import "./styles.css";
import useGoogleAuthentication from "../../hooks/useAuthentication";

function LandingPage() {
  const { login } = useGoogleAuthentication();

  return (
    <div className="initial-page">
      <div>
        <img className="logo" src={logo} alt="main-logo" />
      </div>
      <div className="welcome-zone">
        <h2>Welcome developer!</h2>
        <text>Please sign in to be part of our community.</text>
        <button onClick={login}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default LandingPage;
