import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav className='text-2xl font-bold p-3 flex justify-between bg-orange-100'>
        <h3 className='text-fuchsia-700'>Web Development Test</h3>
        <div className='text-violet-600'>
        <Link className='m-3' to='/'>Home</Link>
        <Link className='m-3'  to='/chart'>Chart</Link>
        <Link className='m-3' to='/blogs'>Blog</Link>
        </div>
       </nav>
    );
};

export default Header;