import React, { useEffect } from "react";
import logo from "../../images/logo.svg";
import "./styles.css";
import useGoogleAuthentication from "../../hooks/useAuthentication";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import logoGoogle from "../../images/logoGoogle.svg";

function LandingPage() {
  const { login } = useGoogleAuthentication();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="initial-page">
      <div>
        <img className="logo" src={logo} alt="main-logo" />
      </div>
      <div className="welcome-zone">
        <h2 className="line1">Welcome developer!</h2>
        <p className="line2">Please sign in to be part of our community.</p>
        <button className="button-line" onClick={login}>
          <img className="logoGoogle" src={logoGoogle} alt="google" />
          <p className="button-text">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
