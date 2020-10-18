import React, {Component} from 'react';
import './Card.css'
import Question from './Question.jsx';
import Answers from './Answers.jsx';

export default class Card extends Component {

    render(){
        return (
            <div>
                <Question />
                <Answers />
            </div>
        )
    }
}