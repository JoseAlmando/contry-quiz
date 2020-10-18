import React, {Component} from 'react';
import './Answers.css';
import Answer from './Answer.jsx';

export default class Card extends Component {

    
    render(){
        const  answerArray = ['A', 'B', 'C', 'D'];
        return (
            <div>
                {
                answerArray.forEach(answer => {
                    {answer} <Answer />
                })
                }
            </div>
        )
    }
}