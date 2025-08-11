import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../ui/styleSheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { postTaskList } from "../Main/data/postTaskList";
import { formatTimestamp, getTimestamp } from "@/constants/TimeStamp";
import { useMMKVString } from "react-native-mmkv";
import { storage } from "@/components/storage/mmkv";
import { Button, TextInput } from "react-native-paper";

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
      <Modal
        isVisible={isAddClicked}
        onSwipeComplete={() => setIsAddClicked(!isAddClicked)}
        onBackdropPress={() => setIsAddClicked(!isAddClicked)}
        useNativeDriverForBackdrop={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalSubContainer}>
            <TextInput
              label="Task"
              value={title}
              onChangeText={(text) => setTitle(text)}
              mode="outlined"
              textAlignVertical="top"
              style={{ height: 50, width: "100%" }}
            />
          </View>
          <View style={styles.modalSubContainer}>
            <Text>{'Add a new task'}</Text>
          </View>
          <View style={styles.modalSubContainer}>
            <TextInput
              label="Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
              mode="outlined"
              multiline={true}
              textAlignVertical="top"
              style={{ height: 100, width: "100%" }}
            />
          </View>
          <View style={styles.modalSubContainer}>
            <Button
              icon="close"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              {'Close'}
            </Button>
            <Button
              icon="content-save"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              {'Save'}
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};
