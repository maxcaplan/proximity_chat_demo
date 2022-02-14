import { vector2d } from "../types";

export class Vector2d implements vector2d {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(val: number | vector2d): vector2d {
    if (val instanceof Vector2d) {
      this.x += val.x;
      this.y += val.y;
    } else if (typeof val === "number") {
      this.x += val;
      this.y += val;
    }

    return this;
  }

  mult(val: number | vector2d): vector2d {
    if (val instanceof Vector2d) {
      this.x *= val.x;
      this.y *= val.y;
    } else if (typeof val === "number") {
      this.x *= val;
      this.y *= val;
    }

    return this;
  }

  div(val: number | vector2d): vector2d {
    if (val instanceof Vector2d) {
      this.x /= val.x;
      this.y /= val.y;
    } else if (typeof val === "number") {
      this.x /= val;
      this.y /= val;
    }

    return this;
  }

  mag(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  normalize(mag: number = 1): vector2d {
    const len = this.mag();
    if (len > 0) {
      this.div(len);
    }

    this.mult(mag);

    return this;
  }
}
