import React, { useState } from "react";
import { FaRegStar, FaStar } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/actions/task";

export const TaskCard = ({ task,  onChangePriority }) => {
  const [priority, setPriority] = useState(task?.priority);
const dispatch = useDispatch()
const {token} = useSelector(state=>state.auth)
console.log(priority);

  const handlePriorityChange = () => {
    const newPriority =
      priority === "low" ? "medium" : priority === "medium" ? "high" : "low";
    setPriority(newPriority);
    onChangePriority(task._id, newPriority);
  };

  return (
    <div className="bg-white flex justify-between items-center shadow-md rounded-lg p-5 mb-4 border">
      <div >
        <span className='flex gap-2 items-center'>
          <input type="checkbox" className='p-3 cursor-pointer text-md' />
          <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>

          <p className="text-sm text-gray-500 ">
            Deadline:{" "}
            <span className="text-gray-800 font-semibold">
              {new Date(task.deadline).toLocaleDateString()}
            </span>
          </p>
        </span>

        <span className='pl-5 flex gap-2 item-center '>
          {/* Task Priority */}
          <p className="text-sm text-gray-500 ">
            Priority:{" "}
            <span
              className={`font-semibold ${priority === "high"
                ? "text-red-600"
                : priority === "medium"
                  ? "text-yellow-500"
                  : "text-green-600"
                }`}
            >
              {priority}
            </span>
          </p>
          {/* Task Progress */}
          <p className="text-sm text-gray-500 ">
            Progress:{" "}
            <span
              className={`font-semibold ${task?.progress === "pending"
                ? "text-yellow-500"
                : "text-green-600"
                }`}
            >
              {task?.progress}
            </span>
          </p>
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        {/* Delete Button */}
        <button
          onClick={() => dispatch(deleteTodo({ token , id : task._id}))}
        >
          <MdDeleteForever className='size-5 md:size-8'/>
        </button>

        {/* Change Priority Button */}
        <button
          onClick={handlePriorityChange}
        >
          {<FaRegStar className='size-5 md:size-8'/> ||
            <FaStar className='size-5 md:size-8'/>}
        </button>
      </div>
    </div>
  );
};
