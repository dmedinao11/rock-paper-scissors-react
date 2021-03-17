import React, { Component } from "react";
import "./Result.css";
import { buttons } from "../../../global/constants";
import RpsButton from "../../../shared/rps_button/RpsButton";

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allButtons = buttons.map(({ img, buttonClass }) => (
      <RpsButton
        img={img}
        parentClass="rpsButton--result rpsButton--result--houseInner"
        buttonClass={buttonClass}
        styleModifier="--result"
      />
    ));

    const userSelectionObj = buttons[this.props.selectedButton];
    const userSelectionButton = (
      <RpsButton
        img={userSelectionObj.img}
        parentClass="rpsButton--result rpsButton--result--user"
        buttonClass={userSelectionObj.buttonClass}
        styleModifier="--result"
      />
    );
    const houseSelectionObj = buttons[0];
    const houseSelectionButton = (
      <RpsButton
        img={houseSelectionObj.img}
        parentClass="rpsButton--result rpsButton--result--house"
        buttonClass={houseSelectionObj.buttonClass}
        styleModifier="--result"
      />
    );
    const mainAnimationsClasses = "animate__animated animate__fadeInRight";
    // const mainAnimationsClasses = "";
    return (
      <section className={"result " + mainAnimationsClasses}>
        <div className="result__wrapper">
          <h3 className="result__subtitle">YOU PICKED</h3>
          <div className="result__buttonWrapper result__buttonWrapper--user">
            {userSelectionButton}
          </div>
        </div>
        <div className="result__wrapper">
          <h3 className="result__subtitle">THE HOUSE PICKED</h3>
          <div className="result__buttonWrapper result__buttonWrapper--house">
            <div className="result__buttonWrapper--houseInner">
              {allButtons}
            </div>
            {houseSelectionButton}
          </div>
        </div>
      </section>
    );
  }
}

export default Result;
