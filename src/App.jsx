import React, { Component } from "react";
import "./App.css";

import { Score } from "./components/score/Score";

class App extends Component {
	render() {
		return (
			<main>
				<Score score={100} />
			</main>
		);
	}
}

export default App;
