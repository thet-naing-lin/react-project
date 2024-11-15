import { Profiler, useState } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      task: "Finish project report",
      isDone: true,
    },
    {
      id: 2,
      task: "Prepare presentation slides",
      isDone: false,
    },
    {
      id: 3,
      task: "Schedule meeting with client",
      isDone: true,
    },
    {
      id: 4,
      task: "Review team progress",
      isDone: false,
    },
    {
      id: 5,
      task: "Submit expense report",
      isDone: false,
    },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    // console.log({
    //   id,
    //   phase,
    //   actualDuration,
    //   baseDuration,
    //   startTime,
    //   commitTime,
    //   interactions,
    // });
  };

  console.log("app components rendered");

  return (
    <div className="p-10">
      <Profiler id="app" onRender={onRender}>
        <Header />
        <CreateTask addTask={addTask} />
        <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
      </Profiler>
    </div>
  );
};

export default App;
