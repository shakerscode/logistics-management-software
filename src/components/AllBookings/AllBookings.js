import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
import {FiRefreshCcw} from 'react-icons/fi'

const AllBookings = () => {
    const url = 'https://logistic-server.vercel.app/bookings';
    const { isLoading, error, data, refetch } = useQuery(['bookings', url], () =>
        fetch(url).then(res => res.json()
        )
    )
    if(isLoading){
        return <Loader/>
    }
    if(error){
        return toast.error(error.message)
    } 
    const handleRefetch = () =>{
        refetch()
    }
    
    return (
        <section className='py-10'>
            <div className='text-center md:w-[60%] h-fit-content mx-auto'>
                <h1 className='text-3xl text-blue-500 font-bold py-5'>All Bookings</h1>
                <div className='flex md:justify-end justify-center p-4'>
                <button 
                onClick={handleRefetch}
                className='flex items-center gap-3 bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:border hover:border-blue-500 transition-all ease-in duration-100'>Refresh <FiRefreshCcw/></button> 
                </div>
                <table className='text-center w-full bg-white p-4 mb-8  shadow-md border-collapse rounded-lg'>
                    {
                        data?.length === 0 
                        ?
                        <tbody>
                            <p className='text-center text-gray-400'>No order done yet</p>
                        </tbody>
                        : 
                    <tbody>
                    <tr className='table-r'>
                        <th className='table-h'>Company Name</th>
                        <th className='table-h'>Data</th>
                        <th className='table-h'>Slot/Time</th>
                    </tr>
                    { 
                        data?.map(d =>
                            <tr className='table-r' 
                            key={d?._id}>
                                <td className='table-d'>{d?.name}</td>
                                <td className='table-d'>{d?.date}</td>
                                <td className='table-d'>{d?.slot}</td>
                            </tr>
                        ) 
                    }
                    </tbody>
                    }
                </table>

            </div>
        </section>
    );
};

export default AllBookings;