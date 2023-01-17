import React, { useState } from "react";

function InputSample() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onReset = (e) => {
    setInput("");
  };
  return (
    <div>
      <input onChange={onChange} value={input} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {input}</b>
      </div>
    </div>
  );
}

export default InputSample;
