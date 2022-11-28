import { initRouter } from "./router";
import "./components/button";
import "./components/text";


(function () {
  const root = document.getElementById("root");
  initRouter(root as Element);
})();
