import React, { Component } from "react";
import "./App.css";

import { Score } from "./components/score/Score";
import Game from "./components/game/Game";

class App extends Component {
  render() {
    return (
      <main>
        <Score score={100000} />
        <Game />
      </main>
    );
  }
}

export default App;
