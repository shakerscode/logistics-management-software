import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from "react-hot-toast";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const Bookings = () => {
    const [slotsData, stSlotsData] = useState([]) 
    const [date, setDate] = useState(new Date());   
 
    useEffect(() => {
        fetch('http://localhost:5000/slots')
            .then(res => res.json())
            .then(data => stSlotsData(data))
    }, [])

    const submitBooing = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const slot = e.target.slot.value;
        const orderDate = format(date, 'PP')
        console.log(orderDate);

        const data =
        {
            name: name,
            slot: slot, 
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Booking Successful')
                } else {
                    toast.error(`This slot is already booked by ${data?.booking?.name}`)
                }
            })
    }
    return (
        <div className='h-[]'>
            <h1 className='text-center text-4xl font-bold py-4'>Book Your Slot</h1>
            <div className='flex flex-col justify-center items-center'>  
            <div className='flex flex-col justify-center items-center py-5 w-[40%] my-5 text-center bg-white px-3 rounded-lg shadow'> 
                <h2 className='text-center text-xl font-bold py-4'>Select A Date For Booking</h2>
                <DayPicker
                    mode="single" 
                    disableNavigation 
                    selected={date}
                    onSelect={setDate} 
                />  
                <div className=' w-full px-3 text-center bg-white rounded-lg'>
                    <h2 className='text-lg font-semibold'>Available slots for { date && format(date, 'PP')}</h2>
                    <form
                        onSubmit={submitBooing}
                        className='flex flex-col gap-3 py-2'>
                        <input
                            type="text"
                            name='name'
                            required
                            placeholder='Enter your company name'
                            className='outline-none shadow-md px-3 py-3' />
                        <select name='slot' className='outline-none shadow-md px-3 py-3'>
                            <option disabled className='font-semibold rounded-lg cursor-pointer'>Pick Your Slot</option>
                            {
                                slotsData.map(slot =>
                                    <option key={slot._id} value={`${slot.start} - ${slot.end}`}>{`${slot.start} - ${slot.end}`}</option>
                                )
                            }
                        </select>
                        <p className='text-md'>Available slots for booking:  {slotsData?.length}</p>
                        <input
                            type="submit"
                            className='bg-blue-500 px-4 py-3 rounded-lg w-full text-white mt-5 font-semibold cursor-pointer'
                            value="Book Slot" />
                    </form>
                </div> 
            </div>
            </div>
        </div>
    );
};

export default Bookings;