import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const onAddHandler = (task) => {
    setTasks((tasks) => [
      ...tasks,
      { id: Date.now(), description: task, done: false },
    ]);
  };

  const onFinishHandler = (task) => {
    setTasks((currentTasks) =>
      currentTasks.map((t) => {
        if (t.id === task.id) {
          t.done = !t.done;
        }
        return t;
      })
    );
  };

  return (
    <>
      <TaskInput onAdd={onAddHandler} />
      <TaskList tasks={tasks} onFinish={onFinishHandler} />
    </>
  );
};

export default Tasks;
