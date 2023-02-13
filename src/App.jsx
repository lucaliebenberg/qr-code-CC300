import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import QRCode from "../src/assets/qr-code.png";

const App = () => {
  return (
    <div className="App">
      <div className="card__wrapper">
        <div className="card__top">
          <img src={QRCode} alt="Scan QR Code" className="qr-code" />
        </div>
        <div className="card__bottom">
          <h2 className="card__bottom_header">Scan Me</h2>
          <p className="card__bottom_para">
            I am a humble QR code. I am a mysterious black and white puzzle, a
            secret message waiting to be unlocked. My patterns and lines hold
            endless possibilities, a gateway to a digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
