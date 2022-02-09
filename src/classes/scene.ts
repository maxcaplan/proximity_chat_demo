import { emitter, receiver, scene } from "../types";

export class Scene implements scene {
  receiver: receiver;
  emitters: Array<emitter>;
  polygons: Array<Object>;

  width: number;
  height: number;

  constructor(
    receiver: receiver,
    emitters: Array<emitter>,
    polygons: Array<Object>,
    width: number,
    height: number
  ) {
    this.receiver = receiver;
    this.emitters = emitters;
    this.polygons = polygons;

    this.width = width;
    this.height = height;
  }
}
