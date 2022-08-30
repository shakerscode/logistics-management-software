import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Bookings = () => {
    const [slotsData, stSlotsData] = useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => stSlotsData(data))
    },[])

    const submitBooing = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const slot = e.target.slot.value;
        
        const data = [
            {name: name,
            slot: slot}
        ]
        console.log(data);
    }
    return (
        <div className='flex flex-col justify-center items-center h-[300px] py-3'>
            <h1 className='text-center text-4xl font-bold py-4'>Book Your Slot</h1>
            <div className='w-[40%] text-center bg-white px-3 py-3 rounded-lg'>
                <h2 className='text-lg font-semibold'>Pick Your Slot</h2>
                <form 
                onSubmit={submitBooing}
                className='flex flex-col gap-2 py-2'>
                    <input 
                    type="text" 
                    name='name'
                    required
                    placeholder='Your Company Name' 
                    className='outline-none shadow px-3 py-2'/> 
                    <select name='slot'  className='outline-none shadow px-3 py-2'>
                        <option disabled className='font-semibold rounded-lg cursor-pointer'>Pick Your Slot</option>
                        {
                            slotsData.map(slot =>  
                                <option key={slot.id} value={`${slot.start} - ${slot.end}`}>{`${slot.start} - ${slot.end}`}</option>
                             )
                        } 
                    </select> 
                    <input 
                    type="submit" 
                    className='bg-blue-500 px-4 py-3 rounded-lg w-full text-white mt-5 font-semibold cursor-pointer' 
                    value="Book Slot" /> 
                </form>
            </div>
        </div>
    );
};

export default Bookings;