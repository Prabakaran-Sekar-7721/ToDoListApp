import { storage } from "@/components/storage/mmkv";
import { FlatListComponentProps } from "@/constants/Interfaces";

export const getTaskList = async () => {
  try{
    const tasksString:string = await storage.getString("tasks")||'';
    const tasks:Array<FlatListComponentProps> = tasksString ? JSON.parse(tasksString) : [];
    return tasks;
  } catch (error) {
    console.error("Error fetching task list:", error);
    return [];
  }
};
