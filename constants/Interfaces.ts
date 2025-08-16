import React from "react";

export interface FlatListComponentProps {
  id: number;
  title: string;
  dateTimeStamp: string;
  status:boolean;
  description: string;
}

export interface EditModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data?: FlatListComponentProps;
  mode?: "edit" | "create";
}

export interface DateTimePickerProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  isActive:boolean
}
