(()=>{var t={404:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"/* Thumbnail Card */\n.thumbnail-prompt {\n    display: none;\n}\n\n.thumbnail-prompt.active {\n    display: flex;\n    background-color: whitesmoke;\n    max-width: 200px;    \n    margin: 0px;\n    padding: 0.75rem;\n    overflow: hidden;\n    border-radius: 5px;\n    box-shadow: 0 0 10px 2px rgba(200,200,200,1);\n}\n\n.thumbnail-form {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    width: 100%;\n}\n\n.thumbnail-form input {\n    background-color: whitesmoke;\n    border: none;\n    border-bottom: 1px solid black;\n    padding: 2px;\n}\n\n.thumbnail-form input:hover,\n.thumbnail-form input:focus{\n    border-bottom: 1px solid rgba(0,0,0,0.5);\n}\n\n.thumbnail-prompt > div{\n    text-align: center;\n}\n\n\n",""]);const c=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},730:(t,e,n)=>{"use strict";var r=n(379),o=n.n(r),a=n(795),i=n.n(a),c=n(569),s=n.n(c),u=n(565),l=n.n(u),d=n(216),p=n.n(d),m=n(589),f=n.n(m),b=n(404),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},340:(t,e,n)=>{"use strict";n.d(e,{Q:()=>o,b:()=>r});const r={newProjectButton:document.querySelector(".new-project-button"),thumbnailContainer:document.querySelector(".thumbnail-container")};r.newProjectButton.style.backgroundColor="red";const o={thumbnailPrompt:()=>{const t=document.createElement("div");t.classList.toggle("thumbnail-prompt"),t.classList.toggle("active");let e=document.createElement("div");e.textContent="Enter Project Data";let n=document.createElement("form");n.setAttribute("name","thumbnail-form"),n.setAttribute("class","thumbnail-form");let r=document.createElement("div"),o=document.createElement("label");o.setAttribute("for","title"),o.textContent="Title";let a=document.createElement("input");a.setAttribute("class","title"),a.setAttribute("id","title"),a.setAttribute("type","text"),r.append(o,a);let i=document.createElement("div"),c=document.createElement("label");c.textContent="Description";let s=document.createElement("input");i.append(c,s);let u=document.createElement("button");return u.setAttribute("type","submit"),u.textContent="Submit",t.appendChild(e),t.appendChild(n),n.append(r,i,u),document.body.appendChild(t),{thumbnailPrompt:t}}}},126:(t,e,n)=>{"use strict";var r=n(340);r.b.newProjectButton.addEventListener("click",(t=>{r.Q.thumbnailPrompt().classList.toggle("active")}))},666:()=>{},15:(t,e,n)=>{"use strict";let r={createProject:function(t,e){this.title=t,this.description=e}};r.createProject("B","C"),console.log(r.title+" "+r.description)},75:()=>{}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,n(75),n(666),n(15),n(340),n(126),n(730)})();