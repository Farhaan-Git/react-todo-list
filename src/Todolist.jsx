import { useState } from "react";
import "./todolist.css";

function Todolist(){

    const [tasks,setTasks] = useState(["eat my breakfast","do homework","feed my cat","water the plants"]);
    const [newTask,setNewTask] = useState();

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        setTasks((t)=> [...tasks,newTask]);
        setNewTask("");
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i !== index));
    }
    function moveUp(index){
        if(index>0){ 
            const newArr = [...tasks];
            [newArr[index],newArr[index-1]] = [newArr[index-1],newArr[index]];
            setTasks(newArr);
        }
    }

    function moveDown(index){
        if(index<tasks.length-1){ 
            const newArr = [...tasks];
            [newArr[index],newArr[index+1]] = [newArr[index+1],newArr[index]];
            setTasks(newArr);
        }
    }


    return(
        <div className="todolist-entity">
            <h2>To-Do-List</h2>

            <input type="text" value={newTask} onChange= {handleInputChange}className="input-newTask" />
            <button className="addTask-button" onClick={addTask}>Add Task</button>

            <ol>
                {
                    tasks.map((Element,index) => <li key={index} className="list-element"><span>{Element}</span>
                    <button onClick={()=>deleteTask(index)}>
                        Delete
                    </button>
                    <button onClick={()=>moveUp(index)}>
                        👆
                    </button>
                    <button onClick={()=>moveDown(index)}>
                        👇
                    </button>
                    
                    </li>)
                }
            </ol>

        </div>
    )
}

export default Todolist