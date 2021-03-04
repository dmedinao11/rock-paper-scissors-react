import React from "react";
import "./Selection.css";
import RpsButton from "../../../shared/rps_button/RpsButton";
import triangle from "../../../../images/bg-triangle.svg";
import { buttons } from "../../../global/constants";

export const Selection = (props) => {
	const buttonsDom = buttons.map(({ buttonClass, img }, key) => {
		return (
			<RpsButton
				key={key}
				img={img}
				buttonClass={buttonClass}
				styleModifier="--selection"
				onUserSelecion={props.onUserSelection}
			/>
		);
	});
	return (
		<section className="selection">
			<img src={triangle} className="selection__bg" alt="triangle"></img>
			{buttonsDom}
		</section>
	);
};
