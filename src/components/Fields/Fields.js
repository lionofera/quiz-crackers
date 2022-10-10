import React from 'react';
import './Fields.css';

const Fields = ({field}) => {
    const {name, logo, total} = field;
    return (
        <div className='m-3'>
            <img src={logo} alt=''></img>
            <div className=''>
                <p className=''><span className='font-bold mr-6'>{name}</span><span className='text-sm'>No. of quiz: {total}</span></p>
                <button className='btn'>Participate</button>
            </div>

        </div>
    );
};

export default Fields;