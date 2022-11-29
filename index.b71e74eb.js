// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _button = require("./components/button");
var _text = require("./components/text");
(function() {
    const root = document.getElementById("root");
    (0, _router.initRouter)(root);
})();

},{"./router":"4QFWt","./components/button":"dZaQH","./components/text":"6Xncd"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _results = require("./pages/results");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.initInstuctions)
    },
    {
        path: /\/play/,
        component: (0, _play.initPlay)
    },
    {
        path: /\/result/,
        component: (0, _results.initResults)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    const handleRoute = (route)=>{
        // console.log("En handle route  recibo la ruta ", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    };
    if (location.pathname === "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function(event) {
        // console.log("En onpopstate recibo la ruta ", location.pathname);
        // console.log("POP STATE ", history.state);
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"fNSF3","./pages/instructions":"c8fMJ","./pages/play":"hbEIY","./pages/results":"4Cdh4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNSF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
const piedra = require("../../assets/piedra.png");
const papel = require("../../assets/papel.png");
const tijera = require("../../assets/tijera.png");
function initWelcome(params) {
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
    button?.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"../../assets/piedra.png":"767Wj","../../assets/papel.png":"7nWg2","../../assets/tijera.png":"l1720","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"767Wj":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "piedra.6936dd6c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7nWg2":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "papel.f2f61e08.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"l1720":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tijera.d883f1dc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c8fMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstuctions", ()=>initInstuctions);
var _state = require("../../state");
const piedra = require("../../assets/piedra.png");
const papel = require("../../assets/papel.png");
const tijera = require("../../assets/tijera.png");
(0, _state.state).getStorage();
function initInstuctions(params) {
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
    button?.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","../../assets/piedra.png":"767Wj","../../assets/papel.png":"7nWg2","../../assets/tijera.png":"l1720","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: {
            myScore: 0,
            computerScore: 0
        }
    },
    getStorage () {
        const local = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) this.data.history = local;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        const computerMove = ()=>{
            const move = [
                "tijera",
                "piedra",
                "papel"
            ];
            return move[Math.floor(Math.random() * 3)];
        };
        currentState.currentGame.computerPlay = computerMove();
        this.setHistory();
    },
    setHistory () {
        const currentState = this.getState();
        const currentWhoWins = this.whoWins();
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;
        if (currentWhoWins == "ganaste") this.setState({
            ...currentState,
            history: {
                myScore: myScore + 1,
                computerScore: computerScore
            }
        });
        if (currentWhoWins == "perdiste") this.setState({
            ...currentState,
            history: {
                myScore: myScore,
                computerScore: computerScore + 1
            }
        });
        this.savedData();
    },
    whoWins () {
        const currentState = this.getState();
        const jugada = currentState.currentGame;
        const empate = [
            jugada.myPlay == "tijera" && jugada.computerPlay == "tijera",
            jugada.myPlay == "piedra" && jugada.computerPlay == "piedra",
            jugada.myPlay == "papel" && jugada.computerPlay == "papel"
        ];
        if (empate.includes(true)) return "empate";
        const juego = [
            jugada.myPlay == "tijera" && jugada.computerPlay == "papel",
            jugada.myPlay == "piedra" && jugada.computerPlay == "tijera",
            jugada.myPlay == "papel" && jugada.computerPlay == "piedra"
        ];
        if (juego.includes(true)) return "ganaste";
        else return "perdiste";
    },
    savedData () {
        const currentState = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentState));
    },
    cleanData () {
        localStorage.setItem("data", JSON.stringify({
            myScore: 0,
            computerScore: 0
        }));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbEIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay);
var _state = require("../../state");
const piedra = require("../../assets/piedra.png");
const papel = require("../../assets/papel.png");
const tijera = require("../../assets/tijera.png");
function initPlay(params) {
    const div = document.createElement("div");
    div.classList.add("play");
    const style = document.createElement("style");
    let counter = 3;
    const countdown = setInterval(()=>{
        counter--;
        const counterEl = div.querySelector(".counter");
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
    const counterEl = div.querySelector(".counter");
    const handsChildren = div.querySelector(".hands").children;
    const handsDiv = div.querySelector(".hands");
    const handScissor = div.querySelector(".scissor");
    const handStone = div.querySelector(".stone");
    const handPaper = div.querySelector(".paper");
    const handsTop = div.querySelector(".hands-top");
    const handScissorTop = div.querySelector(".scissor-top");
    const handStoneTop = div.querySelector(".stone-top");
    const handPaperTop = div.querySelector(".paper-top");
    // console.log(handsChildren);
    // console.log(div.querySelectorAll(".hands > img"));
    for (const hands of handsChildren)hands.addEventListener("click", ()=>{
        const type = hands.getAttribute("class");
        // console.log(type);
        clearInterval(countdown);
        if (type == "scissor") {
            (0, _state.state).setMove("tijera");
            activeHands("tijera");
        } else if (type == "stone") {
            (0, _state.state).setMove("piedra");
            activeHands("piedra");
        } else if (type == "paper") {
            (0, _state.state).setMove("papel");
            activeHands("papel");
        }
    });
    function activeHands(param) {
        for (const hand of handsChildren)hand.classList.add("disabled");
        if (param == "tijera") {
            handScissor.classList.remove("disabled");
            handScissor.classList.add("actived");
            setTimeout(()=>{
                handStone.classList.add("hand-display-none");
                handPaper.classList.add("hand-display-none");
            }, 1000);
        }
        if (param == "piedra") {
            handStone.classList.remove("disabled");
            handStone.classList.add("actived");
            setTimeout(()=>{
                handScissor.classList.add("hand-display-none");
                handPaper.classList.add("hand-display-none");
            }, 1000);
        }
        if (param == "papel") {
            handPaper.classList.remove("disabled");
            handPaper.classList.add("actived");
            setTimeout(()=>{
                handScissor.classList.add("hand-display-none");
                handStone.classList.add("hand-display-none");
            }, 1000);
        }
        setTimeout(()=>{
            const machineMove = (0, _state.state).getState().currentGame.computerPlay;
            counterEl.remove();
            handsDiv.classList.add("active-hands");
            handsTop.classList.add("actived-hands-top");
            if (machineMove == "tijera") handScissorTop.classList.add("actived-hand-top");
            if (machineMove == "piedra") handStoneTop.classList.add("actived-hand-top");
            if (machineMove == "papel") handPaperTop.classList.add("actived-hand-top");
            setTimeout(()=>{
                params.goTo("/results");
            }, 1000);
        }, 1000);
    }
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","../../assets/piedra.png":"767Wj","../../assets/papel.png":"7nWg2","../../assets/tijera.png":"l1720","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cdh4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults);
var _state = require("../../state");
const resultImages = {
    empate: require("url:../../assets/empate.png"),
    ganaste: require("url:../../assets/ganaste.png"),
    perdiste: require("url:../../assets/perdiste.png")
};
function initResults(params) {
    const div = document.createElement("div");
    div.className = "result-cont";
    div.classList.add("result");
    const resultado = (0, _state.state).whoWins();
    const styleBackground = document.createElement("style");
    let imagen;
    if (resultado == "empate") imagen = resultImages.empate;
    if (resultado == "ganaste") imagen = resultImages.ganaste;
    else if (resultado == "perdiste") imagen = resultImages.perdiste;
    const currentState = (0, _state.state).getState();
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
    const buttonBack = div.querySelector(".button-back");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    const buttonClean = div.querySelector(".button-clean");
    buttonClean.addEventListener("click", ()=>{
        (0, _state.state).cleanData();
        (0, _state.state).getStorage();
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

},{"../../state":"1Yeju","url:../../assets/empate.png":"jaUdy","url:../../assets/ganaste.png":"fPDS1","url:../../assets/perdiste.png":"kVx1o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jaUdy":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "empate.2747c18e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fPDS1":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "ganaste.be9c0d7a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kVx1o":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "perdiste.d0f32551.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dZaQH":[function(require,module,exports) {
customElements.define("button-component", class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
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
});

},{}],"6Xncd":[function(require,module,exports) {
customElements.define("text-component", class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
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
});

},{}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire9acc")

//# sourceMappingURL=index.b71e74eb.js.map
