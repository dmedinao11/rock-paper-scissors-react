//Core
import React, { Component, createRef } from "react";

//Assets
import "./Result.css";

//Constants
import { buttons, gameWinnerMap } from "../../../global/constants";

//Components
import RpsButton from "../../../shared/rps_button/RpsButton";

class Result extends Component {
	constructor(props) {
		super(props);
		this.randomButtons = this.getRandomButtons();

		this.userWrapper = createRef();
		this.houseWrapper = createRef();
		this.buttonsContainer = createRef();

		this.state = { showResult: false, resultText: "" };

		this.handleCarrouselEnd = this.handleCarrouselEnd.bind(this);
		this.handleSelectionEnd = this.handleSelectionEnd.bind(this);
		this.getRandomButtons = this.getRandomButtons.bind(this);
		this.calculateWinner = this.calculateWinner.bind(this);
	}

	//Lifecycle
	componentWillUnmount() {
		this.props.hideOverflow();
	}

	componentDidMount() {
		setTimeout(() => this.props.showOverflow(), 600);
	}

	//Handlers
	handleCarrouselEnd() {
		const buttons = Array.from(this.buttonsContainer.current.children);
		const houseButton = buttons.pop();
		buttons.forEach((item) => (item.style.visibility = "hidden"));
		houseButton.classList.add("rpsButton--result--house");
		houseButton.addEventListener("animationend", this.handleSelectionEnd);
	}

	handleSelectionEnd() {
		const inMobileView = window.matchMedia("(max-width: 590px)").matches;

		if (!inMobileView) {
			const translate = 7;
			this.userWrapper.current.style.transform = `translateX(-${translate}%)`;
			this.houseWrapper.current.style.transform = `translateX(${translate}%)`;
		}

		const { incrementScore, text, win, lose } = this.calculateWinner();
		this.setState({ showResult: true, resultText: text });

		const winnerContainer = win
			? this.userWrapper.current.getElementsByClassName("result__buttonWrapper")
			: lose
			? this.houseWrapper.current.getElementsByClassName("result__buttonWrapper")
			: null;

		if (winnerContainer)
			winnerContainer[0].classList.add("result__buttonWrapper--winner");

		if (incrementScore) this.props.incrementScore();
	}

	//Utilities
	getRandomButtons() {
		const randomButtons = buttons
			.map((button) => ({ ...button, random: Math.random() }))
			.sort((button1, button2) => button1.random - button2.random);

		this.houseSelection = randomButtons[randomButtons.length - 1].id;
		return randomButtons;
	}

	calculateWinner() {
		if (this.props.selectedButton == this.houseSelection)
			return { text: "DRAW", incrementScore: false, win: false, lose: false };
		else if (gameWinnerMap[this.props.selectedButton] == this.houseSelection)
			return { text: "YOU WIN", incrementScore: true, win: true, lose: false };
		else return { text: "YOU LOSE", incrementScore: false, win: false, lose: true };
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
					<div className={"result__buttonWrapper result__buttonWrapper--user"}>
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
