import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";

const TaskList = () => {
  // console.log(useContext(TaskContext));
  // const { tasks } = useContext(TaskContext);

  const {tasks} = useTaskStore();

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
        />
      ))}
    </div>
  );
};

export default TaskList;
