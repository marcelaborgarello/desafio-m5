import { initWelcome } from "./pages/welcome";
import { initInstuctions } from "./pages/instructions";
import { initPlay } from "./pages/play";
import { initResults } from "./pages/results";


const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/instructions/,
    component: initInstuctions,
  },
  {
    path: /\/play/,
    component: initPlay,
  },
  {
    path: /\/result/,
    component: initResults,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  const handleRoute = (route) => {
    // console.log("En handle route  recibo la ruta ", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  };

  if (location.pathname === "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function (event) {
    // console.log("En onpopstate recibo la ruta ", location.pathname);
    // console.log("POP STATE ", history.state);

    handleRoute(location.pathname);
  };
}
