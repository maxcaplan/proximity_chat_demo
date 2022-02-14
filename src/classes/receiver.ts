import { inputs, point, receiver, vector2d } from "../types";
import { Vector2d } from "./vector2d";

export class Receiver implements receiver {
  pos: point;
  acc: number;
  vel: vector2d;
  termVel: number;
  drag: number;

  radius: number;

  fillCol: string;
  strokeCol: string;
  strokeWidth: number;

  constructor(
    x: number = 0,
    y: number = 0,
    radius?: number,
    fill?: string,
    stroke?: string,
    strokeWidth?: number
  ) {
    this.pos = { x, y };
    this.acc = 10;
    this.vel = new Vector2d();
    this.termVel = 10;
    this.drag = 0.25;

    this.radius = radius || 5;

    this.fillCol = fill || "#FFF";
    this.strokeCol = stroke || "#000";
    this.strokeWidth = strokeWidth || 0.5;
  }

  render(ctx: CanvasRenderingContext2D, unitRatio: number): void {
    ctx.beginPath();
    ctx.arc(0, 0, this.radius * unitRatio, 0, 2 * Math.PI, false);

    ctx.fillStyle = this.fillCol;
    ctx.fill();

    ctx.strokeStyle = this.strokeCol;
    ctx.lineWidth = this.strokeWidth * unitRatio;
    ctx.stroke();
  }

  move(inputs: inputs, deltaTime: number) {
    let move = new Vector2d();

    if (inputs.up) move.y += 1;
    if (inputs.down) move.y -= 1;
    if (inputs.left) move.x -= 1;
    if (inputs.right) move.x += 1;

    move.normalize();

    this.vel.add(move.mult(this.acc * deltaTime * 0.001));

    // If velocity has magnitude apply drag
    if (this.vel.mag() > 0.0001) {
      this.vel.div(this.drag + 1);
    } else {
      this.vel.mult(0);
    }
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}
