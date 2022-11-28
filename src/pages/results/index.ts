import { state } from "../../state";

const resultImages = {
  empate: require("url:../../assets/empate.png"),
  ganaste: require("url:../../assets/ganaste.png"),
  perdiste: require("url:../../assets/perdiste.png"),
};

export function initResults(params) {
  const div = document.createElement("div");
  div.className = "result-cont";
  div.classList.add("result");

  const resultado = state.whoWins();

  const styleBackground = document.createElement("style");
  let imagen;
  if (resultado == "empate") {
    imagen = resultImages.empate;
  }
  if (resultado == "ganaste") {
    imagen = resultImages.ganaste;
  } else if (resultado == "perdiste") {
    imagen = resultImages.perdiste;
  }

  const currentState = state.getState();
  div.innerHTML = `
    <img class="img-win" src="${imagen}">
	  <div class="tablero">
      <h4>Score</h4>
      <p class="vos">Jugador: ${currentState.history.myScore}</p>
      <p class="maquina">Máquina: ${currentState.history.computerScore}</p>
    </div>
	  <button-component class="button-back">Volver a jugar</button-component>
	  <button-component class="button-clean">Reiniciar puntajes</button-component>
    `;

  const buttonBack = div.querySelector(".button-back") as Element;
  buttonBack.addEventListener("click", () => {
    params.goTo("/play");
  });

  const buttonClean = div.querySelector(".button-clean") as Element;
  buttonClean.addEventListener("click", () => {
    state.cleanData();
    state.getStorage();
    params.goTo("/play");
  });

  const style = document.createElement("style");
  style.innerHTML = `
  .result {
    width: 100%;
    height: 100vh;
    padding: 35px 0 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .img-win {
    width: 250px;
  }
  .tablero {
    width: 259px;
    border: 10px solid #000;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 10px;
    margin-bottom: 20px;
  }
  .tablero > h4 {
    font-size: 55px;
    margin: 0 auto;
  }
  .tablero > p {
    font-size: 45px;
    margin: 0;
  }
  `;

  div.appendChild(styleBackground);
  div.appendChild(style);
  return div;
}
