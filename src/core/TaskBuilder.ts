import { Task } from "../model/Task";
import { PendingState } from "./TaskState";

export class TaskBuilder {
  private task: Task;

  constructor(title: string, category: "Personal" | "Office") {
    this.task = {
      id: Math.random(),
      title,
      description: "",
      category,
      clockIn: new Date().toISOString(),
      state: new PendingState(),
      getDetails: function (): string {
        return `${this.title} - ${this.category} - ${this.description}`;
      },
    };
  }

  setDescription(description: string): this {
    this.task.description = description;
    return this;
  }

  build(): Task {
    return this.task;
  }
}