import React, { useState } from 'react';
import './WordList.css';

const WordList = (props) => {

    const words = props.words;

    return (
        <div className="wordList-container">
            { (words.length > 0) ? words.map(word => {
                return <p key={word}>{word}</p>
            }) : <p>No Results.</p>}
        </div>
    );
    
};

export default WordList;