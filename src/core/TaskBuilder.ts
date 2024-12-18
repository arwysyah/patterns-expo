import { Task } from "../model/Task";
import { formatDateWithAMPM } from "../utils/dateFormatter";
import { PendingState } from "./TaskState";

export class TaskBuilder {
  private task: Task;

  constructor(title: string, category: "Personal" | "Office",description:string) {
    this.task = {
      id: Math.random(),
      title,
      description,
      category,
      clockIn: formatDateWithAMPM(new Date()),
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