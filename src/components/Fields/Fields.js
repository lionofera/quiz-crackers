import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fields.css';

const Fields = ({field}) => {
    const {id, name, logo, total} = field;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/fields/${id}`);
    }

    return (
        <div className='m-3'>
            <img src={logo} alt=''></img>
            <div className=''>
                <p className=''><span className='font-bold mr-6'>{name}</span><span className='text-sm'>No. of quiz: {total}</span></p>
                <button className='btn' onClick={handleNavigate}>Participate</button>
            </div>

        </div>
    );
};

export default Fields;