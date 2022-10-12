import React from 'react';

import './Quiz.css';

const Quiz = ({quizItem}) => {
    const {question, id, correctAnswer, options} = quizItem;
    return (
        <div className='border-solid border-3 border-zinc-700 p-3  my-9'>
            <h4 className='text-slate-800'>Question: {question}</h4>
            <div className='border-solid border-2 '>
               {options}
            </div>
        </div>
    );
};

export default Quiz;