import { line, point, polygon } from "../types";

export class Polygon implements polygon {
  pos: point;

  points;
  lines: Array<line> = [];

  fillCol: string | undefined;

  strokeCol: string | undefined;
  strokeWidth: number;

  constructor(
    pos: point,
    points: Array<point>,
    fill?: string,
    stroke?: string,
    strokeWidth?: number
  ) {
    if (points.length < 3) {
      throw new Error("Polygon must have at least three(3) points");
    }

    this.pos = pos;
    this.points = points;

    for (let i = 0; i < this.points.length; i++) {
      if (i < this.points.length - 1) {
        this.lines.push({ a: this.points[i], b: this.points[i + 1] });
      } else {
        this.lines.push({ a: this.points[i], b: this.points[0] });
      }
    }

    this.fillCol = fill;
    this.strokeCol = stroke;
    this.strokeWidth = strokeWidth || 0.5;
  }

  render(
    ctx: CanvasRenderingContext2D,
    unitRatio: number,
    offset: point = { x: 0, y: 0 }
  ) {
    ctx.beginPath();

    ctx.moveTo(
      (this.points[0].x + this.pos.x - offset.x) * unitRatio,
      (this.points[0].y + this.pos.y - offset.y) * unitRatio
    );

    this.points.forEach((point, i) => {
      if (i != 0)
        ctx.lineTo(
          (point.x + this.pos.x - offset.x) * unitRatio,
          (point.y + this.pos.y - offset.y) * unitRatio
        );
    });

    ctx.closePath();

    if (this.fillCol) {
      ctx.fillStyle = this.fillCol;
      ctx.fill();
    }

    if (this.strokeCol) {
      ctx.strokeStyle = this.strokeCol;
      ctx.lineWidth = this.strokeWidth * unitRatio;
      ctx.stroke();
    }
  }
}
