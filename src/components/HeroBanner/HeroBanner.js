import React from 'react';
import hero from '../../assets/images/hero-img.png'

const HeroBanner = () => {
    return (
        <div className='flex justify-center gap-10 items-center h-[500px]'>
            <div>
                <h2 className='text-5xl font-bold py-2'>Stock Goods  Smartly</h2>
                <p className='text-lg'>Manage all your goods operations from one platform to <br /> enhance efficiency and deliver exceptional customer experience at scale.</p>
                <button className='bg-blue-500 px-4 py-3 rounded-lg text-white mt-5 font-semibold'>Book Your Slot</button>
            </div>
            <div>
                <img src={hero} alt="" className='rounded shadow-md'/>
            </div>
            
        </div>
    );
};

export default HeroBanner;