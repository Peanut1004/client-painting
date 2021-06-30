import React from 'react';

function Slider() {
  return (
    <div className="slider">
      <input id="slide-dot1" type="radio" name="slides" defaultChecked />
      <div className="slide slide__one"></div>
      <input id="slide-dot2" type="radio" name="slides" />
      <div className="slide slide__two"></div>
      <input id="slide-dot3" type="radio" name="slides" />
      <div className="slide slide__three"></div>
      <div className="slider__inner">
        <label htmlFor="slide-dot1"></label>
        <label htmlFor="slide-dot2"></label>
        <label htmlFor="slide-dot3"></label>
      </div>
    </div>
  );
}

export default Slider;
