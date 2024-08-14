import React, { useContext } from "react";
import Swal from "sweetalert2";
import TaskContext from "../context/TaskContext";

const Task = ({ job: { id, task, isDone } }) => {

  // console.log(useContext(TaskContext));
  const {removeTask, doneTask} = useContext(TaskContext);

  const handleRemoveTask = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
    //   console.log(id);
      if (result.isConfirmed) {
        removeTask(id);
      }
    });
  };

  const handleOnChange = () => {
    doneTask(id);
  };

  return (
    <div className="flex justify-between border border-slate-300 p-3 mb-3 last:mb-0 rounded-md">
      <div className=" flex gap-3 items-center">
        <input type="checkbox" checked={isDone} onChange={handleOnChange}
         className="size-4" />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-red-500 cursor-pointer"
        onClick={handleRemoveTask}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Task;
