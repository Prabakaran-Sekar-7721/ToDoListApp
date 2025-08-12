import { storage } from "@/components/storage/mmkv";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import Modal from "react-native-modal";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../../styles/styleSheet";
import { EditModal } from "../Common/EditModal";

export const Header: React.FC<any> = () => {
  const [isAddClicked, setIsAddClicked] = useState<boolean>(false);
  const [tasks, setTasks] = useMMKVString("tasks", storage);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>To Do List</Text>
        <TouchableOpacity
          style={styles.headerIconContainer}
          onPress={() => {
            setIsAddClicked(!isAddClicked);
          }}
        >
          <Ionicons
            name="add-circle-outline"
            size={styles.headerAddIcon.fontSize}
            color={styles.headerAddIcon.color}
          />
        </TouchableOpacity>
      </View>
      <EditModal visible={isAddClicked} setVisible={setIsAddClicked} />
    </>
  );
};
