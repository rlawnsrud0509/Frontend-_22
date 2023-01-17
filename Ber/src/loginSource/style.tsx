import styled from "styled-components";
import "../App.css";

//스타일트컴포넌트 props 요소 가져오기 위해 선언

interface IconName {
  Name: string;
  width: number;
  height: number;
}

interface HW {
  width: number;
  height: number;
}

interface txtPosition {
  top: number;
  left: number;
}

export const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//메일, 키 같은 아이콘 넣을 div

export const Icons = styled.div`
  display: flex;
  background-image: url(${(props: IconName) => props.Name});
  width: ${(props: IconName) => props.width}%;
  height: ${(props: IconName) => props.height}%;
  margin: auto;
  background-size: cover;
  z-index: 1;
`;

//input태그 오른쪽 끝의 체크 아이콘

export const CheckIcons = styled.div`
  width: ${(props: IconName) => props.width}%;
  height: ${(props: IconName) => props.height}%;
  margin: auto;
  display: flex;
  background-image: url(${(props: IconName) => props.Name});
  background-size: cover;
  z-index: 3;
`;

// 아이콘 div 넣어서 input이랑 연결할 div

export const IconDivLeft = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  border: none;
  border-top-left-radius: 6rem;
  border-bottom-left-radius: 6rem;
  font-family: "Noto-Sans";
  z-index: 3;
  background-color: white;
`;

export const IconDivRight = styled.div`
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  border: none;
  border-top-right-radius: 6rem;
  border-bottom-right-radius: 6rem;
  font-family: "Noto-Sans";
  z-index: 3;
  background-color: white;
`;

//계정 정보, 학생 정보

export const accountTxt = styled.h1`
  width: 19%;
  top: ${(props: txtPosition) => props.top}%;
  left: ${(props: txtPosition) => props.left}%;
  display: flex;
  position: absolute;
  font-family: "Noto-Sans";
  font-weight: normal;
  font-size: 18px;
`;

// SIGN UP, LOGIN
export const Letter = styled.h1`
  font-family: "ULTRA";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 64px;
  color: white;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

// 아이디, 학교 이메일, 비번 작성할 input태그

export const formInput = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 50%;
  height: 100%;
  border: none;
  z-index: 0;
  font-size: 0.9rem;
  ::placeholder {
    font-family: "Noto-Sans";
    margin-left: 20px;
  }
  :focus {
    outline: none;
  }
`;

//확인버튼
export const submitButton = styled.button`
  border-radius: 3rem;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 10%;
  display: flex;
  font-family: "Noto-Sans";
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: none;
  color: #777777;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;

  :hover {
    background-color: #a9bed8;
    cursor: pointer;
  }

  :active {
    transition-duration: 0s;
    background-color: #cfdcec;
  }
`;
//요소 묶을 div 선언
export const inputDiv = styled.div`
  width: 100%;
  height: 10%;
  text-indent: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem auto;
  text-align: left;
  color: white;
`;

//제일 외곽 div선언
export const loginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: HW) => props.width}px;
  height: ${(props: HW) => props.height}px;
  box-sizing: border-box;
  background-color: #98adc7;
  color: black;
  border: none;
  border-radius: 6rem;
  align-items: center;
  margin-top: 7rem;
  box-shadow: 0.5rem 0.5rem 2rem #999999;
`;

//로고 담을 div 선언
export const berLogo = styled.div`
  margin-top: -3.7rem;
  margin-left: -25rem;
  width: ${(props: IconName) => props.width}%;
  height: ${(props: IconName) => props.height}%;
  background-image: url(${(props: IconName) => props.Name});
  background-size: cover;
`;

//클릭 시 드롭박스 나타나게 할 버튼 선언
export const DropBox = styled.button`
  position: relative;
  display: flex;
  width: 15%;
  height: 70%;
  border: none;
  border-radius: 20px;
  margin: 1%;
  background-color: white;
  font-family: "Noto-Sans";
  font-size: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #777777;
  list-style: none;

  :hover {
    cursor: pointer;
  }
`;

//리스트 형식으로 작성하기 때문에 드롭박스 ul선언
export const DropBoxul = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  width: 100%;
  height: 260%;
  top: 105%;
  border-radius: 1rem;
  overflow: scroll;
  font-size: 0;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    cursor: default;
  }
`;

//ul요소 안에 들어갈 리스트 요소 선언
export const DropBoxli = styled.li`
  /* display: none; */
  border: none;
  background-color: white;
  color: black;
  border-radius: 10px;
  height: 75%;
  max-height: 23px;
  text-align: center;
  margin: 0.1vw auto;
  font-size: 16px;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;
  width: 100%;
  z-index: 1;

  :hover {
    background-color: #a9bed8;
    cursor: pointer;
  }

  :active {
    transition-duration: 0s;
    background-color: #cfdcec;
  }
`;

//-----------------------------마이페이지--------------------------------

export const userInfo = styled.div`
  display: flex;
  margin-top: 11rem;
  width: 1064px;
  height: 231px;
  background-color: #98adc7;
  border: none;
  border-radius: 2.5rem;
  z-index: 1;
  box-shadow: 0.5rem 0.5rem 2rem #999999;
