import { useState } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";
import Counter from "./components/Counter";

const App = () => {
  return (
    // <TaskProvider>
    <div className="p-10">
      <Header />
      <CreateTask />
      <TaskList />
    </div>
    // </TaskProvider>
    // <Counter />
  );
};

export default App;
