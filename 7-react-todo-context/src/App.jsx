import { useState } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";

const App = () => {
  return (
    <TaskProvider>
      <div className="p-10">
        <Header />
        <CreateTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
