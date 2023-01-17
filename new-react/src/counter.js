import React, { useState } from "react";

function Counter() {
  let [count, Setcount] = useState(0);

  const increaseNumber = () => {
    Setcount(count + 1);
  };

  const decreaseNumber = () => {
    Setcount(count - 1);
  };

  return (
    <>
      <div className="ad">{count}</div>
      <div>
        <button className="button" onClick={increaseNumber}>
          +
        </button>
        <button className="button" onClick={decreaseNumber}>
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
