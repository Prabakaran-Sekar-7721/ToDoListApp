import { storage } from "@/components/storage/mmkv";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getTaskList } from "./getTaskList";

export const deleteTaskList = async (
  task: FlatListComponentProps,
  setTask?: (value: string) => void
) => {
  try{
  const tasks = await getTaskList();
  
  // Remove the task with the specified ID
  const updatedTasks = tasks.filter((t) => t.id !== task.id);
  
  // Save the updated task list
  setTask?.(JSON.stringify(updatedTasks));
  } catch (error) {
    console.error("Error deleting task:", error);
  }

};
