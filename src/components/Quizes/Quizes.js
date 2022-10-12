import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    return (
        <div className='m-6'>
            {
                quizes.data.questions.map(quizItem => <Quiz
                key={quizItem.id}
                quizItem={quizItem}
                ></Quiz>)
            }
        </div>
    );
};

export default Quizes;