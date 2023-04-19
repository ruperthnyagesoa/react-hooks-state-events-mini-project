import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  const taskList = tasks.map((task)=>(<Task onDeleteTask={onDeleteTask} key={task.text} text={task.text} category={task.category}/>));
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
