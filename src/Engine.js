const PIXI = require('pixi.js');

import MarioSprite from './mario_sprite.jpg';

class Engine {
  constructor(width, height, targetEl, opts={}) {
    // Build the initial renderer context
    this.renderer = PIXI.autoDetectRenderer(width, height, opts);

    // Gross, but apparently necessary
    document.querySelector(targetEl).appendChild(renderer.view);

    // create the root of the scene graph
    this.stage = new PIXI.Container();

    // Render to the stage
    this.renderer.render(this.stage);

    // Load the sprites we'll use later
    PIXI
      .loader
      .add(MarioSprite)
      .load(this.setup);

    this.animate();

    return { this.renderer, this.stage };
  }
  setup() {

  }
  animate() {
    requestAnimationFrame(this.animate);
    if (this.renderer) {
      this.renderer.render(this.stage);
    }
  }
}

export default Engine;
