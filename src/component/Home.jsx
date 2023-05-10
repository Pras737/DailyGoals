import React,{useEffect, useState} from 'react'
import Task from './Task';



const Home=()=>{

    const initialArray=localStorage.getItem("tasks")
    ?JSON.parse(localStorage.getItem("tasks")):[];

    const [tasks,setTask]=useState(initialArray);
    const [tittle,setTittle]=useState("");
    const [description,setDescription]=useState("");
    // console.log(tittle,description)
    // console.log(tasks)

    const submitHandler=(e)=>{
        e.preventDefault();
        setTask([...tasks,{tittle,description}])
        // console.log(tasks)
        setTittle("");
        setDescription("");
        

    };

    const deleteTask=(index)=>{
        const filteredArr=tasks.filter((val,i)=>{
            return i!==index;
        });
        console.log(filteredArr);
        setTask(filteredArr);
        
    };
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks])
    return (
        <div className="container">
            <h1>DAILY GOALS</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={tittle} 
            onChange={(e)=>setTittle(e.target.value)}/>
            <textarea placeholder='Description'
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}
            ></textarea>
            <button type='submit'>ADD</button>
        </form>

        {tasks.map((item,index)=>(
        <Task key={index} 
        tittle={item.tittle} 
        description={item.description}
        deleteTask={deleteTask}
        index={index}
        />
        ))}
    </div>
    );
};

export default Home;