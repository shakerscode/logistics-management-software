import React from 'react';
import { HeroBanner, Bookings, AllBookings } from '../export'; 

const MainContainer = () => {
    return (
        <main className='md:px-12 px-5 bg-gray-50'> 
                <HeroBanner></HeroBanner> 
                <Bookings></Bookings>
                <AllBookings></AllBookings>
        </main>
    );
};

export default MainContainer;