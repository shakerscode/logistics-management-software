import React from 'react';
import hero from '../../assets/images/hero-img.png'

const HeroBanner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-10  items-center md:h-[450px]'>
            <div>
                <h2 className='md:text-5xl text-2xl font-bold py-2'>Stock Goods  Smartly</h2>
                <p className='md:text-lg text-sm'>Manage all your goods operations from one platform to <br /> enhance efficiency and deliver exceptional customer experience at scale.</p>
                <button className='bg-blue-500 md:px-4 md:py-3 px-2 py-2 rounded-lg text-white mt-5 font-semibold'><a href="#booking">Book Your Slot</a></button>
            </div>
            <div>
                <img src={hero} alt="" className='rounded shadow-md'/>
            </div>
            
        </div>
    );
};

export default HeroBanner;