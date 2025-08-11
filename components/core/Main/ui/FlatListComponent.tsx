import { storage } from "@/components/storage/mmkv";
import { styles } from "@/components/ui/styleSheet";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getRelativeTime } from "@/constants/TimeStamp";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import { Checkbox } from "react-native-paper";
import { postTaskList } from "../data/postTaskList";

export const FlatListComponent: React.FC<FlatListComponentProps> = ({
  id,
  title,
  dateTimeStamp,
  status,
  description,
}) => {
  const [tasks, setTasks] = useMMKVString("tasks", storage);
  const [currentStatus, setCurrentStatus] = useState<boolean>(status);
  const changeCurrentStatus = async (status: boolean) => {
    await postTaskList(
      { id, title, dateTimeStamp, status, description },
      setTasks
    );
  };
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{title}</Text>
        <Text style={styles.textSecondary}>{dateTimeStamp}</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={currentStatus ? "checked" : "unchecked"}
          onPress={() => {
            setCurrentStatus(!currentStatus);
            changeCurrentStatus(!currentStatus);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
