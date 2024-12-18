import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Task } from "../model/Task";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (index: number) => void;
  onUndo: () => void;
  onRedo: () => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onUndo,
  onRedo,
}) => (
  <View style={styles.container}>
    <Text style={styles.header}>Your Tasks</Text>

    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={
        <Text style={styles.emptyMessage}>
          No tasks available. Add a new task!
        </Text>
      }
      renderItem={({ item, index }) => (
        <View style={styles.taskCard}>
          <View style={styles.taskDetails}>
            <Text style={styles.taskTitle}>{item.title}</Text>

            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskDescription}>{item.clockIn}</Text>
          </View>
          <TouchableOpacity
            onPress={() => onDeleteTask(index)}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    />

    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.undoButton,
          { backgroundColor: tasks.length > 0 ? "#4caf50" : "#dedede" },
        ]}
        onPress={onUndo}
      >
        <Text style={[styles.buttonText]}>Undo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.redoButton} onPress={onRedo}>
        <Text style={styles.buttonText}>Redo</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
    textAlign: "center",
    marginVertical: 20,
  },
  taskCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskDetails: {
    flex: 1,
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  taskDescription: {
    fontSize: 14,
    color: "#555",
  },
  taskCategory: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: "#ff6b6b",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  undoButton: {
    flex: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  undoColorActive: {
    backgroundColor: "#4caf50",
  },
  inActiveColor: {
    backgroundColor: "#dedede",
  },
  redoButton: {
    flex: 1,
    backgroundColor: "#2196f3",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
