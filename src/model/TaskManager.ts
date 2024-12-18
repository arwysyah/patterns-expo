import { Task } from "./Task";

import { CommandHistory, AddTaskCommand, DeleteTaskCommand } from "../core/TaskCommand";
import { Observable } from "../core/TaskObserver";

export class TaskManager {
  private tasks: Task[] = [];
  private commandHistory: CommandHistory = new CommandHistory();
  public taskObservable = new Observable<Task[]>();
  private unsubscribe: any 

  addTask(task: Task): void {
    const addCommand = new AddTaskCommand(this.tasks, task);
    this.commandHistory.executeCommand(addCommand);
    this.taskObservable.notify([...this.tasks]);
  }

  deleteTask(index: number): void {
    const deleteCommand = new DeleteTaskCommand(this.tasks, index);
    this.commandHistory.executeCommand(deleteCommand);
    this.taskObservable.notify([...this.tasks]);
  }

  undo(): void {
    this.commandHistory.undo();
    this.taskObservable.notify([...this.tasks]);
  }

  redo(): void {
    this.commandHistory.redo();
    this.taskObservable.notify([...this.tasks]);
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }
  subscribeToUpdates(callback: (tasks: Task[]) => void): void {
    this.unsubscribe = this.taskObservable.subscribe(callback);
  }


  unsubscribeFromUpdates(): void {
    if (this.unsubscribe) {
      this.unsubscribe();  
    }
  }
}
