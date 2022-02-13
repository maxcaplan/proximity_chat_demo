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

let scene = new Scene(new Receiver(0, 0), [], [], c.width, c.height);
resizeCanvas(c, ctx);
scene.render(ctx);

function resizeCanvas(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
): void {
  // Get device pixel ratio
  let dpr = window.devicePixelRatio || 1;

  // Update styling to prevent overflow
  if (window.innerWidth / 16 > window.innerHeight / 9) {
    canvas.classList.add("h-100")
    canvas.classList.remove("w-100")
  } else {
    canvas.classList.add("w-100")
    canvas.classList.remove("h-100")
  }

  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();

  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  context.scale(dpr, dpr);
  context.translate(c.width / 2, c.height / 2);

  scene.render(context);
  scene.width = canvas.width;
  scene.height = canvas.height;
}
