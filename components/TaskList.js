import { View, ScrollView, Pressable, Text, StyleSheet } from "react-native";

const TaskList = (props) => {
  return (
    <View style={styles.taskListContainer}>
      <ScrollView>
        {props.tasks.map((task) => {
          return (
            <Pressable onPress={() => props.onFinish(task)} key={task.id}>
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
  );
};

const styles = StyleSheet.create({
  taskListContainer: {
    backgroundColor: "lightyellow",
    flex: 6,
    paddingTop: 16,
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
});

export default TaskList;
