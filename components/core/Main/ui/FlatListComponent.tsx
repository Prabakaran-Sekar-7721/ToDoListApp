import { styles } from "@/components/ui/styleSheet";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getRelativeTime } from "@/constants/TimeStamp";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from 'react-native-paper';

export const FlatListComponent: React.FC<FlatListComponentProps> = ({
  id,
  title,
  dateTimeStamp,
  status,
  description,
}) => {
  const [currentStatus,setCurrentStatus] = useState<boolean>(status);
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{title}</Text>
        <Text style={styles.textSecondary}>
          {getRelativeTime(dateTimeStamp)}
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android status={currentStatus?"checked":"unchecked"} onPress={()=>{setCurrentStatus(!currentStatus);}}/>
      </View>
    </TouchableOpacity>
  );
};
