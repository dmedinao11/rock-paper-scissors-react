import React, { Component } from "react";
import { Selection } from "./selection/Selection";
import { Result } from "./result/Result";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = { isSelecting: true };
		this.handleUserSelection = this.handleUserSelection.bind(this);
	}

	render() {
		return this.state.isSelecting ? (
			<Selection onUserSelection={this.handleUserSelection} />
		) : (
			<Result />
		);
	}

	handleUserSelection(item) {
		this.setState({ isSelecting: false });
		console.log(item);
	}
}

export default Game;
