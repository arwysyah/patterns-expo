import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface ModularInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: React.FC<ModularInputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});
