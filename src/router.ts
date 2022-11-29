import { initWelcome } from "./pages/welcome";
import { initInstuctions } from "./pages/instructions";
import { initPlay } from "./pages/play";
import { initResults } from "./pages/results";

const BASE_PATH = "/desafio-m5"; 

function isGithubPages() {
  return location.host.includes("github.io");
}

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
    const completePath = isGithubPages() ? BASE_PATH + path : path;

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (
    location.pathname == "/" ||
    location.host.includes("github.io")
  ) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}