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
})({"8TtF2":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
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

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _domElements = require("./utility/domElements");
var _functions = require("./utility/functions");
var _countries = require("./utility/countries");
var _countriesDefault = parcelHelpers.interopDefault(_countries);
var _regeneratorRuntime = require("regenerator-runtime");
(function() {
    _domElements.countries_search_bar.addEventListener("input", _functions.recommendCountry);
    _domElements.countries_search_bar.addEventListener("keydown", _functions.countryScroll.exec);
    _domElements.get_weather_button.addEventListener("pointerdown", _functions.initiatWeather);
    _domElements.daily_weather_selector.addEventListener("pointerdown", (e)=>{
        _functions.selectTimeSelector(e.target);
        _functions.showCurrentWeather();
    });
    _domElements.hourly_weather_selector.addEventListener("pointerdown", (e)=>{
        _functions.selectTimeSelector(e.target);
        _functions.showHourlyWeather();
    });
})();
const storage = window.localStorage;
if (!storage.countries) (0, _countriesDefault.default)();

},{"./utility/domElements":"3u5hQ","./utility/functions":"19b4x","./utility/countries":"iTzTk","regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3u5hQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main_header", ()=>main_header);
parcelHelpers.export(exports, "page_content", ()=>page_content);
parcelHelpers.export(exports, "all_countries_holder", ()=>all_countries_holder);
parcelHelpers.export(exports, "countries_search_bar", ()=>countries_search_bar);
parcelHelpers.export(exports, "autocomplete_holder", ()=>autocomplete_holder);
parcelHelpers.export(exports, "get_weather_button", ()=>get_weather_button);
parcelHelpers.export(exports, "daily_weather_selector", ()=>daily_weather_selector);
parcelHelpers.export(exports, "hourly_weather_selector", ()=>hourly_weather_selector);
parcelHelpers.export(exports, "daily_weather_holder", ()=>daily_weather_holder);
parcelHelpers.export(exports, "hourly_weather_holder", ()=>hourly_weather_holder);
parcelHelpers.export(exports, "header_weather_parrent", ()=>header_weather_parrent);
parcelHelpers.export(exports, "sunmoon", ()=>sunmoon);
parcelHelpers.export(exports, "country_name", ()=>country_name);
parcelHelpers.export(exports, "current_temperture", ()=>current_temperture);
parcelHelpers.export(exports, "feels_like_temperture", ()=>feels_like_temperture);
parcelHelpers.export(exports, "humidity", ()=>humidity);
parcelHelpers.export(exports, "wind_speed", ()=>wind_speed);
parcelHelpers.export(exports, "daily_advice", ()=>daily_advice);
parcelHelpers.export(exports, "actual_advice", ()=>actual_advice);
parcelHelpers.export(exports, "all_weekly_weathers", ()=>all_weekly_weathers);
parcelHelpers.export(exports, "hourly_weather_template", ()=>hourly_weather_template);
parcelHelpers.export(exports, "e", ()=>e);
const main_header = document.querySelector("#main-header");
const page_content = document.querySelector(".page-content");
const all_countries_holder = document.querySelector(".all-countries-holder");
const countries_search_bar = document.querySelector(".countries-search-bar");
const autocomplete_holder = document.querySelector(".autocomplete-countries-holder");
const get_weather_button = document.querySelector(".search-country-button");
const daily_weather_selector = document.querySelector(".daily-weather-selector");
const hourly_weather_selector = document.querySelector(".hourly-weather-selector");
const daily_weather_holder = document.querySelector(".daily-weather-holder");
const hourly_weather_holder = document.querySelector(".hourly-weather-holder");
const header_weather_parrent = document.querySelector(".weather-header-parrent");
const sunmoon = document.querySelector(".sunmoon");
const country_name = document.querySelector(".selected-country-name");
const current_temperture = document.querySelector(".current-tempeture");
const feels_like_temperture = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".current-wind-speed");
const daily_advice = document.querySelector(".daily-advice");
const actual_advice = document.querySelector(".actual-advice");
const all_weekly_weathers = document.querySelectorAll(".weekly-weather");
const hourly_weather_template = document.querySelector("#hourly-weather-template");
const e = document.querySelector(".a");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"19b4x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countryScroll", ()=>countryScroll);
// data functions
parcelHelpers.export(exports, "initiatWeather", ()=>initiatWeather);
parcelHelpers.export(exports, "getWeather", ()=>getWeather);
parcelHelpers.export(exports, "recommendCountry", ()=>recommendCountry);
// utils
//  Header Weather
parcelHelpers.export(exports, "setUpHeaderWeather", ()=>setUpHeaderWeather);
// current weather
parcelHelpers.export(exports, "displayCurrentCountryName", ()=>displayCurrentCountryName);
parcelHelpers.export(exports, "displayCurrentWeather", ()=>displayCurrentWeather);
parcelHelpers.export(exports, "loadAdvice", ()=>loadAdvice);
parcelHelpers.export(exports, "weeklyWeather", ()=>weeklyWeather);
// utils
// hourly weather
parcelHelpers.export(exports, "displayHourlyWeather", ()=>displayHourlyWeather);
//unsided utils
parcelHelpers.export(exports, "showElement", ()=>showElement);
parcelHelpers.export(exports, "selectTimeSelector", ()=>selectTimeSelector);
parcelHelpers.export(exports, "showCurrentWeather", ()=>showCurrentWeather);
parcelHelpers.export(exports, "showHourlyWeather", ()=>showHourlyWeather);
parcelHelpers.export(exports, "setUpIcons", ()=>setUpIcons);
parcelHelpers.export(exports, "clearWeather", ()=>clearWeather) // console.log(getRoundedHour(1661983200 , 3600));
 // console.log(UT.toISOString(1662069600 + 3600));
