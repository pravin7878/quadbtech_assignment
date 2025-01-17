import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export const TaskCard = ({task}) => {
  return (
    <div className='px-2 py-3 flex justify-between border-2 rounded-md' >
        <div className='flex gap-3 items-center'>
             <input type="checkbox" className='p-3' />
            <h3>{task?.title}</h3>
        </div>
       <button>
              <FaRegStar />
              <FaStar />
       </button>
    </div>
  )
}
