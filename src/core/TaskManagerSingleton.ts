import { TaskManager } from '../model/TaskManager'


export class TaskManagerSingleton {
  private static instance: TaskManager;

  static getInstance(): TaskManager {
    if (!TaskManagerSingleton.instance) {
      TaskManagerSingleton.instance = new TaskManager();
    }
    return TaskManagerSingleton.instance;
  }
}