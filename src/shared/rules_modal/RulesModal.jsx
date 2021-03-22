//Core
import React, { Component } from "react";
import Modal from "react-modal";
import "./RulesModal.css";

//Assets
import closeIcon from "../../../images/icon-close.svg";
import rulesImg from "../../../images/image-rules.svg";

class RulesModal extends Component {
	constructor(props) {
		super(props);
		Modal.setAppElement("#root");
	}

	render() {
		const inMobileView = window.matchMedia("(max-width: 590px)").matches;

		const modalStyles = {
			overlay: {
				backgroundColor: "rgba(0,0,0,0.5)",
				display: "flex"
			},
			content: {
				position: "unset",
				margin: "auto",
				overflow: "hidden",
				padding: "2.2rem",
				borderRadius: inMobileView ? "0" : "10px",
				width: inMobileView ? "100%" : "auto",
				height: inMobileView ? "100%" : "auto"
			}
		};

		return (
			<Modal isOpen={this.props.isOpen} style={modalStyles}>
				<div className="modal">
					<h2 className="modal__title">RULES</h2>
					<img className="modal__rulesImg" src={rulesImg}></img>
					<a onClick={this.props.onCloseClick} className="modal__button">
						<img className="modal__closeImg" src={closeIcon}></img>
					</a>
				</div>
			</Modal>
		);
	}
}

export default RulesModal;
