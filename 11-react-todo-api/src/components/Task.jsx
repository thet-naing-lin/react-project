import React, { useState } from "react";
import Swal from "sweetalert2";
import { tailspin } from "ldrs";
import { square } from "ldrs";
import toast from "react-hot-toast";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const [taskDelete, setTaskDelete] = useState(false);
  const [taskCheck, setTaskCheck] = useState(false);

  tailspin.register();
  square.register();

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
        setTaskDelete(true);
        removeTask(id);
        toast.error("Remove The Task Successfully")
      }
    });
  };

  const handleOnChange = async () => {
    setTaskCheck(true);
    await doneTask(id, isDone);
    if (isDone) {
      toast.error("Unchecked The Task.")
    }
    else {
      toast.success("Checked The Task.")
    }
    setTaskCheck(false);
  };

  return (
    <div className="flex justify-between border border-slate-300 p-3 mb-3 last:mb-0 rounded-md">
      <div className=" flex gap-3 items-center">
        {taskCheck ? (
          <l-square
            size="13"
            stroke="2"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="1.2"
            color="blue"
          ></l-square>
        ) : (
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleOnChange}
            className="size-4"
          />
        )}
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>

      {taskDelete ? (
        <l-tailspin size="20" stroke="3" speed="0.9" color="red"></l-tailspin>
      ) : (
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
      )}
    </div>
  );
};

export default Task;
