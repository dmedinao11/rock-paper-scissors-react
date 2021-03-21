import React, { Component, createRef } from "react";
import "./Result.css";
import { buttons, gameWinnerMap } from "../../../global/constants";
import RpsButton from "../../../shared/rps_button/RpsButton";

class Result extends Component {
	constructor(props) {
		super(props);
		this.randomButtons = this.getRandomButtons();
		this.state = { showResult: false, resultText: "" };
		this.buttonsContainer = createRef();
		this.userWrapper = createRef();
		this.houseWrapper = createRef();
		this.handleCarrouselEnd = this.handleCarrouselEnd.bind(this);
		this.handleSelectionEnd = this.handleSelectionEnd.bind(this);
		this.getRandomButtons = this.getRandomButtons.bind(this);
		this.calculateWinner = this.calculateWinner.bind(this);
	}

	handleCarrouselEnd() {
		const buttons = Array.from(this.buttonsContainer.current.children);
		const houseButton = buttons.pop();
		buttons.forEach((item) => (item.style.visibility = "hidden"));
		houseButton.classList.add("rpsButton--result--house");
		houseButton.addEventListener("animationend", this.handleSelectionEnd);
	}

	handleSelectionEnd() {
		this.props.showOverflow();
		const translate = 40;
		this.userWrapper.current.style.transform = `translateX(-${translate}%)`;
		this.houseWrapper.current.style.transform = `translateX(${translate}%)`;
		const { incrementScore, text } = this.calculateWinner();
		this.setState({ showResult: true, resultText: text });
		if (incrementScore) this.props.incrementScore();
	}

	componentWillUnmount() {
		this.props.hideOverflow();
	}

	getRandomButtons() {
		const randomButtons = buttons
			.map((button) => ({ ...button, random: Math.random() }))
			.sort((button1, button2) => button1.random - button2.random);

		this.houseSelection = randomButtons[randomButtons.length - 1].id;
		return randomButtons;
	}

	calculateWinner() {
		if (this.props.selectedButton == this.houseSelection)
			return { text: "DRAW", incrementScore: false };
		else if (gameWinnerMap[this.props.selectedButton] == this.houseSelection)
			return { text: "YOU WIN", incrementScore: true };
		else return { text: "YOU LOSE", incrementScore: false };
	}

	render() {
		const allButtons = this.randomButtons.map(({ img, buttonClass }, indx) => {
			return (
				<RpsButton
					key={indx}
					img={img}
					parentClass="rpsButton--result rpsButton--result--allButtons"
					buttonClass={buttonClass}
					styleModifier="--result"
				/>
			);
		});

		const userSelectionObj = buttons[this.props.selectedButton];
		const userSelectionButton = (
			<RpsButton
				img={userSelectionObj.img}
				parentClass="rpsButton--result rpsButton--result--user"
				buttonClass={userSelectionObj.buttonClass}
				styleModifier="--result"
			/>
		);

		const mainAnimationsClasses = this.props.changeToSelection
			? " animate__animated animate__fadeOutLeft"
			: " animate__animated animate__fadeInRight";

		return (
			<section className={"result " + mainAnimationsClasses}>
				<div className="result__wrapper" ref={this.userWrapper}>
					<h3 className="result__subtitle">YOU PICKED</h3>
					<div className="result__buttonWrapper result__buttonWrapper--user">
						{userSelectionButton}
					</div>
				</div>

				{this.state.showResult ? (
					<div className="result__again animate__animated animate__bounceIn">
						<h1 className="result__againTitle">{this.state.resultText}</h1>
						<span className="result__againButton" onClick={this.props.onPlayAgain}>
							PLAY AGAIN
						</span>
					</div>
				) : null}

				<div className="result__wrapper" ref={this.houseWrapper}>
					<h3 className="result__subtitle">THE HOUSE PICKED</h3>
					<div className="result__buttonWrapper result__buttonWrapper--house">
						<div
							className="result__allButtons"
							ref={this.buttonsContainer}
							onAnimationEnd={this.handleCarrouselEnd}>
							{allButtons}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Result;
