import { useEffect } from "react"
import { AddTask } from "../components/AddTask"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../redux/actions/task"

const Home = () => {
const dispatch = useDispatch()
const {token} = useSelector(state=>state.auth)
const todo = useSelector(state=>state.todos)
  console.log(todo);

  useEffect(()=>{
    dispatch(fetchTodos(token))
  },[])
  return (<>
    <div>
       <AddTask/>
    </div>
    <div>
      
    </div>
  </>
  )
} 

export default Home
