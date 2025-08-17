import { storage } from "@/components/storage/mmkv";
import { styles } from "@/components/styles/styleSheet";
import { EditModalProps, FlatListComponentProps } from "@/constants/Interfaces";
import { useEffect, useState } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import Modal from "react-native-modal";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { postTaskList } from "../Main/data/postTaskList";
import { DateTimePickerComponent } from "./DatePicker";
import { colors } from "@/components/styles/colors";
import { deleteTaskList } from "../Main/data/deleteTaskList";

export const EditModal: React.FC<EditModalProps> = ({
  visible,
  setVisible,
  data,
  mode = "add",
}) => {
  const [tasks, setTasks] = useMMKVString("tasks", storage);
  const [title, setTitle] = useState<string>(data?.title || "");
  const [isEditable, setIsEditable] = useState<boolean>(mode === "add");
  const [description, setDescription] = useState<string>(
    data?.description || ""
  );
  const [date, setDate] = useState<Date>(
    data?.dateTimeStamp ? new Date(data.dateTimeStamp) : new Date()
  );
  const [currentData, setCurrentData] = useState<FlatListComponentProps>(
    data || ({} as FlatListComponentProps)
  );
  const [isTaskEmpty, setIsTaskEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      setTitle(data?.title || "");
      setDescription(data?.description || "");
      setDate(data?.dateTimeStamp ? new Date(data.dateTimeStamp) : new Date());
    }
  }, [visible]);

  useEffect(() => {
    setCurrentData({
      id: data?.id || Date.now(),
      title,
      dateTimeStamp: date.toISOString(),
      status: data?.status || false,
      description,
    });
  }, [title, description, date]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <Modal
      isVisible={visible}
      useNativeDriverForBackdrop={true}
      onBackdropPress={() => dismissKeyboard()}
      onTouchCancel={dismissKeyboard}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.modalContainer}>
          <View style={[styles.modalSubContainer,{flexDirection: "column", alignItems: "flex-start"}]}>
            <TextInput
              label="Task"
              value={title}
              onChangeText={(text) => setTitle(text)}
              editable={isEditable}
              mode="outlined"
              textAlignVertical="top"
              style={{ height: 50, width: "100%" }}
              activeOutlineColor={colors.accentColor}
              outlineColor={isTaskEmpty ? "red" : undefined}
              maxLength={30}
            />
            <Text style={styles.inputNotesText}>
              {"Note: Task name must be less than 30 characters"}
            </Text>
          </View>
          <View style={styles.modalSubContainer}>
            <TextInput
              label="Description"
              value={description}
              editable={isEditable}
              onChangeText={(text) => setDescription(text)}
              mode="outlined"
              multiline={true}
              textAlignVertical="top"
              style={{ height: 100, width: "100%" }}
              activeOutlineColor={colors.accentColor}
            />
          </View>
          <View style={styles.modalSubContainer}>
            <View>
              <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                {"Date and Time"}
              </Text>
              <DateTimePickerComponent
                date={date}
                setDate={setDate}
                isActive={isEditable}
                dismissKeyboard={dismissKeyboard}
              />
            </View>
          </View>
          <View style={styles.ModalButtonContainer}>
            <Button
              icon="close"
              mode="contained"
              onPress={() => setVisible(!visible)}
            >
              {"Close"}
            </Button>
            {mode === "edit" && (
              <Button
                icon="delete"
                mode="contained"
                onPress={() => {
                  setIsTaskEmpty(false);
                  deleteTaskList(currentData, setTasks);
                  setVisible(!visible);
                }}
              >
                {"Delete"}
              </Button>
            )}
            {mode === "edit" && !isEditable && (
              <Button
                icon="note-edit"
                mode="contained"
                onPress={() => {
                  setIsEditable(true);
                }}
              >
                {"Edit"}
              </Button>
            )}
            {(mode === "add" || isEditable) && (
              <Button
                icon="content-save"
                mode="contained"
                onPress={() => {
                  if (title.trim() === "") {
                    setIsTaskEmpty(true);
                    return;
                  } else {
                    setIsTaskEmpty(false);
                    postTaskList(currentData, setTasks);
                    setVisible(!visible);
                  }
                }}
              >
                {"Save"}
              </Button>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
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
