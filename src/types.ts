export interface vector2d {
  x: number;
  y: number;

  add: (val: number | vector2d) => vector2d;
  mult: (val: number | vector2d) => vector2d;
  div: (val: number | vector2d) => vector2d;
  mag: () => number;
  normalize: (mag: number) => vector2d;
}

export interface point {
  x: number;
  y: number;
}

export interface line {
  a: point;
  b: point;
}

export interface polygon {
  pos: point;
  points: Array<point>;
  lines: Array<line>;
  fillCol: string | undefined;
  strokeCol: string | undefined;
  strokeWidth: number;

  render: (
    ctx: CanvasRenderingContext2D,
    unitRatio: number,
    offset?: point
  ) => void;
}

export interface receiver {
  pos: point;
  acc: number;
  vel: vector2d;
  termVel: number;
  drag: number;
  radius: number;
  fillCol: string;
  strokeCol: string;
  strokeWidth: number;

  render: (ctx: CanvasRenderingContext2D, unitRatio: number) => void;
  update: () => void;
  move: (inputs: inputs, deltaTime: number) => void;
}

export interface emitter {
  pos: point;
}

export interface inputs {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

export interface scene {
  context: CanvasRenderingContext2D;
  receiver: receiver;
  emitters: Array<emitter>;
  polygons: Array<polygon>;
  width: number;
  height: number;
  unitRatio: number;
  inputs: inputs;
  background: string;

  render: () => void;
  update: () => void;
  move: (deltaTime: number) => void;
  resize: (canvasWidth: number, canvasHeight: number) => void;
}
