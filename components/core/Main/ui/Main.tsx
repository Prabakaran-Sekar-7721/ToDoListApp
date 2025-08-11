import { styles } from "@/components/ui/styleSheet";
import { FlatList, View } from "react-native";
import { FlatListComponent } from "./FlatListComponent";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getTaskList } from "../data/getTaskList";
import { useEffect, useState } from "react";
import { postTaskList } from "../data/postTaskList";
import { storage } from "@/components/storage/mmkv";
import { useMMKVString } from "react-native-mmkv";

export const Main: React.FC = () => {
  const [tasks] = useMMKVString("tasks", storage);
  const [toDoList, setToDoList] = useState<FlatListComponentProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setToDoList(
        tasks
          ? JSON.parse(tasks).sort(
              (a: FlatListComponentProps, b: FlatListComponentProps) => {
                return (
                  new Date(b.dateTimeStamp).getTime() -
                  new Date(a.dateTimeStamp).getTime()
                );
              }
            )
          : []
      );
      // storage.clearAll();
    };
    fetchData();
  }, [tasks]);
  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        renderItem={({ item }) => (
          <FlatListComponent
            id={item?.id}
            title={item?.title}
            dateTimeStamp={item?.dateTimeStamp}
            status={item?.status}
            description={item?.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={true}
      />
    </View>
  );
};
