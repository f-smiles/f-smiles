import React from 'react';
import Sketch from 'react-p5';

const MySketch = () => {

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(p5.frameCount * 0.01);
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.noFill();
    for (let i = 0; i < 360; i += 10) {
      let x = p5.cos(p5.radians(i)) * 100;
      let y = p5.sin(p5.radians(i)) * 100;
      let x2 = p5.cos(p5.radians(i + 10)) * 100;
      let y2 = p5.sin(p5.radians(i + 10)) * 100;
      p5.line(x, y, x2, y2);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default MySketch