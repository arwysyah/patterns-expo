export interface TaskState {
    getStatus(): string;
  }
  
  export class PendingState implements TaskState {
    getStatus(): string {
      return "Pending";
    }
  }
  
  export class InProgressState implements TaskState {
    getStatus(): string {
      return "In Progress";
    }
  }
  
  export class CompletedState implements TaskState {
    getStatus(): string {
      return "Completed";
    }
  }