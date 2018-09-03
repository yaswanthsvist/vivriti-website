import React, { Component } from "react";
import "../assets/css/styles.css";

import lendinginvesting from "../assets/images/Lending-Investing.png";
import investbanking from "../assets/images/Invest-Banking.png";
import advisory from "../assets/images/advisory.png";
import journal from "../assets/images/journal.jpg";
import loginlogo from "../assets/images/login-logo.png";

// import {Lending-Investing.png as lendinginvesting } from "../assets/images/"

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="banner text-center">
          <div className="container">
            <h1>The Financial Marketplace Of The Future</h1>
            <a href="#introduction" className="bounce smooth-scrolling">
              <span
                className="fa-stack fa-lg text-center"
                style={{ border: "3px solid #fff", borderRadius: "50%" }}
              >
                <i
                  className="fa fa-angle-down fa-inverse"
                  style={{ marginTop: "2px" }}
                />
              </span>
            </a>
          </div>
        </section>
        <section id="introduction" className="introduction text-center">
          <div className="container">
            <span className="sub-head">Introduction</span>
            <h2>Vivriti Capital: The Story</h2>
            <p>
              Vivriti Capital has been set up with the objective of creating the
              largest and most valuable marketplace for financial services,
              serving a client base of financial institutions, corporates, small
              enterprises, and individuals that lack efficient access to
              financial services. The founding team is committed to making
              Vivriti Capital a one-stop shop for all the debt requirements of
              its target clientele.
            </p>
            <a href="whoweare.html">Get to know us better</a>
          </div>
        </section>
        <section className="what-wedo text-center">
          <div className="container">
            <span className="sub-head">What we Do</span>
            <h2>Your concept. Our bridge. Your financial actualisation.</h2>
            <div className="row">
              <div className="col-sm-4">
                <figure>
                  <img
                    className="img-responsive"
                    src={lendinginvesting}
                    alt="Lending and Investing"
                  />
                </figure>
                <h4>Lending and Investing</h4>
              </div>
              <div className="col-sm-4">
                <figure>
                  <img
                    className="img-responsive"
                    src={investbanking}
                    alt="Investment Banking"
                  />
                </figure>
                <h4>Investment Banking</h4>
              </div>
              <div className="col-sm-4">
                <figure>
                  <img
                    className="img-responsive"
                    src={advisory}
                    alt="Advisory"
                  />
                </figure>
                <h4>Advisory</h4>
              </div>
            </div>
            <div className="text-center">
              <a className="" href="whatwedo.html">
                Read More
              </a>
            </div>
          </div>
        </section>
        <section className="journal text-center">
          <div className="container">
            <span className="sub-head">Journal</span>
            <h2>Knowledge Capital</h2>
            <ul className="list-inline text-center journal-block clearfix">
              <li className="col-md-4">
                <a
                  href="https://medium.com/vivriticapital/microfinance-adapting-to-changing-times-2d85d9647b84"
                  className="journal-link"
                />
                <figure>
                  <img className="img-responsive" src={journal} alt="Journal" />
                </figure>
                <a
                  href="https://medium.com/vivriticapital/microfinance-adapting-to-changing-times-2d85d9647b84"
                  className="journal-category"
                >
                  Business
                </a>
                <div className="journal-body">
                  <span> August 31, 2017 </span>
                  <h3>Microfinance Adapting To Changing Times</h3>
                  <p>
                    In the financial year 2016, the Indian microfinance sector
                    finally appeared to have shed the baggage of the 2010
                    crisis. The sector had faced a significant test of its
                    existence…
                  </p>
                </div>
                <div className="journal-footer">
                  <ul className="list-inline">
                    <li>
                      <a href="https://medium.com/vivriticapital/microfinance-adapting-to-changing-times-2d85d9647b84">
                        <i className="fa fa-user-o" /> vivriticapital
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/vivriticapital/microfinance-adapting-to-changing-times-2d85d9647b84">
                        <i className="fa fa-comment-o" /> 3
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="fa fa-heart-o" /> 23
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <a href="https://medium.com/vivriticapital">Read all stories</a>
            </div>
          </div>
        </section>
        <section className="coming-soon text-center">
          <div className="container">
            <figure>
              <img
                className="img-responsive"
                src={loginlogo}
                alt="Login Logo"
              />
            </figure>
            <span className="sub-head">Coming soon</span>
            <h2>A Financial Marketplace in the Making</h2>
            <a href="https://marketplace.vivriticapital.com/login">Log in</a>
          </div>
        </section>
      </div>
    );
  }
}
