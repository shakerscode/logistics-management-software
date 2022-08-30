import React from 'react';
import { HeroBanner, Bookings } from '../export'; 

const MainContainer = () => {
    return (
        <main className='px-12 bg-gray-50'> 
                <HeroBanner></HeroBanner> 
                <Bookings></Bookings>
        </main>
    );
};

export default MainContainer;