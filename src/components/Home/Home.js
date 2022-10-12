import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Fields from '../Fields/Fields';

const Home = () => {
    const fields = useLoaderData();
    return (
        <div className='flex flex-col justify-center'>
            <div className='p-5'>
               s<img className='w-full' src='../../../public/web-design-concept-with-drawings.png' alt='web development'></img>
            </div>
            <div className='justify-center w-2/4 bg-orange-100 grid gap-6 grid-cols-2'>
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