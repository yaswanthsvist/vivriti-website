import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/css/styles.css";

import logo from "../assets/images/vivriti-logo.png";
import logoblue from "../assets/images/vivriti-logo-blue.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container-fluid">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  <img
                    src={logo}
                    className="img-responsive white-logo hidden-xs hidden-sm"
                    alt="Logo"
                  />
                  <img
                    src={logoblue}
                    className="img-responsive blue-logo"
                    alt="Logo"
                  />
                </Link>
              </div>

              <nav className="navbar-collapse bs-navbar-collapse">
                <button className="head-toggle pull-right">
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-bars" />
                </button>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/who-we-are" className="hover-underline">
                      Who we are
                    </Link>
                  </li>
                  <li>
                    <Link to="/whatwedo" className="hover-underline">
                      What we do
                    </Link>
                  </li>
                  <li>
                    <Link to="/governance" className="hover-underline">
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://medium.com/vivriticapital"
                      className="hover-underline"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="hover-underline">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" className="hover-underline">
                      Contact us
                    </Link>
                  </li>
                  <li className="login-btn">
                    <Link to="https://marketplace.vivriticapital.com/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
