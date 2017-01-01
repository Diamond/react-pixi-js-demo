import React, { Component } from 'react';
const PIXI = require('pixi.js');

import MarioSprite from './mario_sprite.jpg';

import GameText from './GameText';
import GameSprite from './GameSprite';

import Engine from './Engine';

class GameScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderer: null,
      stage: null,
      engine: null,
    };

    this.init = this.init.bind(this);
  }
  init() {
    // Build the initial renderer context
    let renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});

    // Gross, but apparently necessary
    document.querySelector('#GameCanvas').appendChild(renderer.view);

    // create the root of the scene graph
    let stage = new PIXI.Container();

    // Render to the stage
    renderer.render(stage);

    // Make the renderer and stage accessible
    this.setState({ renderer, stage });

    // Load the sprites we'll use later
    PIXI
      .loader
      .add(MarioSprite);

    this.animate();
  }
  componentDidMount() {
    this.init();
  }
  animate() {
    requestAnimationFrame(this.animate);
    if (this.state.renderer) {
      this.state.renderer.render(this.state.stage);
    }
  }
  render() {
    return (
      <div className="GameScene">
        <div id="GameCanvas">
          <GameSprite image={MarioSprite} x={400} y={350} stage={this.state.stage} />
          <GameText text="Basic Pixi Text in React" x={30} y={90} stage={this.state.stage} />
        </div>
      </div>
    )
  }
}

export default GameScene;
