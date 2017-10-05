import {Entity} from "./entity";

export class Task extends Entity {
  private _finished: boolean;
  private _priority: number;

  get finished(): boolean {
    return this._finished;
  }

  set finished(value: boolean) {
    this._finished = value;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }
}
