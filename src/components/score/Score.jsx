import React from "react";
import logo from "../../../images/logo.svg";
import "./Score.css";

export const Score = (props) => {
	return (
		<header className="score">
			<img src={logo} className="score__logo"></img>
			<div className="score__wrapper">
				<h3 className="score__title">SCORE</h3>
				<h1 className="score__number">{props.score}</h1>
			</div>
		</header>
	);
};
