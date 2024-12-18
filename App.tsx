import React, { useState } from "react";
import {  StyleSheet, SafeAreaView } from "react-native";
import { TaskViewModel } from "./src/viewmodel/TaskViewModel";
import { TaskInput } from "./src/components/TaskInput";
import { TaskList } from "./src/components/TaskList";
import { Task } from "./src/model/Task";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const taskViewModel = new TaskViewModel();

  const addTask = (title: string, category: "Personal" | "Office", description?: string,) => {
    taskViewModel.addTask(title, category, description);
    setTasks(taskViewModel.getTasks());
  };

  const deleteTask = (index: number) => {
    taskViewModel.deleteTask(index);
    setTasks(taskViewModel.getTasks());
  };

  const undo = () => {
    taskViewModel.undo();
    setTasks(taskViewModel.getTasks());
  };

  const redo = () => {
    taskViewModel.redo();
    setTasks(taskViewModel.getTasks());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUndo={undo} onRedo={redo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default App;