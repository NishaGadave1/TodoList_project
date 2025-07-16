import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css";
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
        <div className="mainDiv">
           <input placeholder="Add-a-task" value={newTodo} onChange={handleChange}
           className="inputCls"/>
           <br></br>
           <button onClick={AddTask}> Add task</button>
           <hr></hr>
           <h2> TODO LIST </h2>
           <ul>
            { todo.map((myTodo) => 
             (<li key={myTodo.id}>
              <span> {myTodo.task}</span>
              &nbsp;
              <button onClick={()=>handleDelete(myTodo.id)} style={{backgroundColor : "lightblue" , color: "black"}}> Delete </button>
              &nbsp;
              <button onClick={()=>uppercaseOne(myTodo.id)} style={{backgroundColor : "lightblue" , color: "black"}}> Uppercase One </button>
              <hr></hr>
            </li>)
            )
            }
           </ul>
           <button onClick={uppercaseAll} style={{backgroundColor : "lightgray" , color: "black"}}> Uppercase All</button>
        </div>   
        </>
    )
}