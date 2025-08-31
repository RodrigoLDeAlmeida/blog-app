import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.jpeg";

const isValidUser = (user) => {
  return user && typeof user === "object" && typeof user.username === "string";
};

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // Handler to support keyboard accessibility for logout
  const handleLogoutKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      logout();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="logo">
          <Link to="/" aria-label="Homepage">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="links">
          <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
          <Link className="link" to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>

          {isValidUser(currentUser) ? (
            <>
              <span>{currentUser.username}</span>
              <span
                onClick={logout}
                onKeyDown={handleLogoutKeyDown}
                role="button"
                tabIndex={0}
                style={{ cursor: "pointer", marginLeft: 10 }}
                aria-label="Logout"
              >
                Logout
              </span>
            </>
          ) : (
            <Link className="link" to="/login">Login</Link>
          )}

          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
