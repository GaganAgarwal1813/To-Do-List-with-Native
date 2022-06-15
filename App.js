import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Tasks from "./components/Tasks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTasks = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Heading */}

      <View style={styles.taskWrapper}>
        <Text style={styles.header}>Today's Tasks</Text>

        <View>
          {/* Tasks will be shown Here */}
          {/* Delete task on click */}

          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  deleteTask(index);
                }}
              >
                <Tasks text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleTasks()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },

  addWrapper: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
