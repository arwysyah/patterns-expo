export class Caretaker<T> {
    private history: T[] = [];
    private redoStack: T[] = [];
  
    saveState(state: T): void {
      this.history.push(state);
      this.redoStack = [];
    }
  
    undo(): T | null {
      if (this.history.length > 1) {
        this.redoStack.push(this.history.pop()!);
        return this.history[this.history.length - 1];
      }
      return null;
    }
  
    redo(): T | null {
      if (this.redoStack.length > 0) {
        const state = this.redoStack.pop()!;
        this.history.push(state);
        return state;
      }
      return null;
    }
  }