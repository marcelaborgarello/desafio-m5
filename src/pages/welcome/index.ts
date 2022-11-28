const piedra = require('../../assets/piedra.png');
const papel = require('../../assets/papel.png');
const tijera = require('../../assets/tijera.png');


export function initWelcome(params) {
  const div = document.createElement("div");
  div.classList.add("welcome");
  const style = document.createElement("style");
  div.innerHTML = `
          <text-component type="title">Piedra Papel ó Tijera</text-component>
            <button-component class="btn-component">Empezar</button-component>
                <div class="hands">
                    <img src="${piedra}" alt="piedra" class="hand">
                    <img src="${papel}" alt="papel" class="hand">
                    <img src="${tijera}" alt="tijera" class="hand">
                </div>
    `;

  style.innerHTML = `
        .welcome{
        width: 100%;
		    height: 100vh;
		    padding-top: 50px;
		    display: flex;
		    align-items: center;
		    flex-direction: column;
		    justify-content: space-between;
        }

       

        .hands{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }
    `;

  const button = div.querySelector(".btn-component");
  button?.addEventListener("click", () => {
    params.goTo("/instructions");
  });
  div.appendChild(style);
  return div;
}
