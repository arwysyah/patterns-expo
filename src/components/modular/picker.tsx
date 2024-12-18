import React from "react";
import { Modal, View, FlatList, TouchableOpacity, Text, Button, StyleSheet } from "react-native";

interface CustomPickerProps {
  visible: boolean;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  onClose: () => void;
}

export const Picker: React.FC<CustomPickerProps> = ({ visible, options, selectedValue, onSelect, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item,index }) => (
              <TouchableOpacity
                style={Number(index) !== item.length ? styles.modalItemBottom:styles.modalItemTop}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "50%",
  },
  modalItemBottom: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    
  },
  modalItemTop: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    
  },
  modalItemText: {
    fontSize: 16,
    color: "#333",
  },
});
