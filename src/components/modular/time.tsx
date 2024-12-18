import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";

interface TimeSelectorProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (selectedTime: string) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  isVisible,
  onClose,
  onConfirm,
}) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const hours = Array.from({ length: 24 }, (_, i) =>
    i < 9 ? `0${i + 1}:00` : `${i + 1}:00`
  );

  const renderTimeButton = ({ item: hour }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.clockButton,
        selectedTime === hour && styles.selectedClockButton,
      ]}
      onPress={() => setSelectedTime(hour)}
    >
      <Text style={styles.clockButtonText}>{hour}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Time</Text>
          <FlatList
            data={hours}
            renderItem={renderTimeButton}
            keyExtractor={(item) => item}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Confirm"
              onPress={() => {
                if (selectedTime) {
                  onConfirm(selectedTime);
                  onClose();
                }
              }}
              color="#4CAF50"
            />
            <Button title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  clockButton: {
    backgroundColor: "#ddd",
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width:80
  },
  selectedClockButton: {
    backgroundColor: "#4CAF50",
  },
  clockButtonText: {
    fontSize: 14,
    color: "#fff",
  },
  flatListContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
