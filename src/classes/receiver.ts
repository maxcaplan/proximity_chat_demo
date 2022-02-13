import { point, receiver } from "../types";

export class Receiver implements receiver {
  pos: point;
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
}
