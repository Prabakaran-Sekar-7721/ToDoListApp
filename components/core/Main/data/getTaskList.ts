import { storage } from "@/components/storage/mmkv";
import { FlatListComponentProps } from "@/constants/Interfaces";

export const getTaskList = async () => {
  const tasksString:string = await storage.getString("tasks")||'';
  const tasks:Array<FlatListComponentProps> = tasksString ? JSON.parse(tasksString) : [];
  return tasks;
};
