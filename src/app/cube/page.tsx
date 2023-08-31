"use client";
import './Cube.css'
import { useState } from 'react';

function Cube() {
  // Set the initial rotation angles.
  const [xAngle, setXAngle] = useState(0);
  const [yAngle, setYAngle] = useState(0);
  const [zAngle, setZAngle] = useState(0);

  function animateCube() {
    // Get the cube element.
    const cube = document.querySelector(".cube");

    //Return the cube to its original position.
    setXAngle(0);
    setYAngle(0);
    setZAngle(0);

    if( cube ){

        //posible eliminacion
        //cube.style.transform = "rotateX("+ xAngle +"deg) rotateY("+ yAngle +"deg) rotateZ("+ zAngle +"deg)";
        //cube.setAttribute("style", "rotateX("+ xAngle +"deg) rotateY("+ yAngle +"deg) rotateZ("+ zAngle +"deg)")
        //wait the transition end and toggle the animation class again.
        setTimeout(function() {
        cube.classList.toggle("animated");
        }, 1000);
    }
  }

  function rotateCube( direction : string ) {
    // Get the cube element.
    const cube = document.querySelector(".cube");
    switch ( direction ) {
      case "up":
        setXAngle(xAngle - 90);
        break;
      case "down":
        setXAngle(xAngle + 90);
        break;
      case "left":
        setYAngle(yAngle - 90);
        break;
      case "right":
        setYAngle(yAngle + 90);
        break;
    }
    //tambien posible eliminacion
    //cube.style.transform = "rotateX("+ xAngle +"deg) rotateY("+ yAngle +"deg) rotateZ("+ zAngle +"deg)";
  }
  

  return (
    <div className="App">
      <div style={{transform: `rotateX(${xAngle}deg) rotateY(${yAngle}deg) rotateZ(${zAngle}deg)`}} className="cube">
        <div className="cube__face cube__face--front">front</div>
        <div className="cube__face cube__face--back">back</div>
        <div className="cube__face cube__face--right">right</div>
        <div className="cube__face cube__face--left">left</div>
        <div className="cube__face cube__face--top">top</div>
        <div className="cube__face cube__face--bottom">bottom</div>
      </div>
      <div className="arrow-panel">
        <div onClick={() => {rotateCube("up")}} className="arrow-panel__arrow arrow-panel__arrow--up">↑</div>
        <div onClick={() => {rotateCube("down")}} className="arrow-panel__arrow arrow-panel__arrow--down">↓</div>
        <div onClick={() => {rotateCube("left")}} className="arrow-panel__arrow arrow-panel__arrow--left">←</div>
        <div onClick={() => {rotateCube("right")}} className="arrow-panel__arrow arrow-panel__arrow--right">→</div>
        <div onClick={() => {animateCube()}} className="arrow-panel__arrow arrow-panel__arrow--animate">▶</div>
      </div>
    </div>
  )
}

export default Cube