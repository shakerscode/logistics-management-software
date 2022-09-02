import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-900 h-[50px] py-12'>
            <p className='text-center  text-gray-100'>&copy; {new Date().getFullYear()} All right reserved by - Shaker Ahamed</p> 
        </footer>
    );
};

export default Footer;