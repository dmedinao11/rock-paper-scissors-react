import React, { Component } from "react";
import "./RulesModal.css";

import Modal from "react-modal";
import closeIcon from "../../../images/icon-close.svg";
import rulesImg from "../../../images/image-rules.svg";

class RulesModal extends Component {
	constructor(props) {
		super(props);
		Modal.setAppElement("#root");
	}

	render() {
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
				borderRadius: "10px"
			}
		};

		return (
			<Modal isOpen={this.props.isOpen} style={modalStyles}>
				<div className="modal">
					<section className="modal__header">
						<h2 className="modal__title">RULES</h2>
						<a onClick={this.props.onCloseClick} className="modal__button">
							<img className="modal__closeImg" src={closeIcon}></img>
						</a>
					</section>
					<img className="modal__rulesImg" src={rulesImg}></img>
				</div>
			</Modal>
		);
	}
}

export default RulesModal;
