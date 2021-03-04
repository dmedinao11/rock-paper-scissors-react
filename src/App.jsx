import React, { Component } from "react";
import "./App.css";

import { Score } from "./components/score/Score";
import Game from "./components/game/Game";
import RulesModal from "./shared/rules_modal/RulesModal";

class App extends Component {
	constructor() {
		super();
		this.state = { rulesModalISOpen: false };
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}
	render() {
		return (
			<main>
				<Score score={100000} />
				<Game />
				<button className="rules__button" onClick={this.handleOpenModal}>
					RULES
				</button>
				<RulesModal
					onCloseClick={this.handleCloseModal}
					isOpen={this.state.rulesModalISOpen}></RulesModal>
			</main>
		);
	}

	handleCloseModal() {
		this.setState({ rulesModalISOpen: false });
	}

	handleOpenModal() {
		this.setState({ rulesModalISOpen: true });
	}
}

export default App;
