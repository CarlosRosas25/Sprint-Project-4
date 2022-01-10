import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./styles.css";
import logo1 from "../../images/group-1.svg";
import logo2 from "../../images/group-2.svg";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div className="header-content">
        <img className="photo-header" src={user.photoURL} alt="profile" />
        <img className="logo2" src={logo2} alt="logo-flag" />
        <img className="logo1" src={logo1} alt="logo-name" />
      </div>
    </div>
  );
}

export default Header;
