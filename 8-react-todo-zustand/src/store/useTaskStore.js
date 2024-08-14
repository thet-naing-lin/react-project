import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
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
  ],
  addTask: (newTask) => {set((state) => ({ tasks: [...state.tasks, newTask]}))},
  removeTask: (taskId) => {
    set((state) => ({ tasks: state.tasks.filter((el) => el.id !== taskId) }));
  },
  doneTask: (taskId) => {
    set((state) => ({ tasks: state.tasks.map( (el) => (el.id === taskId ? {...el, isDone : !el.isDone} : el))}))
  },
}));

export default useTaskStore;
