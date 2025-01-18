import { useEffect } from "react"
import { AddTask } from "../components/AddTask"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../redux/actions/task"
import { TaskCard } from "../components/TaskCard"

const Home = () => {
const dispatch = useDispatch()
const {token} = useSelector(state=>state.auth)
const {items , loading , error} = useSelector(state=>state.todos)
  console.log(useSelector(state => state));

  useEffect(()=>{
    dispatch(fetchTodos(token))
  },[])
  return (<>
    <div>
       <AddTask/>
    </div>
    <div className="px-2 py-3 flex flex-col justify-between rounded-md m-5">
      {items?.length === 0  ?
    <div>
          <h3 className="p-4">No task found</h3>
    </div> 
    :
    <div className="flex flex-col gap-3">
          {items?.map((task, idx) => {
            console.log(task)
            return <TaskCard key={idx} task={task} />
          })}
    </div>
    }
    </div>
  </>
  )
} 

export default Home
