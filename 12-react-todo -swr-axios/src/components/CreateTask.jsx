import React, { useState } from "react";
import { newtonsCradle } from 'ldrs'

const CreateTask = ({ addTask, addingTask }) => {
  newtonsCradle.register()

  const [job, setJob] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    // console.log("u click");
    if (job.trim()) {
      const newTask = {
        // id: Date.now(),
        task: job,
        isDone: false,
      };
      addTask(newTask);
      setJob("");
      // toast.success("Add Task Successfully.")
    } else {
      alert("Need to fill in the text box.");
    }
  };

  return (
    <div className="font-body flex mb-8">
      <input
        type="text"
        className="flex-grow border rounded-l-md bg-slate-200 p-2 disabled:opacity-45"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
        disabled={addingTask}
      />
      <button
        className="rounded-r-md bg-slate-300 px-4 py-2"
        onClick={handleAddTaskBtn}
      >
        {addingTask ? (
          <l-newtons-cradle
          size="50"
          speed="1.4" 
          color="black" 
        ></l-newtons-cradle>
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;
