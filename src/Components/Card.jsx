import React, {Component} from 'react';
import './Card.css'
import Question from './Question.jsx';
import Answers from './Answers.jsx';

export default class Card extends Component {
    render(){
        return (
            <div className="bg-gray-100 text-4xl">
                <Question />
                <Answers />
            </div>
        )
    }
}