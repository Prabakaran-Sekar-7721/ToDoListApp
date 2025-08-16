import { storage } from "@/components/storage/mmkv";
import { styles } from "@/components/styles/styleSheet";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import { Checkbox, Icon } from "react-native-paper";
import { postTaskList } from "../data/postTaskList";
import { EditModal } from "../../Common/EditModal";
import { formatTimestamp } from "@/constants/TimeStamp";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { deleteTaskList } from "../data/deleteTaskList";

export const FlatListComponent: React.FC<FlatListComponentProps> = ({
  id,
  title,
  dateTimeStamp,
  status,
  description,
}) => {
  const [tasks, setTasks] = useMMKVString("tasks", storage);
  const [currentStatus, setCurrentStatus] = useState<boolean>(status);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const swipeRef = useRef<any>(null);
  const changeCurrentStatus = async (status: boolean) => {
    await postTaskList(
      { id, title, dateTimeStamp, status, description },
      setTasks
    );
  };

  const RightAction = (
    prog: SharedValue<number>,
    drag: SharedValue<number>
  ) => {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 50 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          onPress={() => {
            swipeRef.current?.close();
            deleteTaskList(
              { id, title, dateTimeStamp, status, description },
              setTasks
            );
          }}
        >
          <View
            style={{
              width: 50,
              height: 70,
              justifyContent: "center",
            }}
          >
            <Text>
              <Icon source="delete" color={"red"} size={25} />
            </Text>
          </View>
        </TouchableOpacity>
      </Reanimated.View>
    );
  };

  return (
    <>
      <GestureHandlerRootView>
        <Swipeable
          ref={swipeRef}
          friction={2}
          enableTrackpadTwoFingerGesture
          rightThreshold={50}
          renderRightActions={RightAction}
        >
          <TouchableOpacity
            style={styles.card}
            onPress={() => setOpenEditModal(true)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.textPrimary}>{title}</Text>
              <Text style={styles.textSecondary}>
                {formatTimestamp(dateTimeStamp)}
              </Text>
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
        </Swipeable>
      </GestureHandlerRootView>
      {openEditModal && (
        <EditModal
          visible={openEditModal}
          setVisible={setOpenEditModal}
          data={{
            id,
            title,
            dateTimeStamp,
            status: currentStatus,
            description,
          }}
          mode="edit"
        />
      )}
    </>
  );
};
