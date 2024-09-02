import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import SkeletonLoader from "./components/skeletonLoader";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [tasks, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const addTask = async (newTask) => {
    // console.log(newTask);

    setSending(true);

    const resp = await fetch("http://localhost:5100/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await resp.json();
    // console.log(data);

    // setTask([...tasks, data]);

    // revalidation
    fetchTasks();
    setSending(false);
  };

  const removeTask = async (id) => {
    const resp = await fetch(`http://localhost:5100/tasks/${id}`, {
      method: "DELETE",
    });

    // setTask(tasks.filter((task) => task.id !== id));
    fetchTasks();
  };

  const doneTask = async (id, currentState) => {
    const resp = await fetch(`http://localhost:5100/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState }),
    });

    const data = await resp.json();
    // console.log(data);

    // setTask(tasks.map((el) => (el.id === id ? data : el)));
    fetchTasks();
  };

  const fetchTasks = async () => {
    setTaskLoading(true);
    const resp = await fetch("http://localhost:5100/tasks");
    const data = await resp.json();
    setTask(data);
    setTaskLoading(false);
  };

  useEffect(() => {
    // console.log("using useEffect react hook");
    fetchTasks();
  }, []);

  return (
    <div className="p-10">
      <Header />
      <CreateTask addTask={addTask} sending={sending} />
      <TaskList
        tasks={tasks}
        sending={sending}
        removeTask={removeTask}
        doneTask={doneTask}
      />

      {taskLoading && <SkeletonLoader />}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
