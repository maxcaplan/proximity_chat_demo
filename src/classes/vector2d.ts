import { vector2d } from "../types";

// Basic 2 dimensional vector class
export class Vector2d implements vector2d {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  // Adds number to vector components or adds another vectors components
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

  // Multiplies vector components by a number or another vectors components
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

  // Divides vector components by a number or another vectors components
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

  // Returns the magnitude(length) of the vector
  mag(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  // Normalizes vector to some magnitude, defaults to magnitude of 1
  normalize(mag: number = 1): vector2d {
    const len = this.mag();
    if (len > 0) {
      this.div(len);
    }

    this.mult(mag);

    return this;
  }
}
