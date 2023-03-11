(()=>{var e={404:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* Main Page */\n.main-page.active {\n    display: block;\n}\n\n.main-page {\n    display: none;\n}\n\n/* Thumbnail Card */\n.new-project-button:active {\n    transform: translateY(1px);\n}\n\n.thumbnail-prompt {\n    display: none;\n}\n\n.thumbnail-prompt.active {\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    max-width: 200px;    \n    margin: 0px;\n    padding: 0.75rem;\n    overflow: hidden;\n    border-radius: 5px;\n    box-shadow: 0 0 10px 2px rgba(200,200,200,1);\n\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.thumbnail-form {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    width: 100%;\n}\n\n.thumbnail-form input {\n    background-color: whitesmoke;\n    border: none;\n    border-bottom: 1px solid black;\n    padding: 2px;\n}\n\n.thumbnail-form input:hover,\n.thumbnail-form input:focus{\n    border-bottom: 1px solid rgba(0,0,0,0.5);\n}\n\n.thumbnail-prompt > div{\n    text-align: center;\n}\n\n.thumbnail-form > button.active{\n    transform: translateY(1px);\n}\n\n/* Project Preview Card */\n.preview-container {\n    display: grid;\n\n    /* Make if more adaptable */\n    grid-template-columns: repeat(5, 1fr);\n\n    gap: 5px;\n    padding: 5px;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 300px;\n    background-color: green;\n}\n\n.preview {\n    display: flex;\n    flex-direction: column;\n    padding: 6px;\n    align-items: center;\n    width: 100px;\n    height: 100px;\n    border-radius: 5px;\n    border: 2px solid black;\n    background-color: wheat;\n}\n\n.preview:hover {\n    box-shadow: 0 0 10px 0px rgba(0,0,0,0.8);\n}\n\n/* Header */\n.header {\n    display: grid;\n    background-color: bisque;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    height: 50px;\n    padding: 5px;\n    text-align: center;\n}\n\n/* Project Page */\n.project-page {\n    display: none;\n}\n\n.project-page.active {\n    display: block;\n}\n\n/*TEMP*/\n\n.todo-container {\n    background-color: aqua;\n    width: 100%;\n    height: 500px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 10px;\n    padding: 10px;\n}\n\n.todo-container .column {\n    height: 300px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.todo-container .column-header {\n    background-color: red;\n}\n.todo-container .column-content {\n    background-color: green;\n}\n.todo-container .new-card-button {\n    background-color: purple;\n}\n\n.card {\n    width: 30px;\n    height: 30px;\n    background-color: orange;\n    display: flex;\n    flex-direction: column;\n    gap: 5%;\n}\n\n.thumbnail-prompt {\n    display: none;\n}\n\n.card-prompt {\n    display: none;\n}\n\n.card-prompt.active {\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n    max-width: 200px;    \n    margin: 0px;\n    padding: 0.75rem;\n    overflow: hidden;\n    border-radius: 5px;\n    box-shadow: 0 0 10px 2px rgba(200,200,200,1);\n\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.card-form {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    width: 100%;\n}\n\n.card-form input {\n    background-color: whitesmoke;\n    border: none;\n    border-bottom: 1px solid black;\n    padding: 2px;\n}\n",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},730:(e,t,n)=>{"use strict";var r=n(379),o=n.n(r),a=n(795),i=n.n(a),c=n(569),l=n.n(c),d=n(565),s=n.n(d),u=n(216),p=n.n(u),m=n(589),b=n.n(m),v=n(404),h={};h.styleTagTransform=b(),h.setAttributes=s(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var b=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},340:(e,t,n)=>{"use strict";n.d(t,{AH:()=>c,Ac:()=>a,In:()=>l,KR:()=>i,bn:()=>o,tJ:()=>d});var r=n(126);const o=(()=>{const e=document.querySelector(".main-page"),t=document.querySelector(".project-page"),n=document.querySelector(".new-project-button"),r=document.querySelector(".thumbnail-container"),o=document.querySelector(".preview-container");return document.querySelector(".TEMP").addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active")})),{mainPage:e,projectPage:t,newProjectButton:n,thumbnailContainer:r,previewContainer:o}})(),a=(()=>{null!=document.querySelector(".thumbnail-prompt")&&document.querySelector(".thumbnail-prompt").remove();let e=document.createElement("div");e.setAttribute("class","thumbnail-prompt");let t=document.createElement("div");t.textContent="Enter Project Data";let n=document.createElement("form");n.setAttribute("name","thumbnail-form"),n.setAttribute("class","thumbnail-form");let r=document.createElement("div"),a=document.createElement("label");a.setAttribute("for","title"),a.textContent="Title";let i=document.createElement("input");i.setAttribute("class","title"),i.setAttribute("id","title"),i.setAttribute("type","text"),i.required=!0,r.append(a,i);let c=document.createElement("div"),l=document.createElement("label");l.textContent="Description";let d=document.createElement("input");d.required=!0,c.append(l,d);let s=document.createElement("button");return s.setAttribute("type","submit"),s.textContent="Submit",e.appendChild(t),e.appendChild(n),n.append(r,c,s),o.thumbnailContainer.appendChild(e),{thumbnailModal:e,titleInput:i,descriptionInput:d,thumbnailSubmit:s,thumbnailForm:n}})(),i=(e,t)=>{if(null==e||null==t)return;let n=document.createElement("button");n.setAttribute("class","preview");let r=document.createElement("div");r.textContent=e;let a=document.createElement("div");return a.textContent=t,n.append(r,a),o.previewContainer.appendChild(n),n},c=(()=>{let e=document.createElement("div");e.setAttribute("class","todo-container");let t=[];for(let n=0;n<3;n++){let o=document.createElement("div");o.setAttribute("class","column");let a=document.createElement("div");a.setAttribute("class","column-header");let i=document.createElement("div");i.setAttribute("class","column-content");let c=document.createElement("button");c.setAttribute("class","new-card-button"),c.textContent="Add Card",c.addEventListener("click",(()=>{(0,r.d)(c.parentNode)})),a.textContent="header",i.textContent="content",o.append(a,i,c),t.push(o),e.appendChild(t[n])}return t[0].classList.toggle("todo"),t[1].classList.toggle("in-progress"),t[2].classList.toggle("done"),{container:e,taskArray:t}})(),l=(()=>{let e=document.createElement("div");e.setAttribute("class","card");let t=document.createElement("div");t.setAttribute("class","info");let n=document.createElement("div");return n.setAttribute("class","date"),e.append(t,n),{container:e,info:t,date:n}})(),d=(()=>{null!=document.querySelector(".card-prompt")&&document.querySelector(".card-prompt").remove();let e=document.createElement("div");e.setAttribute("class","card-prompt");let t=document.createElement("form");t.setAttribute("name","thumbnail-form"),t.setAttribute("class","thumbnail-form");let n=document.createElement("input");n.setAttribute("class","info"),n.setAttribute("id","info"),n.setAttribute("type","text"),n.setAttribute("placeholder","Details"),n.required=!0;let r=document.createElement("input");r.setAttribute("class","date"),r.setAttribute("id","date"),r.setAttribute("type","text"),r.setAttribute("placeholder","Date"),r.required=!1;let o=document.createElement("button");return o.setAttribute("type","submit"),o.textContent="Submit",t.append(n,r,o),e.appendChild(t),{cardModal:e,cardForm:t,infoInput:n,dateInput:r}})()},126:(e,t,n)=>{"use strict";n.d(t,{d:()=>c});var r=n(340),o=n(15),a=n(75);const i=e=>{for(let t=0;t<e.todo.length;t++){let e=r.In.container;r.AH.taskArray[0].querySelector(".column-content").appendChild(e),console.log("added!")}},c=e=>{document.querySelector(".todo-container").appendChild(r.tJ.cardModal);const t=r.tJ;let n=e.getAttribute("class").substring(7);t.cardModal.classList.toggle("active"),t.cardForm.addEventListener("submit",(e=>{e.preventDefault();let r=t.cardForm.elements[0].value,o=t.cardForm.elements[1].value;t.cardForm.reset(),t.cardModal.classList.remove("active"),null!=r&&a.v.getActiveProject().add(n,r,o),i(a.v.getActiveProject())}))};(()=>{const e=r.Ac;r.bn.newProjectButton.addEventListener("click",(()=>{e.thumbnailModal.classList.toggle("active")})),e.thumbnailForm.addEventListener("submit",(t=>{t.preventDefault();let n=e.thumbnailForm.elements[0].value,c=e.thumbnailForm.elements[1].value;e.thumbnailForm.reset(),e.thumbnailModal.classList.remove("active");let l=(0,o.I)();l.create(n,c),a.v.addToStorage(l),(0,r.KR)(n,c).addEventListener("click",(()=>{r.bn.mainPage.classList.toggle("active");let e=r.bn.projectPage;e.classList.toggle("active"),e.appendChild(r.AH.container),a.v.setActiveProject(l),i(a.v.getActiveProject())}))}))})()},666:()=>{},15:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});const r=(e,t)=>({info:e,date:t}),o=()=>({create:function(e,t){this.title=e,this.description=t,this.todo=[],this.inProgress=[],this.done=[]},add:function(e,t,n){"todo"===e?this.todo.push(r(t,n)):"in-progress"===e?this.inProgress.push(r(t,n)):"done"===e&&this.done.push(r(t,n))},todo:void 0,inProgress:void 0,done:void 0,title:void 0,description:void 0})},75:(e,t,n)=>{"use strict";n.d(t,{v:()=>r});const r=(()=>{let e,t=[];return{getStorage:()=>t,addToStorage:e=>{t.push(e)},setActiveProject:t=>{e!==t&&(e=t)},getActiveProject:()=>e}})()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,n(75),n(666),n(15),n(126),n(730),n(340)})();