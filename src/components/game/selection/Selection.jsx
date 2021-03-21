import React from "react";
import "./Selection.css";
import RpsButton from "../../../shared/rps_button/RpsButton";
import triangle from "../../../../images/bg-triangle.svg";
import { buttons } from "../../../global/constants";

export const Selection = (props) => {
	const buttonsDom = buttons.map(({ buttonClass, img }, indx) => {
		return (
			<RpsButton
				key={indx}
				index={indx}
				img={img}
				buttonClass={`${buttonClass}`}
				parentClass="rpsButton--selection"
				styleModifier="--selection"
				onUserSelecion={props.onUserSelection}
			/>
		);
	});

	const animationClasses = props.firstSelectionEntrance
		? ""
		: props.changeToResult
		? " animate__animated animate__zoomOut"
		: " animate__animated animate__zoomIn";

	return (
		<section className={"selection" + animationClasses}>
			<img src={triangle} className="selection__bg" alt="triangle"></img>
			{buttonsDom}
		</section>
	);
};
