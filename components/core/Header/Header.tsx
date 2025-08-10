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

export const Header: React.FC<any> = () => {
  const [isAddClicked, setIsAddClicked] = useState<boolean>(false);
  useEffect(() => {
    console.log(isAddClicked);
  }, [isAddClicked]);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>To Do List</Text>
        <TouchableOpacity
          style={styles.headerIconContainer}
          onPress={() => {setIsAddClicked(!isAddClicked);postTaskList({id: Date.now(), title: "New Task", description: "Task Description", dateTimeStamp: formatTimestamp(getTimestamp()), status: true})}}
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
        useNativeDriverForBackdrop = {true}
      >
        <View style={{ flex: 1 }}></View>
      </Modal>
    </>
  );
};
