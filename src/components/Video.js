import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import YouTube from "react-youtube";

const styles = {
  iframe: {
    width: "100%",
    height: "auto"
  }
};

// const Iframe = styled.iframe`
//   width: 100%;
// `;

export default class Video extends Component {
  render() {
    const opts = {
      width: "100%",
      height: "315px"
    };
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <YouTube videoId="_RVPWhJg1Fo" opts={opts} />
              </div>
              <div className="col-md-4">
                <YouTube videoId="t-YWO1VfuEs" opts={opts} />
              </div>
              <div className="col-md-4">
                <YouTube videoId="pUxGWQMVj3U" opts={opts} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-4">
                <YouTube videoId="BzUkua3DwCU" opts={opts} />
              </div>
              <div className="col-md-4">
                <YouTube videoId="auenzZFTSZE" opts={opts} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
