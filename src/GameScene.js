import React, { Component } from 'react';

import MarioSprite from './assets/mario_sprite.jpg';

import GameText from './GameText';
import GameSprite from './GameSprite';

import Engine from './Engine';

class GameScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: null,
      engine: null,
    };
  }
  componentDidMount() {
    let engine = new Engine(800, 600, "#GameCanvas", { backgroundColor: 0x1099bb })
    this.setState({
      stage: engine.stage,
      engine,
    });
    engine.loadSprites([ MarioSprite ]);
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
