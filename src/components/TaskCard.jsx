import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export const TaskCard = ({task}) => {
  return (
    <div className='px-2 py-3 flex justify-between border-2' >
        <div className='flex gap-3'>
              <input
                  checked={true}
                  type="checkbox"
                  className="appearance-none w-6 h-6 border-2 border-gray-300 rounded checked:bg-green-400 checked:border-green-500 cursor-pointer"
              />



            <h3>{task?.title}</h3>
        </div>
       <button>
              <FaRegStar />
              <FaStar />
       </button>
    </div>
  )
}
