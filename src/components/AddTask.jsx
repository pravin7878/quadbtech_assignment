import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaRegBell } from 'react-icons/fa'
import { IoRepeatOutline } from 'react-icons/io5'

export const AddTask = () => {
    return (
        <div className='flex flex-col px-5 bg-green-200'>
            <div className='flex flex-col w-1/2 m-auto'>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter " required />
            </div>
            <div className='flex justify-between px-6 items-center pb-5'>
                <div className='flex  gap-3'>
                    <FaRegBell />
                    <IoRepeatOutline />
                    <CiCalendar />
                </div>
                <button className='bg-white rounded-md px-2 py-1'>ADD TASK</button>
            </div>
        </div>
    )
}
