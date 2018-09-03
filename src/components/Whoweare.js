import React, { Component } from "react";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import { Tabs, Tab } from "react-bootstrap";

import "../assets/css/styles.css";

import gaurav from "../assets/images/gaurav.jpg";
import vineet from "../assets/images/vineet.jpg";
import aniket from "../assets/images/aniket.jpg";
import irfan from "../assets/images/irfan-mohd.jpg";
import soum from "../assets/images/soum.jpg";
import abhijeet from "../assets/images/abhijeet.png";
//import * as x from "../assets/images/employee/";

export default class Whoweare extends Component {
  render() {
    return (
      <div>
        <section className="whoweare banner text-center">
          <div className="container">
            <h1>Your One True North For Fiscal Welfare</h1>
            <p>Who we are</p>
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
        <section className="custom-scrollspy">
          <div className="container text-center">
            <nav className="navbar" data-spy="affix" data-offset-top="570">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/who-we-are#overview">overview</Link>
                </li>
                <li className="">
                  <Link to="/who-we-are#video">videos</Link>
                </li>
                <li className="">
                  <Link to="/who-we-are#governance">governance</Link>
                </li>
                <li className="">
                  <Link to="/who-we-are#people">People</Link>
                </li>
                <li className="">
                  <Link to="/who-we-are#press">Press/Media</Link>
                </li>
                <li className="">
                  <Link to="/who-we-are#partners">Partners</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="overview" className="overview">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Vivriti Capital has been set up with the objective of
                    creating the largest and most valuable marketplace for
                    financial services serving a client base of financial
                    institutions, corporates, small enterprises, and individuals
                    that lack efficient access to financial services. The
                    founding team is committed to making Vivriti Capital a
                    one-stop shop for all the debt requirements of its target
                    clientele.
                  </p>
                  <h2>
                    The genesis of Vivriti (the word means progress or
                    development) comes from the founding team’s assessment that
                    financial services in India is largely “productised” with
                    most providers of finance being monoline.
                  </h2>
                  <p>
                    Thus, individuals/enterprises either need to resort to
                    multiple providers for multiple needs or transfer from one
                    provider to another for better terms.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Through rigorous data analytics, our technology system will
                    determine the client’s need and design an appropriate
                    product at the client’s doorstep. The product provider will
                    emerge from the most suitable bid on Vivriti’s marketplace.
                    The company has a strong digital spine which will aid in
                    customer sourcing, underwriting, customising, and offering
                    products at the clients’ fingertips.
                  </p>
                  <p>
                    At the other end, debt investors (asset managers, banks,
                    NBFCs, insurance companies, pension funds, and private
                    wealth) will be serviced through an intelligent system that
                    targets the right deal to the right investor; creates an
                    exhaustive repository of highly relevant public and private
                    information for the investor and supports post-deal credit,
                    compliance, and accounting needs as well. Through this,
                    Vivriti Capital aims to enable price discovery and investor
                    reach to its clients.
                  </p>
                  <p>
                    Vivriti Capital is registered with the RBI as a regulated,
                    non-deposit-taking, non-banking financial corporation. The
                    founders aim to significantly capitalise the firm to enable
                    the right liability structure and ability to offer products
                    across the risk spectrum to its clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="video" className="video text-center">
            <div className="container">
              <h2>Videos of Vivriti</h2>
              <Video />
            </div>
          </div>
          <div id="governance" className="governance text-center">
            <div className="container">
              <span className="sub-head">The Founding Figures of Vivriti</span>
              <h2>The Board of Directors</h2>
              <p>
                The Board of Directors and management of Viviriti Capital have a
                firm belief in the importance of corporate governance practices
                that ensure accountability, transparency, and balancing the
                interests of all the stakeholders. Our leaders are industry
                experts who bring together thought leadership and experience to
                design intelligent solutions.
              </p>
              <ul className="list-inline row">
                <li className="col-md-6">
                  <figure>
                    <img src={gaurav} alt="Gaurav" className="img-responsive" />
                  </figure>
                  <h3>Gaurav</h3>
                  <p>Founder and Director</p>
                  <a href="gaurav.html">Read Profile</a>
                </li>
                <li className="col-md-6">
                  <figure>
                    <img src={vineet} alt="Vineet" className="img-responsive" />
                  </figure>
                  <h3>Vineet</h3>
                  <p>Founder and Director</p>
                  <a href="vineet.html">Read Profile</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="people" className="people text-center">
            <div className="container">
              <span className="sub-head">The Founding Figures of Vivriti</span>
              <h2>Founding Members</h2>
              <ul className="list-inline row founding-figure">
                <li className="col-md-4">
                  <a
                    href="https://www.linkedin.com/in/aniket-deshpande-68707345/"
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={aniket}
                        alt="Aniket"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                  <h6>Aniket</h6>
                  <p>Co-Head | Institutional Business</p>
                  <a
                    href="https://www.linkedin.com/in/aniket-deshpande-68707345/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a
                    href="https://in.linkedin.com/in/irfan-mohammed-9802b210"
                    target="_blank"
                  >
                    <figure>
                      <img src={irfan} alt="Irfan" className="img-responsive" />
                    </figure>
                  </a>
                  <h6>Irfan</h6>
                  <p>Co-Head | Institutional Business</p>
                  <a
                    href="https://in.linkedin.com/in/irfan-mohammed-9802b210"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a
                    href="https://www.linkedin.com/in/soumendraghosh/?ppe=1"
                    target="_blank"
                  >
                    <figure>
                      <img
                        src={soum}
                        alt="Soumendra"
                        className="img-responsive"
                      />
                    </figure>
                  </a>
                  <h6>Soumendra</h6>
                  <p>Head | Capital Markets</p>
                  <a
                    href="https://www.linkedin.com/in/soumendraghosh/?ppe=1"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square" />
                  </a>
                </li>
              </ul>
              <span className="sub-head">
                The Faces You've Been Waiting For
              </span>
              <h2>Our Team Works Wonders</h2>
              <p>
                At Vivriti Capital, we believe that the most valuable part of
                our company is our human capital. We know that our people’s
                commitment and sheer perseverance are the driving forces behind
                our ability to serve our clients in the most effective way and
                generate long-term value for all our stakeholders.
              </p>
              <div className="boundingBox" id="content">
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                  <Tab eventKey={1} title="All">
                    <ul className="list-inline row faces" id="portfolio-list">
                      <li className="col-md-4 risk">
                        <a
                          href="https://www.linkedin.com/in/abhijeetjhunjhunwala/"
                          target="_blank"
                        >
                          <figure>
                            <img
                              src={abhijeet}
                              alt="Abhijeet"
                              className="img-responsive"
                            />
                          </figure>
                        </a>
                        <h6>Abhijeet</h6>
                        <p>Risk</p>
                        <a
                          href="https://www.linkedin.com/in/abhijeetjhunjhunwala/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin-square" />
                        </a>
                      </li>
                    </ul>
                  </Tab>
                  <Tab eventKey={2} title="Admin &amp; Travel">
                    Tab 2 content
                  </Tab>
                  <Tab eventKey={3} title="Capital Markets">
                    Tab 3 content
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
