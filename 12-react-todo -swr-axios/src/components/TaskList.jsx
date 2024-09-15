import React from "react";
import Task from "./Task";
import SkeletonLoader from "./SkeletonLoader";

const TaskList = ({ tasks, removeTask, doneTask, isLoading, addingTask }) => {
  // console.log(tasks);
  return (
    <div className=" font-body">
      <div className="flex justify-between font-bold text-xl mb-5">
        <h3>Task List</h3>
        <p>
          {isLoading
            ? ""
            : `Done(${tasks.filter((el) => el.isDone).length}/${tasks.length})`}
        </p>
      </div>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        tasks.map((el) => (
          <Task
            key={el.id}
            job={el}
            removeTask={removeTask}
            doneTask={doneTask}
          />
        ))
      )}

      {addingTask && <SkeletonLoader />}
    </div>
  );
};

export default TaskList;
