import { state } from "../../state";

const piedra = require('../../assets/piedra.png');
const papel = require('../../assets/papel.png');
const tijera = require('../../assets/tijera.png');

export function initPlay(params) {
  const div = document.createElement("div");
  div.classList.add("play");
  const style = document.createElement("style");

  let counter = 3;
  const countdown = setInterval(() => {
    counter--;
    const counterEl = div.querySelector(".counter") as any;
    counterEl.textContent = counter.toString();

    if (counter <= 0) {
      clearInterval(countdown);
      params.goTo("/instructions");
    }
  }, 1000);

  div.innerHTML = `
  <div class="circle counter">
    <div class="counter">${counter}</div>
  </div>
    <div class="hands-top">
      <img src=${tijera} alt="tijera" class="scissor-top hand-display-none">
      <img src="${piedra}" alt="piedra" class="stone-top hand-display-none">
      <img src="${papel}" alt="papel" class="paper-top hand-display-none">
    </div>
    <div class="hands">
      <img src=${tijera} alt="tijera" class="scissor">
      <img src="${piedra}" alt="piedra" class="stone">
      <img src="${papel}" alt="papel" class="paper">
    </div>
    `;

  style.innerHTML = `
	  .play {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }

    .hands {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    .active-hands{
      height: 157px;
    }

    .counter {
      font-weight: bold;
      font-size: 100px;
    }

    .circle {
      margin-top: 50px;
      width: 200px;
      height: 200px;
      border: 20px solid #000;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
     
    }

    .actived {
      display: inherit;
      transform: translateY(-30px);
      transition: all 0.5s;
    }

    .disabled {
      opacity: 60%;
      transform: translateY(30px);
      transition: 0.5s;
    }

    .hands-top {
      display: none;
    }

    .actived-hands-top {
      width: 100%;
      height: 157px;
      display: flex;
      justify-content: center;
      transform: rotate(180deg);
    }

    .hand-display-none{
      display: none;
    }

    .actived-hand-top {
      display: flex;
      transform: translateY(-30px);
      transition: all 0.5s;
    }`;

  const counterEl = div.querySelector(".counter") as Element;
  const handsChildren = div.querySelector<any>(".hands").children;
  const handsDiv = div.querySelector(".hands") as Element;
  const handScissor = div.querySelector(".scissor") as Element;
  const handStone = div.querySelector(".stone") as Element;
  const handPaper = div.querySelector(".paper") as Element;
  const handsTop = div.querySelector(".hands-top") as Element;
  const handScissorTop = div.querySelector(".scissor-top") as Element;
  const handStoneTop = div.querySelector(".stone-top") as Element;
  const handPaperTop = div.querySelector(".paper-top") as Element;

  

  for (const hands of handsChildren) {
    hands.addEventListener("click", () => {
      const type = hands.getAttribute("class");

      // console.log(type);
      
      clearInterval(countdown);

      if (type == "scissor") {
        state.setMove("tijera");
        activeHands("tijera");
      } else if (type == "stone") {
        state.setMove("piedra");
        activeHands("piedra");
      } else if (type == "paper") {
        state.setMove("papel");
        activeHands("papel");
      }
    });
  }

  function activeHands(param) {
    for (const hand of handsChildren) {
      hand.classList.add("disabled");
    }

    if (param == "tijera") {
      handScissor.classList.remove("disabled");
      handScissor.classList.add("actived");
      setTimeout(() => {
        handStone.classList.add("hand-display-none");
        handPaper.classList.add("hand-display-none");
      }, 1000);
    }
    if (param == "piedra") {
      handStone.classList.remove("disabled");
      handStone.classList.add("actived");
      setTimeout(() => {
        handScissor.classList.add("hand-display-none");
        handPaper.classList.add("hand-display-none");
      }, 1000);
    }
    if (param == "papel") {
      handPaper.classList.remove("disabled");
      handPaper.classList.add("actived");
      setTimeout(() => {
        handScissor.classList.add("hand-display-none");
        handStone.classList.add("hand-display-none");
      }, 1000);
    }

    setTimeout(() => {
      const machineMove = state.getState().currentGame.computerPlay;
      counterEl.remove();
      handsDiv.classList.add("active-hands");
      handsTop.classList.add("actived-hands-top");

      if (machineMove == "tijera") {
        handScissorTop.classList.add("actived-hand-top");
      }
      if (machineMove == "piedra") {
        handStoneTop.classList.add("actived-hand-top");
      }
      if (machineMove == "papel") {
        handPaperTop.classList.add("actived-hand-top");
      }

      setTimeout(() => {
        params.goTo("/results");
      }, 1000);
    }, 1000);
  }

  div.appendChild(style);
  return div;
}
