import { Task } from "../model/Task";

export interface Command {
  execute(): void;
  undo(): void;
}

export class AddTaskCommand implements Command {
  constructor(private tasks: Task[], private task: Task) {}

  execute(): void {
    this.tasks.push(this.task);
  }

  undo(): void {
    this.tasks.pop();
  }
}

export class DeleteTaskCommand implements Command {
  private deletedTask?: Task;

  constructor(private tasks: Task[], private index: number) {}

  execute(): void {
    this.deletedTask = this.tasks.splice(this.index, 1)[0];
  }

  undo(): void {
    if (this.deletedTask) {
      this.tasks.splice(this.index, 0, this.deletedTask);
    }
  }
}

export class CommandHistory {
  private history: Command[] = [];
  private currentIndex = -1;

  executeCommand(command: Command): void {
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(command);
    command.execute();
    this.currentIndex++;
  }

  undo(): void {
    if (this.currentIndex >= 0) {
      const command = this.history[this.currentIndex];
      command.undo();
      this.currentIndex--;
    }
  }

  redo(): void {
    if (this.currentIndex < this.history.length - 1) {
      const command = this.history[this.currentIndex + 1];
      command.execute();
      this.currentIndex++;
    }
  }
}
