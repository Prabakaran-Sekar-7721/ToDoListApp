import { storage } from "@/components/storage/mmkv";
import { FlatListComponentProps } from "@/constants/Interfaces";
import { getTaskList } from "./getTaskList";

export const postTaskList = async (
  task: FlatListComponentProps,
  setTask?: (value: string) => void
) => {
  const tasks = await getTaskList();
  // const finalTasks = [...tasks, task];
  // Check if this task ID already exists
  const exists = tasks.some((t) => t.id === task.id);

  let updatedTasks: FlatListComponentProps[];

  if (exists) {
    // Replace the existing task with the updated values
    updatedTasks = tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t));
  } else {
    // Append new task
    updatedTasks = [...tasks, task];
  }
  setTask?.(JSON.stringify(updatedTasks));
};
