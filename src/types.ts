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
  fillCol: string;
  strokeCol: string;
  strokeWidth: number;

  render: (
    ctx: CanvasRenderingContext2D,
    unitRatio: number,
    offset?: point
  ) => void;
}

export interface receiver {
  pos: point;
  radius: number;
  fillCol: string;
  strokeCol: string;
  strokeWidth: number;

  render: (ctx: CanvasRenderingContext2D, unitRatio: number) => void;
}

export interface emitter {
  pos: point;
}

export interface scene {
  context: CanvasRenderingContext2D;
  receiver: receiver;
  emitters: Array<emitter>;
  polygons: Array<polygon>;
  width: number;
  height: number;
  unitRatio: number;

  render: () => void;
  resize: (canvasWidth: number, canvasHeight: number) => void;
}
