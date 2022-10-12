import React from 'react';

import './Quiz.css';

const Quiz = ({quizItem}) => {
    const {question, id, correctAnswer, options} = quizItem;
    console.log(options, correctAnswer);
    const handleAlert = (options , correctAnswer) =>{
        
        correctAnswer === options ? alert('wrong answer') :alert('wrong answer')
    }
    return (
        <div className='p-3  my-9'>
            <h4 className='text-slate-800'>Question: {question}</h4>
            <div className='border-solid border-2 border-amber-100 rounded grid grid-cols-2 gap-3'>
               <button onClick={() => handleAlert(options,correctAnswer)} className='border-solid border-1 rounded bg-amber-200 p-2'>{options[0]}</button>
               <button onClick={() => handleAlert(options, correctAnswer)} className='border-solid border-1 rounded bg-amber-200 p-2'>{options[1]}</button>
               <button onClick={() => handleAlert(options, correctAnswer)} className='border-solid border-1 rounded bg-amber-200 p-2'>{options[2]}</button>
               <button onClick={() => handleAlert(options, correctAnswer)} className='border-solid border-1 rounded bg-amber-200 p-2'>{options[3]}</button>

            </div>
        </div>
    );
};

export default Quiz;