import { TaskManagerSingleton } from "../core/TaskManagerSingleton";
import { NewestFirstStrategy, SortingStrategy } from "../core/TaskStrategy";
import { Task } from "../model/Task";

export class TaskViewModel {
  private taskManager = TaskManagerSingleton.getInstance();
  private tasks: Task[] = [];

  constructor() {
    this.taskManager.taskObservable.subscribe(this.updateTasks);
  }
  private updateTasks = (tasks: Task[]) => {
    this.tasks =  tasks;
  };

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

  getTasks(): Task[] {
    return [...this.tasks];
  }

  sortTasks(strategy: NewestFirstStrategy): Task[] {
    return strategy.sort(this.getTasks());
  }

  unsubscribe(callback: (tasks: Task[]) => void): void {
    this.taskManager.taskObservable.unsubscribe(callback);
  }
}
