import React, { useState } from "react";

function PrintInput() {
  let [text, setText] = useState("");

  let Utext = (e) => {
    setText((text = e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={Utext}></input>
      <div>{text}</div>
    </div>
  );
}

export default PrintInput;
