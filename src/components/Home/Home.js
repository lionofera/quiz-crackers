import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Fields from '../Fields/Fields';

const Home = () => {
    const fields = useLoaderData();
    return (
        <div className=''>
            <div className='p-5'>
            <img className='w-auto' src='../../../public/web-design-concept-with-drawings.jpg' alt='web development'></img>
            </div>
            <div className='box-border w-3/4 bg-slate-200 grid gap-2 grid-cols-2'>
            {
                fields.data.map(field => <Fields
                key={field.id}
                field={field}
                ></Fields>)
            }
        </div>
        </div>
    );
};

export default Home;