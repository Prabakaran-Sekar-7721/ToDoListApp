import { storage } from "@/components/storage/mmkv";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getTaskList } from "./getTaskList";

export const postTaskList = async (task: FlatListComponentProps) => {
  // Get current tasks from storage
  const tasks: FlatListComponentProps[] = await getTaskList();

  // Map over tasks, replacing the one with the same id, otherwise keep as is
//   const updatedTasks = tasks.map(t =>
//     t.id === task.id ? { ...t, ...task } : t
//   );

  // If task doesn't exist, append it
  const finalTasks =  [...tasks, task];

  // Save back to MMKV
  console.log("Saving task to storage:", task);
  storage.set('tasks', JSON.stringify(finalTasks));
};

