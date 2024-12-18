import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "./modular/picker";

interface TaskInputProps {
  onAddTask: (
    title: string,
    category: "Personal" | "Office",
    description?: string,
    clockIn?: string,
    clockOutEstimation?: string
  ) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<"Personal" | "Office">("Personal");
  const [description, setDescription] = useState<string>("");
  const [isCategoryModalVisible, setCategoryModalVisible] =
    useState<boolean>(false);

  const categories = ["Personal", "Office"];

  const handleAddTask = () => {
    if (!title.trim()) {
      alert("Task title is required.");
      return;
    }

    onAddTask(title, category, description);
    setTitle("");
    setDescription("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Task Title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Category</Text>
        <TouchableOpacity
          style={styles.categorySelector}
          onPress={() => setCategoryModalVisible(true)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>

        <Picker
          visible={isCategoryModalVisible}
          options={categories}
          selectedValue={category}
          onSelect={(value) => setCategory(value as "Personal" | "Office")}
          onClose={() => setCategoryModalVisible(false)}
        />

        <>
          <Text style={styles.label}>Task Description</Text>
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="Enter Task Description"
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.label}>Clock In</Text>
        </>

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  categorySelector: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  categoryText: {
    fontSize: 16,
    color: "#555",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
