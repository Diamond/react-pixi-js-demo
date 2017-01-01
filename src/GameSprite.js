import React, { Component } from 'react';
const PIXI = require('pixi.js');

const GameSprite = (props) => {
  let texture;
  if (PIXI.loader.resources[props.image]) {
    console.log("Loading from cache");
    texture = PIXI.loader.resources[props.image].texture;
  } else {
    texture = PIXI.Texture.from(props.image);
  }
  texture = PIXI.Texture.from(props.image);
  let sprite = new PIXI.Sprite(texture);
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  // move the sprite to the center of the screen
  sprite.position.x = props.x;
  sprite.position.y = props.y;

  if (props.stage) { props.stage.addChild(sprite); }
  return (<div className="GameSprite"></div>)
};

export default GameSprite;
