import axios from "axios";

export const fetchTasks = async () => {
  const { data } = await axios.get("http://10.0.2.2:3000/tasks");
  return data;
};

export const addTask = async (task) => {
  const { data } = await axios.post("http://10.0.2.2:3000/tasks", task);
  return data;
};

export const toggleTaskDone = async ({ id, done }) => {
  const { data } = await axios.patch(`http://10.0.2.2:3000/tasks/${id}`, {
    done: !done,
  });
  return data;
};
