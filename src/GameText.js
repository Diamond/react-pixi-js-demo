import React from 'react';
const PIXI = require('pixi.js');

const GameText = (props) => {
  let text = new PIXI.Text(props.text);
  text.x = props.x;
  text.y = props.y;
  if (props.stage) { props.stage.addChild(text); }
  return (<div className="GameText"></div>)
};

export default GameText;