`;

export const userIcon = styled.div`
  width: 14.5%;
  height: 61%;
  background-color: white;
  border: none;
  border-radius: 50%;
  background: url(${(props: IconName) => props.Name});
  background-size: cover;
  margin-top: 3rem;
  margin-left: 2rem;
`;

export const userName = styled.div`
  font-family: "GothicA1";
  width: 9%;
  height: 16%;
  font-size: 25px;
  text-align: center;
  color: white;
  margin-left: 1.5rem;
  margin-top: 3.3rem;
`;

export const userGCN = styled.div`
  display: flex;
  top: 17%;
  left: 32%;
  width: 10%;
  height: 16%;
  background-color: white;
  border: none;
  border-radius: 1.3vw;
  font-size: 13px;
  font-weight: 600;
  font-family: "GothicA1";
  justify-content: center;
  align-items: center;
  margin-left: 1.8rem;
  margin-top: 3rem;
`;

export const statusMessage = styled.div`
  display: flex;
  width: 25%;
  height: 30%;
  background-color: white;
  color: #676767;
  border-radius: 3vw;
  font-family: "GothicA1";
  font-size: 15px;
  font-weight: 600;
  white-space: pre-wrap;
  text-align: left;
  align-items: center;
  padding: 0.3% 2.5%;
  margin-left: -14rem;
  margin-top: 7rem;

  ::after {
    content: "";
    position: absolute;
    border-left: 12px solid transparent;
    border-right: 12px solid white;
    border-top: 17px solid transparent;
    border-bottom: 6px solid transparent;

    left: -20px;
    bottom: 22px;
  }

  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.25));
`;

export const divLine = styled.div`
  left: 62%;
  width: 0%;
  height: 72%;
  border: 2px solid #e0e0e0;
  background-color: #e0e0e0;
  border-radius: 10vw;
  margin-left: 2.5rem;
  margin-top: 2rem;
`;

export const interestDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 38%;
  height: 40%;
  margin-top: 6rem;
  margin-left: 3rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const interests = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11px 15px;
  background-color: white;
  border: none;
  margin: 4px;
  font-family: "GothicA1";
  font-size: 11px;
  font-weight: 600;
  border-radius: 1rem;
  width: max-content;
  max-width: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 1rem;
`;

export const noInterests = styled.div`
  color: #676767;
  font-family: "GothicA1";
  font-weight: 600;
  font-size: 1rem;
  margin-left: 2.5rem;
  line-height: 80px;
`;

export const interestTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-left: -26rem;
  width: 33%;
  height: 19%;
  justify-content: center;
  align-items: center;
`;

export const Smile = styled.div`
  width: ${(props: IconName) => props.width}%; //20
  height: ${(props: IconName) => props.height}%; //20
  background: url(${(props: IconName) => props.Name});
  background-size: cover;
  margin-right: 1rem;
`;

export const tagText = styled.div`
  font-family: "GothicA1";
  font-weight: 500;
  font-size: 1rem;
  color: white;
  width: max-content;
`;

export const postText = styled.div`
  display: flex;
  color: black;
  font-family: "ROBOTO";
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  justify-content: left;
  width: ${(props: IconName) => props.width}px;
  height: ${(props: IconName) => props.height}px;
  background: url(${(props: IconName) => props.Name});
  background-repeat: no-repeat;
  background-color: #d6dee9;
  background-position: 13% center;
  padding: 0.95rem 1.2rem;
  justify-content: right;
  align-items: center;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  box-sizing: border-box;
  margin-left: 3rem;
  margin-top: 5rem;
`;

export const myPostDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1064px;
  left: 16%;
  border: none;
  row-gap: 3rem;
  padding-bottom: 3rem;
  justify-content: center;
`;

export const noPost = styled.div`
  font-family: "GothicA1";
  font-weight: 300;
  font-size: 34px;
  white-space: pre-wrap;
  text-align: center;
  margin-top: 13rem;
  margin-bottom: 10rem;
`;

export const myPost = styled.div`
  position: relative;
  background-color: #d6dee9;

  border-radius: 3rem;
  width: 100%;
  height: 319px;
  font-family: "GothicA1";
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  :hover {
    background-color: #d7e2f0;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const postTextDiv = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

export const postTitle = styled.div`
  font-family: "GothicA1";
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const postSummary = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  text-overflow: ellipsis;
`;

export const postIconDiv = styled.div`
  align-items: center;
  font-size: "ROBOTO";
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  width: 100%;
  margin-top: 0.95rem;
  margin-left: -0.75rem;
`;

export const postIcon = styled.div`
  width: ${(props: IconName) => props.width}%;
  height: ${(props: IconName) => props.height}%;

  background: url(${(props: IconName) => props.Name});
  margin-left: 0.75rem;
  margin-right: 0.35rem;
`;

export const postImg = styled.img`
  width: 29%;
  height: 65%;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${(props: IconName) => props.Name});
`;

export const postTagDiv = styled.div`
  width: 80%;
  margin-top: 1rem;
  margin-left: -0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export const postTag = styled.div`
  display: inline;
  background-color: white;
  border: none;
  margin: 4px;
  font-family: "GothicA1";
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.65rem 0.85rem;
  border-radius: 1rem;
`;
