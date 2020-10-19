import React, {Component} from 'react';
import './Question.css';

export default class Card extends Component {

    render(){
        return (
            <div className="py-4 pt-10">
               <h2 className="text-2xl text-blue-900 font-semibold">
                   What is the smallest capital city in the world?
               </h2>
            </div>
        )
    }
}