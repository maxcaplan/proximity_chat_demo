import { emitter, receiver, scene } from "../types";

export class Scene implements scene {
  receiver: receiver;
  emitters: Array<emitter>;
  polygons: Array<Object>;

  canvasWidth: number;
  canvasHeight: number;

  width: number;
  height: number;

  background: string;

  constructor(
    receiver: receiver,
    emitters: Array<emitter>,
    polygons: Array<Object>,
    width: number,
    height: number,
    background?: string
  ) {
    this.receiver = receiver;
    this.emitters = emitters;
    this.polygons = polygons;

    this.canvasWidth = width;
    this.canvasHeight = height;

    this.width = width;
    this.height = height;

    this.background = background || "#FFF";
  }

  // Main render function
  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.background;
    ctx.fillRect(0, 0, this.width, this.height);

    this.receiver.render(ctx);
  }
}
