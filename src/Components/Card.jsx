import React, { Component } from "react";
import "./Card.css";
import Question from "./Question.jsx";
import Answers from "./Answers.jsx";
import Mundo from "../resources/undraw_adventure_4hum1.svg";
//import { Data } from "../api/index.js";

export default class Card extends Component {
  render() {
    return (
      <div className="bg-white p-4 px-6 md:rounded-md lg:rounded-lg">
        <span className="flex justify-end">
          <img src={Mundo} className="absolute mundo" alt="img " />
        </span>
        <div>
          <Question />
          <Answers />
        </div>
      </div>
    );
  }
}
