import React, { Component } from "react";
import axios from "axios";
import "./Card.css";

import Question from "./Question.jsx";
import Answers from "./Answers.jsx";
import Mundo from "../resources/undraw_adventure_4hum1.svg";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    return axios.get(url).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <div className="bg-white p-4 px-6 md:rounded-md lg:rounded-lg">
        <span className="flex justify-end">
          <img src={Mundo} className="absolute mundo" alt="img " />
        </span>
        <div>
          <Question />
          <Answers data={this.state.data} />
        </div>
      </div>
    );
  }
}
