export interface point {
  x: number;
  y: number;
}

export interface line {
  a: point;
  b: point;
}

export interface polygon {
  points: Array<point>;
  lines: Array<line>;
}

export interface receiver {
  pos: point;
  radius: number;
  fillCol: string;
  strokeCol: string;
  strokeWidth: number;

  render: (ctx: CanvasRenderingContext2D) => void;
}

export interface emitter {
  pos: point;
}

export interface scene {
  receiver: receiver;
  emitters: Array<emitter>;
  polygons: Array<Object>;
  width: number;
  height: number;

  render: (ctx: CanvasRenderingContext2D) => void;
}
