import React from "react";
import "./RpsButton.css";

const RpsButton = (props) => {
	return (
		<span
			className={`rpsButton ${props.parentClass} ${props.buttonClass} ${props.buttonClass}${props.styleModifier}`}
			onClick={() =>
				props.onUserSelecion ? props.onUserSelecion(props.index) : () => null
			}>
			<img src={props.img} className="rpsButton__img" alt="rpsItem"></img>
		</span>
	);
};

export default RpsButton;
