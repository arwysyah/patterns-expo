import { Task } from "../model/Task";
import { taskManager } from "./TaskManagerSingleton";

export class TaskCommand {
  addTask(task: Task): void {
    taskManager.addTask(task);
  }

  deleteTask(index: number): void {
    taskManager.deleteTask(index);
  }

  undo(): void {
    taskManager.undo();
  }

  redo(): void {
    taskManager.redo();
  }
}