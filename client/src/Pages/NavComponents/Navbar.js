import React from "react";
import { Link } from "react-router-dom";
import pmd from "../Images/pmd.png";
import homeicon from "../Images/homeicon.jpg";
import bellicon from "../Images/bellicon.png";
import loginicon from "../Images/loginicon.jfif";
import { BiMessageAltAdd } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Nav.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm mt-2 bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={pmd} className="pmd-logo" alt="pmd" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Add">
                  <h2><BiMessageAltAdd /></h2>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <img src={homeicon} className="homeicon" alt="Home" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <img src={bellicon} className="bellicon" alt="bell" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <img src={loginicon} className="bellicon" alt="login" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
