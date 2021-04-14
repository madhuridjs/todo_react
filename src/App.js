import React,{useState} from 'react';
import './App.css';


function App(){
  const [task, setTask] = useState('');
  const[taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
    console.log(task);
    
  };

  const deleteTodo = (event, id) => {
    event.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const addTodo = () => {
    
    if(task !== ""){
      const taskDetails = {
        id: Math.floor(Math.random()*1000),
        value: task,
      }
      setTaskList([...taskList, taskDetails]);
      document.querySelector(".input").value="";
    }
  };
  console.log("taskList", taskList);
  return(
    <div>
      <h1>Todo</h1>
      <div>
        <input type= "text"
          name="text"
          id= "text"   
          className= "input"
          onChange={(event) => handleChange(event)} />
        <button className= "submit" onClick = {addTodo}>Submit</button>
        {taskList !== [] ? (
          <ul>
           {taskList.map((t) => (
              <li>{t.value}
              <button className= "delete" onClick= {(event) => deleteTodo(event, t.id)}>delete</button></li>
           ))}
           
          </ul>
        ): null}
      </div>  
    </div>
   
  )
}
export default App;