import React, { useState } from "react";

const CreateTask = ({ addTask}) => {
  const [job, setJob] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setJob(event.target.value);
  }

  const handleAddTaskBtn = () => {
    // console.log("u click");
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    }
    addTask(newTask);
    setJob("");
  }

  return (
    <div className="font-body flex mb-8">
      <input
        type="text"
        className="flex-grow border rounded-l-md bg-slate-200 p-2"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
      />
      <button className="rounded-r-md bg-slate-300 px-4 py-2" onClick={handleAddTaskBtn}>Add Task</button>
    </div>
  );
};

export default CreateTask;
