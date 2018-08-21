import { Trait } from "../lib/entity.js";

export default class Sample extends Trait {
  constructor(start) {
    super("SAMPLE");
    this.NAME = "SAMPLE";
  }

  trigger(entity) {}

  update(entity, deltaTime) {
    entity.pos.x += 0.5;
    entity.pos.y += 0.5;
  }
}
