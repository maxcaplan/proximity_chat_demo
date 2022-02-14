import "normalize.css";
import { Polygon } from "./classes/polygon";
import { Character } from "./classes/character/character";
import { Scene } from "./classes/scene";
import "./style.css";
import { scene } from "./types";

// ---------- Initialize Canvas ---------- //
const app = document.querySelector<HTMLDivElement>("#app")!;
const c = document.querySelector<HTMLCanvasElement>("#canvas")!;
const ctx = c.getContext("2d")!;

// ---------- Initialize Scene ---------- //
let triangle = new Polygon(
  { x: 0, y: 20 },
  [
    { x: 0, y: 2.5 },
    { x: 5, y: -5 },
    { x: -5, y: -5 },
  ],
  "#FFF",
  "#000"
);

let walls = new Polygon(
  { x: 0, y: 0 },
  [
    { x: -75, y: 50 },
    { x: 75, y: 50 },
    { x: 75, y: -50 },
    { x: -75, y: -50 },
  ],
  undefined,
  "#000"
);

let game = new Scene(
  ctx,
  new Character(0, 0),
  [],
  [walls, triangle],
  c.width,
  c.height
);

window.addEventListener("resize", function (e) {
  resizeCanvas(c, ctx, game);
});
resizeCanvas(c, ctx, game);

// ---------- Start Game Loop ---------- //
let lastFrame = 0;
window.requestAnimationFrame((timestamp) =>
  animate(timestamp, lastFrame, game)
);

// ---------- Functions ---------- //

// Update canvas and scene with canvas css dimensions
function resizeCanvas(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  g: scene
): void {
  // Get device pixel ratio
  let dpr = window.devicePixelRatio || 1;

  // Get the size of the canvas in pixels.
  var rect = canvas.getBoundingClientRect();

  // Set the canvas pixel dimensions of CSS
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  // Scale all drawing operations by dpr
  context.translate(c.width / 2, c.height / 2);

  // Flip Y axis so +Y is up and -Y is down
  context.scale(1, -1);

  // Update scene for new canvas
  g.resize(canvas.width, canvas.height);
}

// Main game loop
function animate(timestamp: number, lastFrame: number, g: scene) {
  // Calculate time between last frame and current frame in milliseconds
  let deltaTime = timestamp - lastFrame;
  lastFrame = timestamp;

  // Render new frame from scene
  g.move(deltaTime);
  g.update();
  g.render();

  // Request next frame
  window.requestAnimationFrame((timestamp) => animate(timestamp, lastFrame, g));
}
