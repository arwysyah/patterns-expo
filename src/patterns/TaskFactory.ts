import { PersonalTask, OfficeTask, Task } from '../model/Task'

export class TaskFactory {
  static createTask(
    title: string,
    category: "Personal" | "Office",
    description: string = "",
  ): Task {
    if (category === "Office") {
      return new OfficeTask(title, description,);
    } else {
      return new PersonalTask(title,description);
    }
  }
}