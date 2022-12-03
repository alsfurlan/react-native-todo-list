import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const onChangeTextHandler = (task) => {
    setTask(task);
  };

  const onPressHandler = () => {
    setTasks((tasks) => [
      ...tasks,
      { id: Date.now(), description: task, done: false },
    ]);
    setTask("");
  };

  const onClickTaskHandler = (task) => {
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
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <TextInput
          style={styles.taskInput}
          value={task}
          onChangeText={onChangeTextHandler}
          placeholder="Digite sua tarefa aqui"
        />
        <Button title="Adicionar" onPress={onPressHandler} />
      </View>
      <View style={styles.taskListContainer}>
        <ScrollView>
          {tasks.map((task) => {
            return (
              <Pressable onPress={() => onClickTaskHandler(task)} key={task.id}>
                <View style={styles.taskItem(task)}>
                  <Text style={styles.taskItemText(task)}>
                    {" "}
                    {task.description}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskContainer: {
    paddingTop: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    flex: 1,
    flexDirection: "row",
  },
  taskItem: (task) => ({
    borderWidth: 1,
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 16,
    marginBottom: 8,
    borderColor: task.done ? "darkseagreen" : "indianred",
    backgroundColor: task.done ? "darkseagreen" : "indianred",
  }),
  taskItemText: (task) => ({
    textDecorationLine: task.done ? "line-through" : "none",
  }),
  taskInput: {
    borderWidth: 1,
    borderColor: "red",
    width: "60%",
    marginEnd: 8,
    padding: 8,
    borderRadius: 10,
  },
  taskListContainer: {
    backgroundColor: "lightyellow",
    flex: 6,
    paddingTop: 16,
  },
});
