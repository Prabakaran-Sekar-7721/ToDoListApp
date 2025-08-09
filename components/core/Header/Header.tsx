import { View, Text,useWindowDimensions } from "react-native";
import {styles} from '../../ui/styleSheet'

export const Header: React.FC<any> = () => {
  return <View style={styles.header}>
    <Text style={styles.headerTitle}>To Do List</Text>
  </View>;
};
