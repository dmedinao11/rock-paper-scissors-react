import React, { Component } from "react";
import "./App.css";
import "animate.css";

import { Score } from "./components/score/Score";
import Game from "./components/game/Game";
import RulesModal from "./shared/rules_modal/RulesModal";
import { ScoreController } from "./global/utils";

class App extends Component {
	constructor() {
		super();
		this.scoreController = new ScoreController();
		this.state = {
			rulesModalISOpen: false,
			overflow: false,
			score: this.scoreController.score
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleToggleOverflow = this.handleToggleOverflow.bind(this);
		this.handleIncrementScore = this.handleIncrementScore.bind(this);
	}

	handleIncrementScore() {
		this.scoreController.increment();
		this.setState({ score: this.scoreController.score });
	}

	handleCloseModal() {
		this.setState({ rulesModalISOpen: false });
	}

	handleOpenModal() {
		this.setState({ rulesModalISOpen: true });
	}

	handleToggleOverflow(show) {
		return () => {
			this.setState({ overflow: show });
		};
	}

	render() {
		const mainStyles = { overflowX: this.state.overflow ? "visible" : "hidden" };

		return (
			<main style={mainStyles} className="animate__animated animate__fadeIn">
				<Score score={this.state.score} />
				<Game
					showOverflow={this.handleToggleOverflow(true)}
					hideOverflow={this.handleToggleOverflow(false)}
					incrementScore={this.handleIncrementScore}
				/>
				<button className="rules__button" onClick={this.handleOpenModal}>
					RULES
				</button>
				<RulesModal
					onCloseClick={this.handleCloseModal}
					isOpen={this.state.rulesModalISOpen}></RulesModal>
			</main>
		);
	}
}

export default App;
