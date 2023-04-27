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
    let radius = 100;
    p5.noStroke();
    for (let i = 0; i < 360; i += 10) {
      let x = p5.cos(p5.radians(i)) * radius;
      let y = p5.sin(p5.radians(i)) * radius;
      let color1 = p5.color(255,232,213);
      let color2 = p5.color(199,160,210);
      
      let lerpedColor = p5.lerpColor(color1, color2, i / 360);
      p5.fill(lerpedColor);
      p5.beginShape();
      p5.vertex(x, y);
      p5.vertex(0, 0);
      let x2 = p5.cos(p5.radians(i + 10)) * radius;
      let y2 = p5.sin(p5.radians(i + 10)) * radius;
      p5.vertex(x2, y2);
      p5.endShape(p5.CLOSE);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default MySketch;
