import { useState } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  // const [tasks, setTask] = useState([]);

  const [addingTask, setAddingTask] = useState(false);

  // console.log(import.meta.env.VITE_BASE_URL);

  const viteUrl = import.meta.env.VITE_BASE_URL;

  const { data, error, isLoading } = useSWR(
    // "http://localhost:5100/tasks",
    `${viteUrl}/tasks`,
    fetcher
  );

  // for revalidation
  const { mutate } = useSWRConfig();

  const toDoApi = axios.create({
    baseURL: `${viteUrl}/tasks`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const addTask = async (newTask) => {
    setAddingTask(true);
    // isLoading == true;

    // server changes
    // const resp = await fetch("http://localhost:5100/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });

    // const data = await resp.json();
    // console.log(data);

    // await axios.post("http://localhost:5100/tasks", newTask, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await toDoApi.post("/", newTask);

    // revalidation
    mutate(`${viteUrl}/tasks`);

    // setTask([...tasks, newTask]);
    setAddingTask(false);
    // isLoading == false;
  };

  const removeTask = async (id) => {
    // const resp = await fetch(`http://localhost:5100/tasks/${id}`, {
    //   method: "DELETE",
    // });

    // await axios.delete(`http://localhost:5100/tasks/${id}`);

    await toDoApi.delete(`/${id}`);

    // revalidation
    mutate(`${viteUrl}/tasks`);

    // setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    // const resp = await fetch(`http://localhost:5100/tasks/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ isDone: !currentState }),
    // });

    // await axios.patch(
    //   `http://localhost:5100/tasks/${id}`,
    //   {
    //     isDone: !currentState,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    await toDoApi.patch(`/${id}`, {
      isDone: !currentState,
    });

    // revalidation
    mutate(`${viteUrl}/tasks`);

    // setTask(
    //   tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    // );
  };

  return (
    <div className="p-10">
      <Header />
      <CreateTask addTask={addTask} addingTask={addingTask} />

      {/* {isLoading ? (
        <SkeletonLoader />
      ) : (
        <TaskList tasks={data} removeTask={removeTask} doneTask={doneTask} />
      )} */}

      <TaskList
        tasks={data}
        removeTask={removeTask}
        doneTask={doneTask}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
