import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo()
{
let[todo, setTodo] = useState([{task : "demo task" , id : uuidv4()}]);
let[newTodo, setNewTodo] = useState("");

  function AddTask()
  {
    setTodo([...todo ,{ task : newTodo , id : uuidv4()}]);
    setNewTodo("")
  }

  function handleChange(event)
  {
   setNewTodo(event.target.value);
  }

  function handleDelete(id)
  {
    setTodo(todo.filter((myTodo) => 
      myTodo.id != id))
  }

  function uppercaseAll()
  {
    setTodo(todo.map((myTodo) => {
      // console.log(myTodo);
      return{
        ...myTodo,
        task : myTodo.task.toUpperCase()
      }
    }))
    // console.log(newArr)
  }

  function uppercaseOne(id)
  {
    setTodo(todo.map((myTodo) => {
      // console.log(myTodo);
      if(myTodo.id == id)
      {
      return{
        ...myTodo,
        task : myTodo.task.toUpperCase()
      }}else{
        return myTodo
      }
    }))
  }

    return(
        <>
           <input placeholder="Add-a-task" value={newTodo} onChange={handleChange}/>
           <br></br>
           <button onClick={AddTask}> Add task</button>
           <hr></hr>
           <h3> To-do list </h3>
           <ul>
            { todo.map((myTodo) => 
             (<li key={myTodo.id}>
              <span> {myTodo.task}</span>
              <button onClick={()=>handleDelete(myTodo.id)}> Delete </button>
              <button onClick={()=>uppercaseOne(myTodo.id)}> Uppercase One </button>

            </li>)
            )
            }
           </ul>
           <button onClick={uppercaseAll}> Uppercase All</button>
        </>
    )
}