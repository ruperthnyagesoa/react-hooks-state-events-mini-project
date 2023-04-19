import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks]=useState(TASKS);
  const [category,setCategory]=useState("All");
  const visibleTasks = tasks.filter((task)=> category === "All" || task.category === category);

  function handleAddTask(newTask){
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTaskText){
    setTasks(tasks.filter((task)=> task.text !== deletedTaskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory = {category} onSelectCategory = {setCategory} />
      <div className="tasks">
        <NewTaskForm onTaskFormSubmit = {handleAddTask} categories = {CATEGORIES.filter((cat)=> cat !== "All")} />
        <TaskList onDeleteTask={handleDeleteTask} tasks = {visibleTasks}/>
      </div> 
    </div>
  );
}

export default App;
