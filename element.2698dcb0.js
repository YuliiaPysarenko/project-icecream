parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[];exports.default=e;
},{}],"u67c":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}const a={gallery:document.querySelector(".js-gallery"),image:document.createElement("img"),lightbox:document.querySelector(".lightbox"),btn:document.querySelector('[data-action="close-lightbox"]'),modal:document.querySelector(".lightbox__content"),lightbox__image:document.querySelector(".lightbox__image")},l=({preview:e,original:t,description:a})=>`<li class="gallery__item">\n<a\n  class="gallery__link"\n  href=${t}\n>\n  <img\n    class="gallery__image"\n    src=${e}\n    data-source=${t}\n    alt=${a}\n  />\n</a>\n</li>`,i=e.default.reduce((e,t)=>e+l(t),"");function n(e){e.preventDefault(),"IMG"===e.target.nodeName&&("IMG"===e.target.nodeName&&(a.lightbox.classList.add("is-open"),document.body.classList.toggle("modal-open"),a.lightbox__image.src=e.target.getAttribute("data-source"),a.lightbox__image.srcset=e.target.getAttribute("data-source-2x"),a.lightbox__image.alt=e.target.alt),window.addEventListener("keyup",c))}function o(e){a.lightbox.classList.remove("is-open"),document.body.classList.toggle("modal-open"),a.lightbox__image.src="",a.lightbox__image.alt="",a.lightbox__image.srcset="",window.removeEventListener("keyup",c)}function r(e){e.target===e.currentTarget&&o()}function c(e){"Escape"===e.code&&o()}a.gallery.insertAdjacentHTML("afterbegin",i),a.image.classList.add("gallery__image"),a.gallery.addEventListener("click",n),a.btn.addEventListener("click",o),a.modal.addEventListener("click",r);
},{"./gallery-items.js":"q5Rn"}]},{},["u67c"], null)
//# sourceMappingURL=/teem-project-icecream/element.2698dcb0.js.map