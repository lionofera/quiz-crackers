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
        <div className='m-6 border-solid border-2 border-orange-700 p-3'>
            <img className='w-42' src={logo} alt=''></img>
            <div className=''>
                <p className='flex flex-row justify-between'><span className='font-bold'>{name}</span><span className='text-sm'>No. of quiz: {total}</span></p>
                <button className='btn' onClick={handleNavigate}>Participate</button>
            </div>

        </div>
    );
};

export default Fields;