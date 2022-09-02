import React, { useState } from 'react';
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='flex  justify-between  items-center px-5 md:px-12 py-3 bg-white relative'>
            <div>
                <h1 className='md:text-3xl text-2xl font-bold text-blue-500'>Transport Inc.</h1>
            </div> 
            {/*  mobile menu */}
            {
                open && 
                <nav className=' '>
                <ul className='bg-transparent bg-blue-600 text-center absolute top-14 left-0 right-0 py-5 flex flex-col gap-3 text-white text-lg font-semibold transition-all ease-in duration-1000'>
                    <li className='cursor-pointer'>Products</li>
                    <li className='cursor-pointer'>Solutions</li>
                    <li className='cursor-pointer'>Feature</li>
                    <li className='cursor-pointer'>Pricing</li>
                </ul>
            </nav>
            }

            <nav >
                <ul className='md:flex hidden justify-center items-center gap-12 text-lg font-semibold '>
                    <li className='cursor-pointer'>Products</li>
                    <li className='cursor-pointer'>Solutions</li>
                    <li className='cursor-pointer'>Feature</li>
                    <li className='cursor-pointer'>Pricing</li>
                </ul>
            </nav>
            <div className='flex gap-3 md:text-lg font-semibold'> 
                {open 
                ? 
                <AiFillCloseCircle
                onClick={() => setOpen(false)}
                className='md:hidden text-2xl' 
                /> 
                :
                <HiOutlineMenuAlt3 
                onClick={() => setOpen(!open)}
                className='md:hidden text-2xl transition-all ease-in duration-1000'/>}
                <button className='bg-sky-100 md:px-4 py-3 rounded-lg text-blue-500 md:block hidden'>Login</button>
                <button className='bg-blue-500 md:px-4 py-3 rounded-lg text-white md:block hidden'>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;