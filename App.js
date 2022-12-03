import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Tasks from "./components/Tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Tasks />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
