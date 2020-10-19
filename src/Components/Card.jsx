import React, {Component} from 'react';
import './Card.css'
import Question from './Question.jsx';
import Answers from './Answers.jsx';

export default class Card extends Component {
    render(){
        return (
            <div className="bg-white p-4 px-6 md:rounded-md lg:rounded-lg">
                <Question />
                <Answers />
            </div>
        )
    }
}