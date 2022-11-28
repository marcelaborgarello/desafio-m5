customElements.define(
  "text-component",
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }

  render() {
    const atributo = this.getAttribute("type");

    const div = document.createElement("div");
    div.className = atributo || "text";
    div.textContent = this.textContent;

    const style = document.createElement("style");

    style.textContent = `
            .title{
                color: #009048;
                font-family: "American Typewriter";
                font-size: 80px;
                font-weight: 700;
                width: 284px;
                height: 204px;
                margin-bottom: 100px;
            }

            .text {
                font-family: "American Typewriter";
                font-size: 40px;
                font-weight: 600;
                text-align: center;
                width: 284px;
                height: 204px;
                margin-bottom: 100px;

            }
            `;

            div.textContent = this.textContent;
            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
  }
}
);
