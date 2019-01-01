import React from "react";
import "../engine/index";
import "./index.css";

export default () => (
  <>
    <div id="game-over-overlay" />

    <div id="game-over">
      <h1>GAME OVER</h1>
      <button id="play-again">Play Again</button>
    </div>

    <div className="wrapper">
      <div id="instructions">
        <div>
          move with <span className="key">arrows</span> or{" "}
          <span className="key">wasd</span>
        </div>
        <div>
          shoot with <span className="key">space</span>
        </div>
      </div>

      <div id="score" />
    </div>
  </>
);
