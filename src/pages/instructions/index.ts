import { state } from "../../state";

const piedra = require('../../assets/piedra.png');
const papel = require('../../assets/papel.png');
const tijera = require('../../assets/tijera.png');

state.getStorage();

export function initInstuctions(params) {
  const div = document.createElement("div");
  div.classList.add("instructions");
  const style = document.createElement("style");

  div.innerHTML = `
        <text-component class="text comp" >Presioná jugar
            y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-component>
        <button-component class="btn-component">¡jugar!</button-component>
        <div class="hands">
            <img src="${piedra}" alt="piedra" class="hand">
            <img src="${papel}" alt="papel" class="hand">
            <img src="${tijera}" alt="tijera" class="hand">
        </div>
      `;

  style.innerHTML = `
        .comp {
            display: flex;
            justify-content: center;
        }

      .instructions {
          width: 100%;
          height: 100vh;
          padding-top: 50px;
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
     `;

  const button = div.querySelector(".btn-component");
  button?.addEventListener("click", () => {
    params.goTo("/play");
  });
  div.appendChild(style);
  return div;
}
