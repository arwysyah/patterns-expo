import { TaskManagerSingleton } from "../core/TaskManagerSingleton";
import { SortingStrategy } from "../core/TaskStrategy";
import { Task } from "../model/Task";


export class TaskViewModel {
  private taskManager = TaskManagerSingleton.getInstance();

  addTask(task: Task): void {
    this.taskManager.addTask(task);
  }

  deleteTask(index: number): void {
    this.taskManager.deleteTask(index);
  }

  undo(): void {
    this.taskManager.undo();
  }

  redo(): void {
    this.taskManager.redo();
  }

  subscribe(callback: (tasks: Task[]) => void): void {
    this.taskManager.taskObservable.subscribe(callback);
  }

  sortTasks(strategy: SortingStrategy): Task[] {
    const tasks = this.taskManager.getTasks();
    return strategy.sort(tasks);
  }
}