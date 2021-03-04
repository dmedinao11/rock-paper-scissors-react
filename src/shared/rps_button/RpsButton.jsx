import React from "react";
import "./RpsButton.css";

const RpsButton = (props) => {
	return (
		<button
			className={`rpsButton ${props.buttonClass} ${props.buttonClass}${props.styleModifier}`}
			onClick={() => props.onUserSelecion(props.buttonClass)}>
			<img src={props.img} className="rpsButton__img"></img>
		</button>
	);
};

export default RpsButton;
