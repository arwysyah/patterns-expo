import { Task } from "../model/Task";
import { TaskCommand } from "../patterns/TaskCommand";
import { TaskFactory } from "../patterns/TaskFactory";
import { taskManager } from "../patterns/TaskManagerSingleton";


export class TaskViewModel {
  private taskCommand = new TaskCommand();

  addTask(title: string, category: "Personal" | "Office", description: string = "",): void {
    const task = TaskFactory.createTask(title, category, description,);
    this.taskCommand.addTask(task);
  }

  deleteTask(index: number): void {
    this.taskCommand.deleteTask(index);
  }

  getTasks(): Task[] {
    return taskManager.getTasks();
  }

  undo(): void {
    this.taskCommand.undo();
  }

  redo(): void {
    this.taskCommand.redo();
  }
}