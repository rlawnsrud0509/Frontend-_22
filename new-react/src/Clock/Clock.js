import React, { useState } from "react";

function Clock() {
  return (
    <div>
      <div>
          <h3>시계</h3>
      </div>
      <div id="sec"></div>
      <div id="min"></div>
      <div id="hour"></div>
    </div>
  );
}

export default Clock;
