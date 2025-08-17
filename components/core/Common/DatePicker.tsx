// DateTimePickerExample.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  Platform,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";
import RNDateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { DateTimePickerProps } from "@/constants/Interfaces";
import { formatDay, formatTime } from "@/constants/TimeStamp";
import { colors } from "@/components/styles/colors";
import { styles } from "@/components/styles/styleSheet";
import Modal from "react-native-modal";

export const DateTimePickerComponent: React.FC<DateTimePickerProps> = ({
  date,
  setDate,
  isActive,
  dismissKeyboard
}) => {
  // State with proper type annotation
  const [mode, setMode] = useState<"datetime" | "date" | "time">("datetime");
  const [day, setDay] = useState<Date>(isActive?new Date():date);
  const [time, setTime] = useState<Date>(isActive?new Date():date);

  // Handler with TypeScript types
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
  };

  useEffect(()=>{
    const combinedDate = new Date(day);
    combinedDate.setHours(time.getHours());
    combinedDate.setMinutes(time.getMinutes());
    setDate(combinedDate);
  },[day,time])

  const showDatePicker = () => {
    dismissKeyboard();
    DateTimePickerAndroid.open({
      value: date,
      mode: "date",
      minimumDate: new Date(),
      onChange: (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
          setDay(selectedDate);
        }
      },
    });
  };

  const showTimePicker = () => {
    dismissKeyboard();
    DateTimePickerAndroid.open({
      value: date,
      mode: "time",
      minimumDate: new Date(),
      onChange: (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
          setTime(selectedDate);
        }
      },
    });
  };

  return Platform.OS === "ios" ? (
    <RNDateTimePicker
      value={date}
      mode={mode}
      onChange={onChange}
      disabled={!isActive}
      minimumDate={new Date()}
    />
  ) : (
    <View style={styles.dateTimePickerAndroidContainer}>
      <TouchableOpacity
        style={isActive ? styles.dateTimeComponent : styles.dateTimeInactiveComponent}
        onPress={showDatePicker}
        disabled={!isActive}
      >
        <Text
          style={{ color: colors.textPrimary, fontSize: 16, fontWeight: 500 }}
        >
          {formatDay(day)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={isActive ? styles.dateTimeComponent : styles.dateTimeInactiveComponent}
        onPress={showTimePicker}
        disabled={!isActive}
      >
        <Text
          style={{ color: colors.textPrimary, fontSize: 16, fontWeight: 500 }}
        >
          {formatTime(time)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
