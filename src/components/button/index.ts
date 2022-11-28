customElements.define(
  "button-component",
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const button = document.createElement("button");
      const style = document.createElement("style");
      button.className = "button";

      style.innerHTML = `
                .button {
                    color: #fff;
                    width: 322px;
                    height: 87px;
                    font-size: 45px;
                    text-align: center;
                    border-radius: 10px;
                    background: #006CFC;
                    box-sizing: border-box;
                    border: 10px solid #001997;
                    font-family: var(--font-button);
                    margin-bottom: 50px;
                }
                `;

      button.textContent = this.textContent;
      this.shadow.appendChild(button);
      this.shadow.appendChild(style);
    }
  }
);
