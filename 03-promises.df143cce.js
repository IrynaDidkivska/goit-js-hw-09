!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("6JpON");function l(e,o){var n=Math.random()>.3;return new Promise((function(t,i){n?t({position:e,delay:o}):i({position:e,delay:o})}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault(),console.dir(o.target.elements);var n=o.target.elements,t=n.delay,i=n.step,a=n.amount,c=Number(t.value);console.log(a.value);for(var u=1;u<=Number(a.value);u++)l(u,c).then((function(o){var n=o.position,t=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),setTimeout(e(r).Notify.success,t,"✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){var n=o.position,t=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),setTimeout(e(r).Notify.failure,t,"❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),c+=Number(i.value)}))}();
//# sourceMappingURL=03-promises.df143cce.js.map
