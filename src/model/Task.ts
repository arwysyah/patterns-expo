import { TaskState } from "../core/TaskState";


export interface Task {
  id: number;
  title: string;
  description: string;
  category: "Personal" | "Office";
  clockIn: string;
  state: TaskState;
  getDetails(): string;
}