const PIXI = require('pixi.js');

class Engine {
  constructor(width, height, targetEl, opts={}) {
    // Initial context binds
    this.animate     = this.animate.bind(this);
    this.loadSprites = this.loadSprites.bind(this);

    // Build the initial renderer context
    this.renderer = PIXI.autoDetectRenderer(width, height, opts);

    // Gross, but apparently necessary
    document.querySelector(targetEl).appendChild(this.renderer.view);

    // create the root of the scene graph
    this.stage = new PIXI.Container();

    // Render to the stage
    this.renderer.render(this.stage);

    // Call the main animation loop
    this.animate();
  }
  loadSprites(sprites=[]) {
    // Load any sprites into the texture cache
    PIXI
      .loader
      .add(sprites)
      .load(this.setup)
  }
  setup() {
    // Do a thing?
  }
  animate() {
    requestAnimationFrame(this.animate);
    if (this.renderer) {
      this.renderer.render(this.stage);
    }
  }
}

export default Engine;
