import axios from "axios";
import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { addTask, toggleTaskDone, fetchTasks } from "./TaskService";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const t = await fetchTasks();
    setTasks(t);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  const onAddHandler = async (task) => {
    const newTask = { description: task, done: false };
    const persistTask = await addTask(newTask);
    setTasks((tasks) => [...tasks, persistTask]);
  };

  const onFinishHandler = (task) => {
    toggleTaskDone(task);
    loadTasks();
  };

  return (
    <>
      <TaskInput onAdd={onAddHandler} />
      <TaskList tasks={tasks} onFinish={onFinishHandler} />
    </>
  );
};

export default Tasks;
