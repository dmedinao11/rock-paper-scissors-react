import React from "react";
import "./Selection.css";
import triangle from "../../../../images/bg-triangle.svg";

export const Selection = (props) => {
  return (
    <section className="selection">
      <img src={triangle} className="selection__bg" alt="triangle"></img>
    </section>
  );
};
