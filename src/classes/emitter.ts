import { emitter, point } from "../types";

export class Emitter implements emitter {
  pos: point;

  constructor(x: number = 0, y: number = 0) {
    this.pos = { x, y };
  }
}
