import React, { Component } from "react";
import ReactDOM from "react-dom";
import "tachyons";
import Card from "./card";
import { character } from "./characters";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          id={character[0].id}
          name={character[0].name}
          detail={character[0].detail}
          img={character[0].src}
        />
        <Card
          id={character[1].id}
          name={character[1].name}
          detail={character[1].detail}
          img={character[1].src}
        />
        <Card
          id={character[2].id}
          name={character[2].name}
          detail={character[2].detail}
          img={character[2].src}
        />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
