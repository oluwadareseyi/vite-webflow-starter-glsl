import { Plane, Curtains } from "curtainsjs";
import vertex from "../shaders/vertex.glsl";
import fragment from "../shaders/fragment.glsl";

export default class Canvas {
  constructor() {
    this.curtains = new Curtains({
      container: "canvas",
    });

    this.params = {
      vertexShader: vertex,
      fragmentShader: fragment,
    };

    this.planeElement = document.querySelector("[data-plane]");

    this.init();
  }

  init() {
    this.plane = new Plane(this.curtains, this.planeElement, this.params);
  }
}
