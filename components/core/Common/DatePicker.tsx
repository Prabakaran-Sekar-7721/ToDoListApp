// DateTimePickerExample.tsx
import React, { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import RNDateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { DateTimePickerProps } from "@/constants/Interfaces";

export const DateTimePickerComponent: React.FC<DateTimePickerProps> = ({ date, setDate }) => {
  // State with proper type annotation
  const [mode, setMode] = useState<"datetime"|"date"|"time">("datetime");

  // Handler with TypeScript types
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
        <RNDateTimePicker value={date} mode={mode} onChange={onChange} />
  );
};
