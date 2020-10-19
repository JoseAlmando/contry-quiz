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
            <div className="answerFormat text-purple-600 border-purple-600 rounded border p-2 m-6 text-xl font-medium hover:bg-yellow-600 hover:text-white hover:border-transparent">
              <h3 className="mr-4"> {element} </h3> <Answer/>
            </div>
          );
        })}
      </div>
        )
    }
}
