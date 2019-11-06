import React, { Component } from "react";
import ReactDOM from "react-dom";
import "tachyons";
import Card from "./card";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
