import { storage } from "@/components/storage/mmkv";
import { styles } from "@/components/styles/styleSheet";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useMMKVString } from "react-native-mmkv";
import { FlatListComponent } from "./FlatListComponent";

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
