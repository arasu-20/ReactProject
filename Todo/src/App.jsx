import { useEffect, useState } from "react"
import classes from './styles.module.css';
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);

  async function fetchListOfTodo(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result =  await apiResponse.json();
      if(result?.todos && result?.todos?.length>0){
        setLoading(false);
        setTodoList(result?.todos)
      }
      else{
        setTodoList([]);
        setLoading(false);
      }
    }catch(e){
      console.log(e);
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details =  await apiResponse.json();
      if(details){
        setTodoDetails(details);
        setOpenDialog(true);
      }
      else{
        setTodoDetails(null);
        setOpenDialog(false)
      }
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchListOfTodo();
  },[])

  return (
    <div className={classes.mainClass}>
      <h1 className={classes.headerTitle}>TODO by Material UI</h1>
      {loading ? <h3>Loading...</h3> : 
      <div className={classes.gridMain}>
        {
          todoList && todoList.length > 0 ?
          todoList.map(todoItem=> <TodoItem
            key={todoItem.id}
            fetchDetailsOfCurrentTodo = {fetchDetailsOfCurrentTodo}
            todos= {todoItem}/>) : null
        }
      </div>}
      <TodoDetails 
      setOpenDialog={setOpenDialog}
      todoDetails={todoDetails}
      openDialog={openDialog}
      setTodoDetails={setTodoDetails}/>
    </div>
  )
}

export default App
