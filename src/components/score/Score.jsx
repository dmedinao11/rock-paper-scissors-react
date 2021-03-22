//Core
import React from "react";

//Assets
import logo from "../../../images/logo.svg";

//Components
import "./Score.css";

export const Score = (props) => {
	return (
		<header className="score">
			<img src={logo} className="score__logo" alt="logo"></img>
			<div className="score__wrapper">
				<h3 className="score__title">SCORE</h3>
				<h1 className="score__number">{props.score}</h1>
			</div>
		</header>
	);
};
