import React, { Component } from "react";
import "../assets/css/styles.css";

import footercurve from "../assets/images/footer-curve.jpg";
import logoblue from "../assets/images/vivriti-logo-blue.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src={footercurve} className="img-responsive" alt="Logo" />
        </figure>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-3">
                <figure>
                  <img className="img-responsive" src={logoblue} alt="Logo" />
                </figure>
              </div>
              <div className="col-md-2 col-sm-3">
                <p>Who we are</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="whoweare.html#overview">Overview</a>
                  </li>
                  <li>
                    <a href="whoweare.html#governance">Governance</a>
                  </li>
                  <li>
                    <a href="whoweare.html#people">People</a>
                  </li>
                  <li>
                    <a href="whoweare.html#press">Press</a>
                  </li>
                  <li>
                    <a href="whoweare.html#partners">Partners</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-3">
                <p>Info</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="whatwedo.html">What we do</a>
                  </li>
                  <li>
                    <a href="careers.html">Careers</a>
                  </li>
                  <li>
                    <a href="contactus.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-3">
                <p>Others</p>
                <ul className="list-unstyled">
                  <li>
                    <a href="blog.html">Our Blog</a>
                  </li>
                  <li>
                    <a href="https://marketplace.vivriticapital.com/login">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-3">
                <p>Social Links</p>
                <ul className="list-inline social-links">
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/vivriticapital/"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      href="https://twitter.com/search?vertical=default&q=%40VivritiCapital&src=typd"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a
                      href="https://www.linkedin.com/company/vivriti-capital/"
                      title="Linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
