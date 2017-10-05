import {Entity} from "./entity";
import {Task} from "./task";

export class Story extends Entity {
  private _finished: boolean;
  private _responsible: string;
  private _tasks: Array<Task> = [];

  get finished(): boolean {
    return this._finished;
  }

  set finished(value: boolean) {
    this._finished = value;
  }

  get responsible(): string {
    return this._responsible;
  }

  set responsible(value: string) {
    this._responsible = value;
  }

  public addTask(task: Task) {
    this._tasks.push(task);
  }

  get tasks(): Array<Task> {
    return this._tasks;
  }

  public removeTask(task: Task): void {
    let taskPosition = this._tasks.indexOf(task);
    this._tasks.splice(taskPosition, 1);
  }
}
