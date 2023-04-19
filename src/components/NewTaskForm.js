import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text,setText]=useState("");
  const [category,setCategory]=useState("Code");

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({text, category});
    setText("");
    setCategory("Code");
  }

  return (
    <form onSubmit ={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange = {(event)=> setText(event.target.value)} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange = {(event)=> setCategory(event.target.value)} value ={category} name="category">
          {categories.map((cat)=>(<option key ={cat} >{cat}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
