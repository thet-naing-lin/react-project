import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, doneTask, sending }) => {
  return (
    <div className=" font-body">
      <div className="flex justify-between font-bold text-xl mb-5">
        <h3>Task List</h3>
        <p>
          Done({tasks.filter((el) => el.isDone).length}/{tasks.length})
        </p>
      </div>

      {tasks.map((el) => (
        <Task
          key={el.id}
          job={el}
          sending={sending}
          removeTask={removeTask}
          doneTask={doneTask}
        />
      ))}

      {sending && (
        <div className=" animate-pulse">
          <div className="flex justify-between border border-slate-300 p-3 mb-3 last:mb-0 rounded-md">
            <div className="flex justify-between w-full">
              <div className="flex w-72 gap-3">
                <div className="bg-gray-300 w-5 h-5 rounded-sm"></div>
                <div className="bg-gray-300 w-full h-5 rounded"></div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-500 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
