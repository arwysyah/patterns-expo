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
import { TimeSelector } from "./modular/time";
import { Picker } from "./modular/picker";

interface TaskInputProps {
  onAddTask: (
    title: string,
    category: "Personal" | "Office",
    description: string,
    clockIn?: string,
    clockOutEstimation?: string
  ) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<"Personal" | "Office">("Personal");
  const [description, setDescription] = useState<string>("");
  const [clockIn, setClockIn] = useState<string>("");
  const [isClockInModalVisible, setClockInModalVisible] =
    useState<boolean>(false);
  const [isCategoryModalVisible, setCategoryModalVisible] =
    useState<boolean>(false);

  const categories = ["Personal", "Office"];
  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      alert("Task title is required.");
      return;
    }
    onAddTask(title, category, description, clockIn);
    setTitle("");
    setDescription("");
    setClockIn("");
  };

  const handleClockInConfirm = (selectedTime: string) => {
    setClockIn(selectedTime);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Title"
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

        <Text style={styles.label}>Description</Text>
        <TextInput
          multiline={true}
          style={[styles.input,{ minHeight: 80,}]}
          placeholder="Enter Task Description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Estimated Hours</Text>
        <TouchableOpacity
          style={styles.clockSelector}
          onPress={() => setClockInModalVisible(true)}
        >
          <Text style={styles.clockText}>{clockIn || "Select Time"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>

        <TimeSelector
          isVisible={isClockInModalVisible}
          onClose={() => setClockInModalVisible(false)}
          onConfirm={handleClockInConfirm}
        />
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
  clockSelector: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  clockText: {
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
