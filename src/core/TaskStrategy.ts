import { Task } from "../model/Task";

export interface SortingStrategy {
  sort(tasks: Task[]): Task[];
}

export class AlphabeticalStrategy implements SortingStrategy {
  sort(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}

export class CategoryStrategy implements SortingStrategy {
  sort(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.category.localeCompare(b.category));
  }
}