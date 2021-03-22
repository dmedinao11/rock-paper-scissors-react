import React, { Component } from "react";
import { Selection } from "./selection/Selection";
import Result from "./result/Result";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelecting: false,
			onChangeToResult: false,
			userSelection: null,
			onChangeToSelection: false,
			firstSelectionEntrance: true
		};
		this.handleUserSelection = this.handleUserSelection.bind(this);
		this.handlePlayAgain = this.handlePlayAgain.bind(this);
	}

	handleUserSelection(itemIndex) {
		this.setState({ onChangeToResult: true, firstSelectionEntrance: false });
		setTimeout(
			() =>
				this.setState({
					isSelecting: false,
					userSelection: itemIndex,
					onChangeToResult: false
				}),
			600
		);
	}

	handlePlayAgain() {
		this.setState({ onChangeToSelection: true });
		setTimeout(
			() => this.setState({ isSelecting: true, onChangeToSelection: false }),
			600
		);
	}

	render() {
		return this.state.isSelecting ? (
			<Selection
				onUserSelection={this.handleUserSelection}
				changeToResult={this.state.onChangeToResult}
				firstSelectionEntrance={this.state.firstSelectionEntrance}
			/>
		) : (
			<Result
				selectedButton={this.state.userSelection || 0}
				showOverflow={this.props.showOverflow}
				hideOverflow={this.props.hideOverflow}
				incrementScore={this.props.incrementScore}
				changeToSelection={this.state.onChangeToSelection}
				onPlayAgain={this.handlePlayAgain}
			/>
		);
	}
}

export default Game;
