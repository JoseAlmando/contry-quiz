import React, { Component } from "react";
import "./Answers.css";
import Answer from "./Answer.jsx";

export default class Card extends Component {
  render() {
    const answerArray = ["A", "B", "C", "D"];
    return (
      <div>
        {answerArray.map((element) => {
          return (
            <div className="answerFormat">
              <h3> {element} - </h3> <Answer />
            </div>
          );
        })}
      </div>
    );
  }
}
