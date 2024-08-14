import React from "react";
import Task from "./Task";

const TaskList = ( {tasks, removeTask, doneTask}) => {
  
  return (
    <div className=" font-body">
      <div className="flex justify-between font-bold text-xl mb-5">
        <h3>Task List</h3>
        <p>Done({tasks.filter(el => el.isDone).length}/{tasks.length})</p>
      </div>
      {tasks.map((el) => (
        <Task key={el.id} job={el} removeTask={removeTask} doneTask={doneTask}  />
      ))}
    </div>
  );
};

export default TaskList;
