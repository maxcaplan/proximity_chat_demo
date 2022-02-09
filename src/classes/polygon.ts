import { line, point, polygon } from "../types";

export class Polygon implements polygon {
  points;
  lines: Array<line> = [];

  constructor(points: Array<point>) {
    if (points.length < 3) {
      throw new Error("Polygon must have at least three(3) points");
    }

    this.points = points;

    for (let i = 0; i < this.points.length; i++) {
      if (i < this.points.length - 1) {
        this.lines.push({ a: this.points[i], b: this.points[i + 1] });
      } else {
        this.lines.push({ a: this.points[i], b: this.points[0] });
      }
    }
  }
}
