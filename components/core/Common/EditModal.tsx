import { styles } from "@/components/styles/styleSheet";
import { View } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { DateTimePickerComponent } from "./DatePicker";
import { EditModalProps, FlatListComponentProps } from "@/constants/Interfaces";
import Modal from "react-native-modal";
import { SetStateAction, useEffect, useState } from "react";
import { postTaskList } from "../Main/data/postTaskList";
import { useMMKVString } from "react-native-mmkv";
import { storage } from "@/components/storage/mmkv";

export const EditModal: React.FC<EditModalProps> = ({
  visible,
  setVisible,
  data,
}) => {
  const [tasks, setTasks] = useMMKVString("tasks", storage);
  const [title, setTitle] = useState<string>(data?.title || "");
  const [description, setDescription] = useState<string>(
    data?.description || ""
  );
  const [date, setDate] = useState<Date>(
    data?.dateTimeStamp ? new Date(data.dateTimeStamp) : new Date()
  );
  const [currentData, setCurrentData] = useState<FlatListComponentProps>(
    data ?? ({} as FlatListComponentProps)
  );
  const [isTaskEmpty, setIsTaskEmpty] = useState<boolean>(false);

  useEffect(() => {
    setCurrentData({
      id: data?.id || Date.now(),
      title,
      dateTimeStamp: date.toISOString(),
      status: data?.status || true,
      description,
    });
  }, [title, description, date]);

  return (
    <Modal isVisible={visible} useNativeDriverForBackdrop={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          <TextInput
            label="Task"
            value={title}
            onChangeText={(text) => setTitle(text)}
            mode="outlined"
            textAlignVertical="top"
            style={{ height: 50, width: "100%" }}
            outlineColor={isTaskEmpty ? "red" : undefined}
          />
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
          <DateTimePickerComponent date={date} setDate={setDate} />
        </View>
        <View style={styles.ModalButtonContainer}>
          <Button
            icon="close"
            mode="contained"
            onPress={() => setVisible(!visible)}
          >
            {"Close"}
          </Button>
          <Button
            icon="content-save"
            mode="contained"
            onPress={() => {
              console.log("Save Pressed");
              if (title.trim() === "") {
                setIsTaskEmpty(true);
                return;
              } else {
                setIsTaskEmpty(false);
                postTaskList(currentData,setTasks);
                setVisible(!visible);
              }
            }}
          >
            {"Save"}
          </Button>
        </View>
      </View>
      <Snackbar
        visible={isTaskEmpty}
        onDismiss={() => setIsTaskEmpty(false)}
        style={{ backgroundColor: "red" }}
        duration={1500}
      >
        Task cannot be empty
      </Snackbar>
    </Modal>
  );
};
