import { emitter, receiver, scene } from "../types";

export class Scene implements scene {
  context: CanvasRenderingContext2D;

  receiver: receiver;
  emitters: Array<emitter>;
  polygons: Array<Object>;

  width: number;
  height: number;

  unitRatio;

  background: string;

  constructor(
    context: CanvasRenderingContext2D,
    receiver: receiver,
    emitters: Array<emitter>,
    polygons: Array<Object>,
    width: number,
    height: number,
    background?: string
  ) {
    this.context = context;

    this.receiver = receiver;
    this.emitters = emitters;
    this.polygons = polygons;

    this.width = width;
    this.height = height;

    this.unitRatio =
      this.width > this.height ? this.width / 100 : this.height / 100;

    this.background = background || "#FFF";
  }

  // Main render function
  render(): void {
    // Clear canvas with background colour
    this.context.fillStyle = this.background;
    this.context.fillRect(0, 0, this.width, this.height);

    this.receiver.render(this.context, this.unitRatio);
  }

  // Update scene units for new canvas scale
  resize(canvasWidth: number, canvasHeight: number): void {
    this.width = canvasWidth;
    this.height = canvasHeight;

    this.unitRatio =
      this.width < this.height ? this.width / 100 : this.height / 100;

    this.render();
  }
}
