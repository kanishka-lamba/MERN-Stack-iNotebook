import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  const handelLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </Link>
            </div>
          </div>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-outline-primary mx-2"
                to="/login"
                type="submit"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline-primary mx-2"
                to="/signup"
                type="submit"
              >
                SignUp
              </Link>
            </form>
          ) : (
            <Link
              className="btn btn-outline-primary mx-2"
              to="/login"
              type="submit"
              onClick={handelLogout}
            >
              Logout
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
