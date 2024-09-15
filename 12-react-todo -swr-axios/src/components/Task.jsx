import React, { useState } from "react";
import Swal from "sweetalert2";
import { ping } from "ldrs";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";
import { square } from "ldrs";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const [deletingTask, setDeletingTask] = useState(false);
  const [checkTask, setCheckTask] = useState(false);

  ping.register();
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
        setDeletingTask(true);
        removeTask(id);
        toast.error("Remove The Task Successfully");
      }
    });
  };

  const handleOnChange = async () => {
    setCheckTask(true);
    await doneTask(id, isDone);

    if (isDone) {
      toast.error("Unchecked The Task.");
    } else {
      toast.success("Checked The Task.");
    }
    
    setCheckTask(false);
  };

  return (
    <div className="flex justify-between border border-slate-300 p-3 mb-3 last:mb-0 rounded-md">
      <div className=" flex gap-3 items-center">
        {checkTask ? (
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

      {deletingTask ? (
        <l-ping size="25" speed="2" color="red"></l-ping>
      ) : (
        <ImCross
          onClick={handleRemoveTask}
          className="size my-auto text-red-500 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Task;
