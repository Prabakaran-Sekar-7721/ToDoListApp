import { styles } from "@/components/ui/styleSheet";
import { FlatList, View } from "react-native";
import { FlatListComponent } from "./FlatListComponent";
import { FlatListComponentProps } from "@/constants/Interfaces";

export const Main: React.FC = () => {
  const toDoList: Array<FlatListComponentProps> = [
    {
      title: `Need to drink water at morning 6'o clock`,
      dateTimeStamp: Date().toString(),
      status:true
    },
    {
      title: `Need to do home work`,
      dateTimeStamp: Date().toString(),
      status:false
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        renderItem={({ item }) => (
          <FlatListComponent
            title={item?.title}
            dateTimeStamp={item?.dateTimeStamp}
            status={item?.status}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