;
var _regeneratorRuntime = require("regenerator-runtime");
var _domElements = require("./domElements");
const storage = window.localStorage;
const UT = require("unixtimejs");
const countryScroll = function() {
    let first = true;
    let index = -1;
    const container = _domElements.autocomplete_holder;
    function clearSelected() {
        Array.from(container.children).forEach((countryDiv)=>{
            countryDiv.classList.remove("selected");
        });
    }
    function selectChild(child) {
        child.classList.add("selected");
        child.scrollIntoView(false);
    }
    function exec(e) {
        const container_children = container.children.length - 1;
        if (e.key === "ArrowUp") index--;
        else if (e.key === "ArrowDown") index++;
        if (index > container_children) index = 0;
        if (index < 0) index = container_children;
        if (first) {
            index = 0;
            first = false;
        }
        // console.log({index});
        if (e.key === "Enter") {
            evaluateSearchBarFromDIv_nonEvent(container.children[index]);
            return;
        }
        const child = container.children[index];
        if (!child) return;
        clearSelected();
        selectChild(child);
    }
    function reset(params) {
        index = 0;
        first = true;
    }
    return {
        exec,
        reset
    };
}();
async function initiatWeather() {
    const data = await getWeather();
    displayWeather(data);
}
function displayWeather([demoWeatherData, weatherData]) {
    setUpHeaderWeather(weatherData);
    displayCurrentCountryName(demoWeatherData, weatherData);
    displayCurrentWeather(weatherData.current);
    loadAdvice();
    weeklyWeather(weatherData.daily);
    // display hourly
    displayHourlyWeather(weatherData.hourly, weatherData.timezone_offset);
    document.querySelector(".page-content").classList.remove("hide");
    document.querySelector(".header-weather-inactive").classList.remove("header-weather-inactive");
}
async function getWeather() {
    const searched_country = {
        name: getCountryName()
    };
    const response_demo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searched_country.name}&units=metric&appid=2b2a40cd3ec624b3ee5a2dc5c5564053`, {
        mode: "cors"
    });
    const data_demo = await response_demo.json();
    searched_country.lat = data_demo.coord.lat;
    searched_country.lon = data_demo.coord.lon;
    const response_final = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${searched_country.lat}&lon=${searched_country.lon}&units=metric&exclude=minutely,alerts&appid=20f7632ffc2c022654e4093c6947b4f4`, {
        mode: "cors"
    });
    const data_final = await response_final.json();
    console.log(data_final);
    return [
        data_demo,
        data_final
    ];
}
function getCountryName() {
    let name = _domElements.countries_search_bar.value;
    return name.replace(/^\s+/, "").replace(/\s+$/, "").replace(/(,\s+)/g, ",").replace(/(\s+,)/g, ",").replace(/\s+/g, "+");
}
function recommendCountry(e) {
    const countries = JSON.parse(storage.countries);
    const search_value = e.target.value.toLowerCase().replace(/^\s+/, "").replace(/\s+$/, "");
    // reset
    _domElements.autocomplete_holder.innerHTML = "";
    countryScroll.reset();
    if (!countries) return;
    if (!search_value) return;
    countries.forEach((country)=>{
        const cname = country.name.toLowerCase();
        const api_name = country.api_name;
        if (cname.includes(search_value)) {
            const country_div = renderCountry(cname, search_value, api_name);
            _domElements.autocomplete_holder.append(country_div);
        }
    });
}
function renderCountry(value, searched_value, api_name) {
    const div = document.createElement("div");
    div.classList.add("recommended-country");
    div.dataset.value = api_name;
    div.addEventListener("pointerdown", evaluateSearchBarFromDIv);
    const [startName, endName] = value.split(searched_value);
    div.innerHTML = `${startName}<strong>${searched_value}</strong>${endName}`;
    return div;
}
function evaluateSearchBarFromDIv(e) {
    _domElements.autocomplete_holder.innerHTML = "";
    _domElements.countries_search_bar.value = e.target.dataset.value;
}
function evaluateSearchBarFromDIv_nonEvent(div) {
    _domElements.autocomplete_holder.innerHTML = "";
    _domElements.countries_search_bar.value = div.dataset.value;
}
function setUpHeaderWeather(data_final) {
    const time = getRoundedHour(data_final.current.dt, data_final.timezone_offset);
    setUpSunmoon(time);
    setUpPageColor(data_final, time);
    renderClouds(data_final);
}
function setUpSunmoon(time) {
    const sunmoon = _domElements.sunmoon;
    clearWeather(sunmoon);
    const hour = parseInt(time.slice(0, 2));
    if (typeof hour !== "number") return;
    if (6 >= hour || hour >= 19) sunmoon.classList.add("moon");
}
function setUpPageColor(data, time) {
    const code = data.current.weather[0].icon;
    let main_body_color;
    switch(code){
        case "09d":
            main_body_color = "rainy";
            break;
        case "11d":
            main_body_color = "stormy";
            break;
        case "13d":
            main_body_color = "snowy";
            break;
        default:
            main_body_color = "clear";
            break;
    }
    changeBodyColor(main_body_color);
    const hour = parseInt(time.slice(0, 2));
    if (typeof hour !== "number") return;
    if (6 >= hour || hour >= 19) changeBodyColor("comp-night");
}
function changeBodyColor(color) {
    document.documentElement.style.setProperty("--current-weather-clr", getComputedStyle(document.body).getPropertyValue(`--${color}`));
}
function renderClouds(data) {
    const code = data.current.weather[0].icon;
    const clouds = document.querySelectorAll(".cloud");
    clouds.forEach((cloud)=>{
        setUpIcons(cloud, code);
    });
}
function displayCurrentCountryName(data_demo, data_final) {
    const time = getRoundedHour(data_final.current.dt, data_final.timezone_offset);
    _domElements.country_name.innerText = data_demo.name + " " + time;
}
function displayCurrentWeather(data) {
    const main_temp = Math.floor(data.temp);
    const feels_like = Math.floor(data.feels_like);
    const humidity = Math.floor(data.humidity);
    const wind_speed = Math.floor(data.wind_speed);
    _domElements.current_temperture.innerText = main_temp;
    _domElements.feels_like_temperture.innerHTML = " Feels Like : <br> " + feels_like;
    _domElements.humidity.innerHTML = " Humidity : <br>" + humidity;
    _domElements.wind_speed.innerHTML = "Wind Speed : <br>" + wind_speed;
    setUpIcons(_domElements.current_temperture, data.weather[0].icon);
}
function loadAdvice() {
    fetch("https://api.adviceslip.com/advice", {
        mode: "cors"
    }).then((res)=>{
        if (!res.ok) {
            _domElements.daily_advice.innerText = ' " everything matters , but nothing matters that much , unless its worshiping the great allah " ';
            return;
        }
        return res.json();
    }).then((data)=>{
        _domElements.actual_advice.innerText = ` \" ${data.slip.advice} \" `;
        if (data.slip.advice.length > 70) {
            loadAdvice();
            return;
        }
    });
}
function weeklyWeather(data) {
    const days_of_week = [
        "monday",
        "thuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];
    let next_day_index = new Date().getDay();
    // let next_day_index = current_day_index + 1
    for(let i = 0; i < 7; i++){
        const day = _domElements.all_weekly_weathers[i];
        const day_name = day.querySelector(".day-of-week");
        const day_temperture = day.querySelector(".day-temperture");
        const average_temp = Math.floor((data[i].temp.min + data[i].temp.max) / 2);
        const day_icon = day.querySelector(".day-weather");
        const icon_code = data[i].weather[0].icon;
        const min_temp = day.querySelector(".day-min-temperture");
        const max_temp = day.querySelector(".day-max-temperture");
        day_name.innerText = days_of_week[next_day_index];
        day_temperture.innerText = average_temp;
        min_temp.innerText = Math.floor(data[i].temp.min);
        max_temp.innerText = Math.floor(data[i].temp.max);
        setUpIcons(day_icon, icon_code);
        next_day_index++;
        if (next_day_index > 6) next_day_index = 1;
    }
}
function displayHourlyWeather(hours, timezone_offset) {
    // hours is an array of todays weather starting
    // with  NOW  
    // I WANT IT TO START WITH 7
    const today_hours = todaysHours(hours);
    today_hours.forEach((hour)=>{
        const time = getHourAndMinute(hour.dt, timezone_offset);
        hour.hour = time.hour;
        hour.minute = time.minute;
    });
    const sorted_hours = sortHours(today_hours);
    //r eset
    document.querySelector(`.morning-weather`).innerHTML = "";
    document.querySelector(`.night-weather`).innerHTML = "";
    for(let i = 7; i <= 18; i++)renderHourWeather(sorted_hours[i], "morning");
    for(let i1 = 19; i1 <= 23; i1++)renderHourWeather(sorted_hours[i1], "night");
    for(let i2 = 0; i2 <= 6; i2++)renderHourWeather(sorted_hours[i2], "night");
}
function renderHourWeather(hourData, time) {
    const hourDiv = _domElements.hourly_weather_template.content.cloneNode(true).children[0];
    const time_element = hourDiv.querySelector(".hour");
    const chance_of_rain_element = hourDiv.querySelector(".chance-of-rain");
    const temperture_element = hourDiv.querySelector(".temperture-with-icon.temperture");
    time_element.innerText = `${hourData.hour}:${hourData.minute}`;
    chance_of_rain_element.innerText = `Rain Chance: ${Math.ceil(hourData.pop)}`;
    temperture_element.innerText = Math.round(hourData.temp);
    setUpIcons(temperture_element, hourData.weather[0].icon);
    const parrent = document.querySelector(`.${time}-weather`);
    parrent.append(hourDiv);
}
// utils
function getRoundedHour(dt, offest = 0) {
    const utc_string = UT.toISOString(dt + offest);
    const hour = utc_string.slice(11, 13);
    const minute = utc_string.slice(14, 16);
    return `${hour}:${minute}`;
}
function getHourAndMinute(dt, offest = 0) {
    const utc_string = UT.toISOString(dt + offest);
    const hour = utc_string.slice(11, 13);
    const minute = utc_string.slice(14, 16);
    return {
        hour,
        minute
    };
}
function todaysHours(hours) {
    const halfed = [];
    for(let i = 0; i < hours.length / 2; i++)halfed.push(hours[i]);
    return halfed;
}
function sortHours(hours) {
    return hours.sort((hour1, hour2)=>parseInt(hour1.hour) - parseInt(hour2.hour));
}
function showElement(element, visibility) {
    element.classList.toggle("hide", !visibility);
}
function selectTimeSelector(element) {
    [
        _domElements.hourly_weather_selector,
        _domElements.daily_weather_selector
    ].forEach((selector)=>{
        selector.classList.remove("selected");
    });
    element.classList.add("selected");
}
function showCurrentWeather() {
    _domElements.hourly_weather_holder.classList.add("hiden");
    setTimeout(()=>{
        _domElements.daily_weather_holder.classList.remove("hiden");
    }, 500);
    _domElements.page_content.classList.remove("big");
}
function showHourlyWeather() {
    _domElements.daily_weather_holder.classList.add("hiden");
    setTimeout(()=>{
        _domElements.hourly_weather_holder.classList.remove("hiden");
    }, 500);
    _domElements.page_content.classList.add("big");
    _domElements.page_content.style.setProperty("--height", _domElements.hourly_weather_holder.getBoundingClientRect().height + "px");
}
function setUpIcons(element, code) {
    clearWeather(element);
    switch(code){
        case "01d":
            element.classList.add("sunny");
            break;
        case "01n":
            element.classList.add("moon");
            break;
        case "02d":
            element.classList.add("cloudy-sun");
            break;
        case "02n":
            element.classList.add("cloudy-moon");
            break;
        case "03d":
            element.classList.add("cloudy");
            break;
        case "09d":
            element.classList.add("rainy");
            break;
        case "11d":
            element.classList.add("stormy");
            break;
        case "13d":
            element.classList.add("snowy");
            break;
        default:
            element.classList.add("cloudy");
            break;
    }
}
function clearWeather(element) {
    element.classList.remove("sunny", "moon", "cloudy", "cloudy-sun", "cloudy-moon", "rainy", "stormy", "snowy");
}

},{"regenerator-runtime":"dXNgZ","./domElements":"3u5hQ","unixtimejs":"lFnpv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"lFnpv":[function(require,module,exports) {
module.exports = class Unixtimejs {
    static now() {
        return Unixtimejs.fromDate(new Date());
    }
    static fromDate(date) {
        if (!date) return null;
        return Unixtimejs.fromJSTime(date.getTime());
    }
    static fromJSTime(jstime) {
        if (!jstime) return null;
        return Math.floor(jstime / 1000);
    }
    static toUTCString(unixts) {
        let jstime = unixts === undefined ? Date.now() : unixts * 1000;
        return new Date(jstime).toUTCString();
    }
    // @param {String} - eg: '2016-04-01 05:00:00+09:00'
    static fromUTCString(s) {
        if (!s) return null;
        let jstime = new Date(s).getTime();
        return Unixtimejs.fromJSTime(jstime);
    }
    // @param tzOffset {String} - timezone offset string. eg: "+09:00"
    static toISOString(unixts, tzOffset) {
        if (unixts === undefined) unixts = Unixtimejs.fromJSTime();
        const jstime = unixts * 1000;
        if (!tzOffset) return new Date(jstime).toISOString().replace(".000", "");
        // offset ms
        let tzOffsetMs;
        try {
            tzOffsetMs = _getTzOffsetMs(tzOffset);
        } catch (e) {
            throw e;
        }
        const localISOTime = new Date(jstime - tzOffsetMs).toISOString().slice(0, -1).replace(".000", "");
        const ret = tzOffset ? localISOTime + tzOffset : localISOTime + "Z"; // '2016-04-01T05:00:00+09:00'
        return ret;
        function _getTzOffsetMs(tzOffset) {
            // tzOffset: eg: '+09:00'
            if (!tzOffset) return new Date().getTimezoneOffset() * 60000;
            let [hour, min] = tzOffset.split(":");
            const plusMinus = hour.substring(0, 1);
            if (plusMinus !== "+" && plusMinus !== "-") throw Error(`'${tzOffset}': invalid timezone offset format`);
            hour = parseInt(hour.substring(1));
            min = parseInt(min);
            let ms = hour * 3600000 + min * 60000;
            return plusMinus == "+" ? -ms : ms;
        }
    }
    // @param {String} - eg: '2016-04-01T05:00:00+09:00'
    static fromISOString(s) {
        if (!s) return null;
        let jstime = new Date(s).getTime();
        return Unixtimejs.fromJSTime(jstime);
    }
    static toLocaleString(unixts) {
        let jstime = unixts === undefined ? Date.now() : unixts * 1000;
        return new Date(jstime).toLocaleString();
    }
    /**
   * Get UnixTimestamp from localeString
   * @param {String} - eg: "2018/1/31 15:22:33"
   * @param format {Array} - eg: "Y/M/D h:m:s" 
   *  NOTE: Available date format charactors: "Y", "M", "D", "h", "m", "s"
   */ static fromLocaleString(s, format) {
        if (!s) return null;
        if (!format) return Unixtimejs.fromDate(new Date(s));
        const ret = {
            Y: null,
            M: null,
            D: null,
            h: null,
            m: null,
            s: null
        };
        const arr = s.split(/(\d+)/);
        let currentIdx = 0;
        for(let len = arr.length, i = 0; i < len; i++){
            let part = arr[i];
            if (!part) continue;
            let symbol = format[currentIdx];
            if (isNumeric(part)) ret[symbol] = parseInt(part);
            else {
                if (symbol !== part) throw Error(`"${format}": invalid format`);
            }
            currentIdx += 1;
        }
        if (ret.Y === null || ret.M === null || ret.D === null || ret.h === null || ret.m === null || ret.s === null) return null;
        return Unixtimejs.fromJSTime(new Date(ret.Y, ret.M - 1, ret.D, ret.h, ret.m, ret.s).getTime());
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }
};

},{}],"iTzTk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function setUpCountries() {
    const storage = window.localStorage;
    if (storage.countries) return;
    fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((data)=>{
        const ALL_COUNTRIES = data;
        const arabic_names = [];
        const eng_names = [];
        for(let i = 0; i < ALL_COUNTRIES.length; i++){
            const country = ALL_COUNTRIES[i];
            const cname = country.name.common;
            eng_names.push({
                name: cname,
                api_name: cname
            });
            if (country.name?.nativeName?.ara) {
                const araname = country.name?.nativeName?.ara.common;
                arabic_names.push({
                    name: araname,
                    api_name: cname
                });
            }
        }
        const all_names = arabic_names.concat(eng_names);
        storage.setItem("countries", JSON.stringify(all_names));
    });
}
exports.default = setUpCountries;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequirec52b")

//# sourceMappingURL=index.4d6bcbeb.js.map
