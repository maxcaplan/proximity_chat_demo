import { point, receiver } from "../types";

export class Receiver implements receiver {
  pos: point;
  size = 10;

  constructor(x: number = 0, y: number = 0) {
    this.pos = { x, y };
  }
}
