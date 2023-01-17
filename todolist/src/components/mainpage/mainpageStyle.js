import styled from "styled-components";
import { keyframes } from "styled-components";

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(185, 235, 235);
  display: flex;
  flex-direction: column;
`;

const shownav = keyframes`
    0% {
        width: 0%;
        opacity: 0;
    }
    25% {
        width: 37.5%;
        opacity: 0;
    }
    100% {
        width: 100%;
        opacity: 1;
    }
`;

export const navbar = styled.div`
  position: fixed;
  display: flex;
  background-color: white;
  height: 75px;
  width: 100%;
  font-size: 30px;
  color: black;
  text-shadow: 5px 5px 0px black;
  animation: ${shownav} 1s ease-out;
`;

export const navbarElement = styled.div`
  color: black;
  display: flex;
  font-size: 25px;
  width: 150px;
  height: 100%;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;
  text-shadow: none;
  justify-content: center;
  align-items: center;
  margin-left: 2.1rem;
  :hover {
    transition-duration: 0.25s;
    font-size: 30px;
    font-weight: 600;
    cursor: default;
  }
`;

const showtext = keyframes`
    0% {
        margin-top: 2rem;
        opacity: 0;
    }
    50% {
        opacity: 0;
        margin-top: 3.67rem;
    }
    100% {
        margin-top: 5rem;
        opacity: 1;
    }
`;

export const mainText = styled.div`
  width: 300px;
  height: 200px;
  font-size: 100px;
  color: white;
  text-shadow: 5px 5px 3px gray;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 3rem;
  opacity: 0;
  animation: ${showtext} 1.5s ease-out 1s;
  animation-fill-mode: forwards;
`;
