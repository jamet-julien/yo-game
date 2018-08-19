import { Trait } from "../lib/entity.js";

export default class Sample extends Trait {
  constructor(start) {
    super("SAMPLE");
  }

  trigger(entity) {}

  update(entity, deltaTime) {}
}
