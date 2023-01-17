import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prevNum) => prevNum + 1);
  };
  const onDecrease = () => {
    setNumber((prevNum) => prevNum - 1);
  };

  return (
    <div>
      <h1>카운터</h1>
      <div>값: {number}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
