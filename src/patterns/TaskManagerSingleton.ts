import { Task } from "../model/Task";

class TaskManager {
  private static instance: TaskManager;
  private tasks: Task[] = [];
  private undoStack: Task[][] = [];
  private redoStack: Task[][] = [];

  private constructor() {}

  public static getInstance(): TaskManager {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task: Task): void {
    this.saveState();
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.saveState();
    this.tasks.splice(index, 1);
  }

  undo(): void {
    if (this.undoStack.length > 0) {
      this.redoStack.push([...this.tasks]);
      this.tasks = this.undoStack.pop()!;
    }
  }

  redo(): void {
    if (this.redoStack.length > 0) {
      this.undoStack.push([...this.tasks]);
      this.tasks = this.redoStack.pop()!;
    }
  }

  saveState(): void {
    this.undoStack.push([...this.tasks]);
    this.redoStack = [];
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }
}

export const taskManager = TaskManager.getInstance()