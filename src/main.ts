import "normalize.css";
import { Polygon } from "./classes/polygon";
import { Receiver } from "./classes/receiver";
import { Scene } from "./classes/scene";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const c = document.querySelector<HTMLCanvasElement>("#canvas")!;

const ctx = c.getContext("2d")!;

window.addEventListener("resize", function (e) {
  resizeCanvas(c, ctx);
});

let scene = new Scene(
  ctx,
  new Receiver(0, 0),
  [],
  [
    new Polygon({ x: 0, y: 20 }, [
      { x: 0, y: 2.5 },
      { x: 5, y: -5 },
      { x: -5, y: -5 },
    ]),
  ],
  c.width,
  c.height
);

resizeCanvas(c, ctx);

// window.requestAnimationFrame(animate);

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
  // Flip Y axis so +Y is up and -Y is down
  context.scale(1, -1);

  // Update scene for new canvas
  scene.resize(canvas.width, canvas.height);
}

function animate(timestamp: number) {
  scene.render();
  window.requestAnimationFrame(animate);
}
