import "normalize.css";
import { Receiver } from "./classes/receiver";
import { Scene } from "./classes/scene";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const c = document.querySelector<HTMLCanvasElement>("#canvas")!;

const ctx = c.getContext("2d")!;

window.addEventListener("resize", function (e) {
  resizeCanvas(c, ctx);
});

let scene = new Scene(ctx, new Receiver(0, 0), [], [], c.width, c.height);
resizeCanvas(c, ctx);
scene.render();
console.log(scene);

function resizeCanvas(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
): void {
  // Get device pixel ratio
  let dpr = window.devicePixelRatio || 1;

  // Get the size of the canvas in pixels.
  var rect = canvas.getBoundingClientRect();

  // Give the canvas pixel dimensions of their CSS
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  // Scale all drawing operations by the dpr
  context.translate(c.width / 2, c.height / 2);

  // Update scene for new canvas
  scene.resize(canvas.width, canvas.height);
}
