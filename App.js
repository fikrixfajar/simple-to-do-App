import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";


export default function App() {
    const [task, setTask] = useState();

    const handleTask = () => {
      console.log(task);
    }



  return (
    <View style={styles.container}>
      {/* Today's Task*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {/* This is the task will go */}
          <Task text={"Task Pertama Bray"} />
          <Task text={"Ini Coba task kedua"} />
          <Task text={"Mengerjakan skripsi"} />
        </View>
      </View>

      {/* Write a task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.WriteTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask} />
        <TouchableOpacity>
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
    backgroundColor: "#ebeaed",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },

  WriteTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250    
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1
  },
  addText: {
    fontSize: 35,
    opacity:.5
    // backgroundColor: 
  },
});
