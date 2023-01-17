import React, { useState } from "react";

function Lotto() {
  let [Lnum, setLnum] = useState(["", "", "", "", "", "", ""]);
  const setRandom = () => {
    setLnum((Lnum = ["", "", "", "", "", "", ""]));
    for (let i = 0; i < 7; i++) {
      document.getElementById(
        `lotto${i + 1}`
      ).firstChild.innerHTML = `${Lnum[i]}`;
    }
    for (let i = 0; i < 7; i++) {
      setTimeout(function () {
        let random = (Math.round(Math.random() * 100) % 45) + 1;
        console.log("defalut" + random);
        for (let j = 0; j < i + 1; j++) {
          if (Lnum[j] != random) {
            random = (Math.round(Math.random() * 100) % 45) + 1;
            console.log("same: " + random);
            setLnum((Lnum[i] = random));
            console.log(i, Lnum[i]);
            document.getElementById(
              `lotto${i + 1}`
            ).firstChild.innerHTML = `${Lnum[i]}`;
            break;
          }
        }
      }, 500 * (i + 1));
    }
  };

  return (
    <div className="lottoDiv">
      <div className="lotto" id="lotto1">
        <h1></h1>
      </div>
      <div className="lotto" id="lotto2">
        <h1></h1>
      </div>
      <div className="lotto" id="lotto3">
        <h1></h1>
      </div>
      <div className="lotto" id="lotto4">
        <h1></h1>
      </div>
      <div className="lotto" id="lotto5">
        <h1></h1>
      </div>
      <div className="lotto" id="lotto6">
        <h1></h1>
      </div>
      <div className="bonus" id="lotto7">
        <h1></h1>
      </div>
      <button onClick={setRandom} className="startL">
        추첨 시작!
      </button>
    </div>
  );
}

export default Lotto;
