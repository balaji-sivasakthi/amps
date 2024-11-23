type Task = {
  id: string;
  execute: () => Promise<void>;
  onComplete: () => Promise<void>;
};

class SyncQueue {
  private queue: Task[] = [];
  private isProcessing: boolean = false;
  private taskSet: Set<string> = new Set();

  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.queue.length === 0) return;
    this.isProcessing = true;

    const task = this.queue.shift();
    if (task) {
      this.taskSet.delete(task.id);
      try {
        await task.execute();
      } catch (error) {
        console.error('Task failed:', error);
        this.queue.unshift(task);
        this.taskSet.add(task.id);
      }
    }

    this.isProcessing = false;
    this.processQueue();
  }
  public addTask(task: Task): void {
    if (this.taskSet.has(task.id)) {
      console.warn(`Duplicate task with ID ${task.id} detected. Skipping.`);
      return;
    }
    this.queue.push(task);
    this.taskSet.add(task.id);
    this.processQueue();
  }
}
