import React, {useState} from 'react';


function Footer1() {
  

    return (
      
   <div>
  <div id="color-type-div">
    <span id="color-type-span">Votre couleur</span>
    <div className="image-grid-style">
      <div className="color-palette">
        {/*<div class="col 0 no-color-box"></div>*/}
        <div className="col 1 color-box" />
        <div className="col 2 color-box" />
        <div className="col 3 color-box" />
        <div className="col 4 color-box" />
        <div className="col 5 color-box" />
        <div className="col 6 color-box" />
        <div className="col 7 color-box" />
        <div className="col 8 color-box" />
        <div className="col 9 color-box" />
        <div className="col 10 color-box" />
        <div className="col 11 color-box" />
        <div className="col 12 color-box" />
        <div className="col 13 color-box" />
        <div className="col 14 color-box" />
        <div className="col 15 color-box" />
        <div className="col 16 color-box" />
      </div>
    </div>
  </div>
  <div className="element-send-form">
    <button className="glow-on-hover" onclick="sendIMG()" type="button">Innovez !</button>
  </div>
</div>

    );
}

export default Footer1;