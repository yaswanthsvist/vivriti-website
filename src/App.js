import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Whoweare from "./components/Whoweare";

// import route Components here
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/who-we-are" component={Whoweare} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
