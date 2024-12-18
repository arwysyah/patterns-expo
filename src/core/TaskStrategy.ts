import { Task } from "../model/Task";

export interface SortingStrategy {
  sort(tasks: Task[]): Task[];
}

export class AlphabeticalStrategy implements SortingStrategy {
  sort(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}

export class NewestFirstStrategy implements SortingStrategy {
    sort(tasks: Task[]): Task[] {
      return tasks.sort((a, b) => new Date(b.clockIn).getTime() - new Date(a.clockIn).getTime());
    }
  }