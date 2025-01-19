import React, { useEffect, useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaRegBell } from 'react-icons/fa'
import { IoRepeatOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/task'
import LoadingButton from './../utils/LodingButton';

export const AddTask = () => {
    const [isTogal, setisTogal] = useState(false)
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { loading, success } = useSelector(state => state.todos)


    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        deadline: ""
    })

    const [error, seterror] = useState(null)


    const handeleAdd = () => {
        if (taskData.title === "" || taskData.deadline === "") {
            seterror("title and deadline must be require")
        }
        else {
            seterror("")
            dispatch(addTodo({ token, todo: taskData }))
        }
    }

    useEffect(()=>{
if(success){
    setTaskData({
        title: "",
        description: "",
        deadline: ""
})
}
    } , [dispatch , success])
    return (
        <div className='w-full flex flex-col justify-center items-center gap-2 px-5 text-gray-900 bg-green-100'>
            <h3>To Do</h3>
            <div className='flex flex-col w-full md:w-1/2 m-auto'>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Task Title</label>
                <input value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter " required />
            </div>
            <div className="mb-4 w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    value={taskData.description}
                    onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                    className="w-full px-4 border rounded-md"
                    placeholder="Enter task description"
                    rows="2"
                ></textarea>
            </div>

            <div className={`${isTogal ? null : "hidden"} mb-3 w-full md:w-1/2`}>
                <label className="block text-sm font-medium mb-1">Deadline</label>
                <input
                    type="date"
                    value={taskData.deadline}
                    onChange={(e) => setTaskData({ ...taskData, deadline: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md"
                    min={new Date().toISOString().split("T")[0]}
                    required
                />
            </div>
            {error && <p className='text-red-700 pt-1 pb-2'>{error}</p>}
            <div className='w-full md:w-1/2 flex justify-between px-6 items-center pb-5'>
                <div className='flex items-center gap-3'>
                    <FaRegBell className='size-5 hover:scale-125 active:scale-110 cursor-pointer' />
                    <IoRepeatOutline className='size-6 hover:scale-125 active:scale-125 cursor-pointer' />
                    <CiCalendar className='size-6 hover:scale-125 cursor-pointer active:scale-125' onClick={() => setisTogal(!isTogal)} />
                </div>
                <LoadingButton type={"button"} chickHandler={handeleAdd} loading={loading} className='bg-white rounded-md px-2 py-1'>ADD TASK</LoadingButton>
            </div>
        </div>
    )
}
