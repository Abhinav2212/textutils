import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About"
import AboutNew from "./AboutNew"
import Services from "./Services"
import ContactUs from "./ContactUs"


import TextCompoenent from "./TextCompoenent";
export default function Header(props) {
  return (
    <Router>
    <div>
      
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.navTitle}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  {props.services}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  {props.contact}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button cla
                    ssName="btn btn-primary" type="submit">Search</button>
                </form> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
    <Switch>
          <Route exact path="/about">
            <AboutNew mode = {props.mode}/>
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contactus">
            <ContactUs />
          </Route>
          <Route exact path="/">
          <TextCompoenent mode = {props.mode} title= "Practice Typing"/>
          </Route>
        </Switch>
    </Router>
  );
}

Header.propTypes = {
  home: PropTypes.string.isRequired,
};

Header.defaultProps = {
  home: "StrangerHome",
};
