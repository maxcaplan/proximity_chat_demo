import { emitter, inputs, polygon, character, scene } from "../types";

// Main game scene
export class Scene implements scene {
  context: CanvasRenderingContext2D;

  character: character;
  emitters: Array<emitter>;
  polygons: Array<polygon>;

  width: number;
  height: number;

  unitRatio;

  inputs: inputs;

  background: string;

  constructor(
    context: CanvasRenderingContext2D,
    character: character,
    emitters: Array<emitter>,
    polygons: Array<polygon>,
    width: number,
    height: number,
    background?: string
  ) {
    this.context = context;

    this.character = character;
    this.emitters = emitters;
    this.polygons = polygons;

    this.width = width;
    this.height = height;

    this.unitRatio =
      this.width > this.height ? this.width / 100 : this.height / 100;

    this.inputs = {
      up: false,
      down: false,
      left: false,
      right: false,
    };

    window.addEventListener("keydown", (e) => this.updateInput(e));
    window.addEventListener("keyup", (e) => this.updateInput(e));

    this.background = background || "#EEE";
  }

  // Renders entire scene
  render(): void {
    // Clear canvas with background colour
    this.context.fillStyle = this.background;
    this.context.fillRect(
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );

    // Render receiver
    this.character.render(this.context, this.unitRatio);

    // Render all scene polygons
    this.polygons.forEach((polygon) => {
      polygon.render(this.context, this.unitRatio, this.character.pos);
    });
  }

  // Update scene for current frame
  update(): void {
    this.character.update();
  }

  // Update all scene movement for current frame
  move(deltaTime: number): void {
    this.character.move(this.inputs, deltaTime);
  }

  // Update scene units for new canvas scale
  resize(canvasWidth: number, canvasHeight: number): void {
    this.width = canvasWidth;
    this.height = canvasHeight;

    this.unitRatio =
      this.width < this.height ? this.width / 100 : this.height / 100;

    this.render();
  }

  // Update input dictionary on keyboard event
  updateInput(e: KeyboardEvent) {
    if (e.key === "ArrowUp" || e.key === "w") {
      e.preventDefault();
      this.inputs.up = e.type === "keydown";
    }

    if (e.key === "ArrowDown" || e.key === "s") {
      e.preventDefault();
      this.inputs.down = e.type === "keydown";
    }

    if (e.key === "ArrowLeft" || e.key === "a") {
      e.preventDefault();
      this.inputs.left = e.type === "keydown";
    }

    if (e.key === "ArrowRight" || e.key === "d") {
      e.preventDefault();
      this.inputs.right = e.type === "keydown";
    }
  }
}
