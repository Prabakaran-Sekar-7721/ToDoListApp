import { styles } from "@/components/ui/styleSheet";
import { FlatList, View } from "react-native";
import { FlatListComponent } from "./FlatListComponent";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getTaskList } from "../data/getTaskList";
import { useEffect, useState } from "react";
import { postTaskList } from "../data/postTaskList";
import { storage } from "@/components/storage/mmkv";

export const Main: React.FC = () => {
  const [toDoList, setToDoList] = useState<FlatListComponentProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getTaskList();
      // storage.clearAll();
      setToDoList(tasks);
    };
    fetchData();
  }, []);
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
      />
    </View>
  );
};
