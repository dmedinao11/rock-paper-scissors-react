import React, { Component } from "react";
import { Selection } from "./selection/Selection";
import Result from "./result/Result";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelecting: false, onChangeToResult: false };
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  render() {
    return this.state.isSelecting ? (
      <Selection
        onUserSelection={this.handleUserSelection}
        changeToResult={this.state.onChangeToResult}
      />
    ) : (
      <Result selectedButton={1} />
    );
  }

  handleUserSelection(itemIndex) {
    this.setState({ onChangeToResult: true });
    setTimeout(() => this.setState({ isSelecting: false }), 600);

    console.log(itemIndex);
  }
}

export default Game;
