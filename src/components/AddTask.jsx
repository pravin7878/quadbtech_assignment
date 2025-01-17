import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaRegBell } from 'react-icons/fa'
import { IoRepeatOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/task'

export const AddTask = () => {
const [isTogal, setisTogal] = useState(false)
const dispatch = useDispatch()
const {token} = useSelector(state=>state.auth)
const [taskData, setTaskData] = useState({
    title : "",
    description : "",
    deadline : ""
})

const [error, seterror] = useState(null)


    const handeleAdd = ()=>{
        if (taskData.title === ""  || taskData.deadline === "" ){
         seterror("title and deadline must be require")
        }
        else{
            seterror("")
            dispatch(addTodo({token , todo : taskData}))
        }
    }

    return (
        <div className='flex flex-col px-5 bg-green-100'>
            <h3>To Do</h3>
            <div className='flex flex-col w-1/2 m-auto'>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                <input value={taskData.title} onChange={(e) => setTaskData({...taskData , title : e.target.value})} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter " required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    value={taskData.description}
                    onChange={(e) => setTaskData({...taskData , description : e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Enter task description"
                    rows="3"
                    required
                ></textarea>
            </div>

            <div className={`${isTogal ? null : "hidden"} mb-3`}>
                <label className="block text-sm font-medium mb-1">Deadline</label>
                <input
                    type="date"
                    value={taskData.deadline}
                    onChange={(e) => setTaskData({...taskData , deadline : e.target.value})}
                    className="w-full px-4 py-2 border rounded-md"
                    min={new Date().toISOString().split("T")[0]} 
                    required
                />
            </div>
           {error && <p className='text-red-700 pt-1 pb-2'>{error}</p>}
            <div className='flex justify-between px-6 items-center pb-5'>
                <div className='flex  gap-3'>
                    <FaRegBell className='cursor-pointer'/>
                    <IoRepeatOutline className='cursor-pointer' />
                    <CiCalendar className='cursor-pointer' onClick={()=>setisTogal(!isTogal)}/>
                </div>
                <button onClick={handeleAdd} className='bg-white rounded-md px-2 py-1'>ADD TASK</button>
            </div>
        </div>
    )
}
