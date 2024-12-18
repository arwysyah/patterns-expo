import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Keyboard } from "react-native";
import { TaskViewModel } from "./src/viewmodel/TaskViewModel";
import { TaskInput } from "./src/components/TaskInput";
import { TaskList } from "./src/components/TaskList";
import { Task } from "./src/model/Task";
import { TaskFactory } from "./src/core/TaskFactory";

const taskViewModel = new TaskViewModel();

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    taskViewModel.subscribe(setTasks);
  }, []);

  const addTask = (title: string, category: "Personal" | "Office",description:string) => {
    const task = TaskFactory.createTask(title, category,description);
    taskViewModel.addTask(task);
    Keyboard.dismiss();
  };

  const deleteTask = (index: number) => {
    taskViewModel.deleteTask(index);
  };

  const undo = () => {
    taskViewModel.undo();
  };

  const redo = () => {
    taskViewModel.redo();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUndo={undo}
        onRedo={redo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default App;
