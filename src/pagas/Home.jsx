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
    <div>
      {items?.length === 0  ?
    <div>No task found</div> 
    :
        items?.map((task,idx)=>{
          console.log(task)
          return <TaskCard task={task} />
        }) 
  
    }
    </div>
  </>
  )
} 

export default Home
