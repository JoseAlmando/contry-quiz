
import React, {Component} from 'react';
import './Answers.css';
import Answer from "./Answer.jsx";

export default class Card extends Component {

    
    render(){
        const  answerArray = ['A', 'B', 'C', 'D'];
        return (
             <div>
        {answerArray.map((element) => {
          return (
            <div className="answerFormat text-purple-600 border-purple-600 rounded border p-2 m-6 text-xl font-medium hover:bg-yellow-600 hover:text-white hover:border-transparent cursor-pointer flex justify-between">
              <div className="flex">  <h3 className="ml-2 mr-8"> {element} </h3> <Answer/> </div>
              <div className="flex items-center">
              <i className="material-icons-outlined">check_circle</i>
              <i className="material-icons-outlined">highlight_off</i></div>
            </div>
          );
        })}
      </div>
        )
    }
}
