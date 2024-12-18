import { Task } from "../model/Task";
import { TaskBuilder } from "./TaskBuilder";


export class TaskFactory {
  static createTask(
    title: string,
    category: "Personal" | "Office",
    description: string
  ): Task {
    return new TaskBuilder(title, category).setDescription(description || "").build();
  }
}