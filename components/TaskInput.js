import { useState } from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";

const TaskInput = (props) => {
  const [task, setTask] = useState("");

  const onChangeTextHandler = (task) => {
    setTask(task);
  };

  const onPressHandler = () => {
    props.onAdd(task);
    setTask("");
  };

  return (
    <View style={styles.taskContainer}>
      <TextInput
        style={styles.taskInput}
        value={task}
        onChangeText={onChangeTextHandler}
        placeholder="Digite sua tarefa aqui"
      />
      <Button title="Adicionar" onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    paddingTop: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    flex: 1,
    flexDirection: "row",
  },
  taskInput: {
    borderWidth: 1,
    borderColor: "red",
    width: "60%",
    marginEnd: 8,
    padding: 8,
    borderRadius: 10,
  },
});

export default TaskInput;
