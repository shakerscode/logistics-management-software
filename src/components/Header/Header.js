import React from 'react';

const Header = () => {
    return (
        <header className='flex justify-between items-center px-12 py-3 '>
            <div>
                <h1 className='text-3xl font-bold text-blue-500'>Transport Inc.</h1>
            </div>
            <nav>
                <ul className='flex justify-center items-center gap-12 text-lg font-semibold'>
                    <li className='cursor-pointer'>Products</li>
                    <li className='cursor-pointer'>Solutions</li>
                    <li className='cursor-pointer'>Feature</li>
                    <li className='cursor-pointer'>Pricing</li>
                </ul>
            </nav>
            <div className='flex gap-3 text-lg font-semibold'>
                <button className='bg-sky-100 px-4 py-3 rounded-lg text-blue-500'>Login</button>
                <button className='bg-blue-500 px-4 py-3 rounded-lg text-white'>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;