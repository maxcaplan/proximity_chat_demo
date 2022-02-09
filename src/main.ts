import "normalize.css";
import "./style.css";

import { Scene } from "./classes/scene";
import { Receiver } from "./classes/receiver";
import { Polygon } from "./classes/polygon";

const app = document.querySelector<HTMLDivElement>("#app")!;
const c = document.querySelector<HTMLCanvasElement>("#canvas")!;

const ctx = c.getContext("2d")!;

let width = c.width;
let height = c.height;
