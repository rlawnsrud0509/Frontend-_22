import React, { useState } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: ${function (props) {
    return props.Bg;
  }};
  color: ${function (props) {
    return props.color;
  }};

  border: 3px solid aqua;
  border-radius: 2px;
  border: 1px solid white;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
  :active {
    cursor: default;
  }
`;

const SstyledBtn = styled(StyledBtn)`
  font-size: 18px;
`;

function CreateList() {
  let [text, setText] = useState("");
  let [createLi, setcreateLi] = useState([]);
  let [i, setI] = useState(0);

  const create = (e) => {
    setText((text = e.target.value));
  };

  const deleteLi = (e) => {
    setcreateLi((createLi[i] = ""));
    setcreateLi((createLi = []));
  };

  const createList = () => {
    setI(i + 1);

    console.log(i);
    setcreateLi(createLi.concat(<li className="List">{text}</li>));
    document.getElementById("scan").value = "";
    setText((text = ""));
  };

  return (
    <>
      <div>
        <input id="scan" onChange={create}></input>
        <StyledBtn Bg="white" onClick={createList}>
          등록
        </StyledBtn>
        <SstyledBtn color="gray" onClick={deleteLi}>
          삭제
        </SstyledBtn>
      </div>
      <ul>{createLi}</ul>
    </>
  );
}

export default CreateList;
