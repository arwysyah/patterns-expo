import { formatDateWithAMPM } from "../utils/dateFormatter";

export interface Task {
  description: string;
  clockIn: string;
  id: number;
  title: string;
  category: "Personal" | "Office";
  getDetails(): string;
}

export class PersonalTask implements Task {
  id: number;
  title: string;
  category: "Personal";
  description: string;
  clockIn: string;


  constructor(title: string,description:string) {
    this.id = Date.now();
    this.title = title;
    this.category = "Personal";
    this.description = description;
    this.clockIn = formatDateWithAMPM(new Date());

  }


  getDetails(): string {
    return `${this.title} (Personal Task)`;
  }
}

export class OfficeTask implements Task {
  id: number;
  title: string;
  category: "Office";
  description: string;
  clockIn: string;


  constructor(title: string, description: string) {
    this.id = Date.now();
    this.title = title;
    this.category = "Office";
    this.description = description;
    this.clockIn = formatDateWithAMPM(new Date());;

  }

  getDetails(): string {
    return `${this.title} (Office Task) - ${this.description}, Clock-in: ${this.clockIn}`;
  }
}
