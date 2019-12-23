!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports={buildTables:function(e,t,n){let r=document.createElement("h3");r.innerHTML=n,r.style.fontSize="22px",document.getElementById(t).appendChild(r);let o=document.createElement("table"),i=document.createElement("tr");for(let t=0;t<e[0].length;t++){let n=document.createElement("th");n.innerHTML=0==t?"<input disabled = 'true' value = "+e[0][t]+">":"<input  value = "+e[0][t]+">",i.appendChild(n)}o.appendChild(i);for(let t=1;t<e.length;t++){i=document.createElement("tr");for(let n=0;n<e[t].length;n++)data=0==n?document.createElement("th"):document.createElement("td"),data.innerHTML="<input  type='text' value ="+e[t][n]+">",i.appendChild(data);o.appendChild(i)}o.setAttribute("id",t+"-1"),document.getElementById(t).appendChild(o)},changeColorCells:function(e,t){$(e).css("background-color",t)},deleteTable:function(e){document.getElementById(e).innerHTML=""},changeColorText:function(e,t){$(e).css("color",t)}}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r("!!../../node_modules/css-loader/dist/cjs.js!./style.css",o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function l(e,t,n){e=n.base?e+n.base:e,o[e]||(o[e]=[]);for(var r=0;r<t.length;r++){var i=t[r],a={css:i[1],media:i[2],sourceMap:i[3]},l=o[e];l[r]?l[r].updater(a):l.push({updater:b(a,n)})}for(var d=t.length;d<o[e].length;d++)o[e][d].updater();o[e].length=t.length,0===o[e].length&&delete o[e]}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,s=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var i=h++;n=f||(f=d(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i()),l(e,t,n),function(t){l(e,t||[],n)}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"body{\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\n.content-flexbox {\r\n  padding-top: 2%;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50%;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n}\r\n\r\n#piechart{\r\n  margin-top: 50px;\r\n  margin-left: 0;\r\n}\r\n\r\n.chart-flexbox {\r\n  display: flex;\r\n  width: 50%;\r\n  height: 50%;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header{\r\n  text-align: center;\r\n  color: whitesmoke;\r\n  font: bold  110% serif;\r\n  width: 99%;\r\n  height: 80px;\r\n  background-color: lightskyblue;\r\n  margin: 0 auto;\r\n}\r\n.wrapper{\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content-flexbox > div {\r\n  padding-right: 50px;\r\n}\r\n\r\n#PieChart{\r\n  width: 50%;\r\n}\r\n\r\nbutton{\r\n  width: 70%;\r\n  height: 30px;\r\n  margin-left: 10%;\r\n}\r\n\r\ntd > input {\r\n  background-color: whitesmoke;\r\n  text-align: center;\r\n  color: black;\r\n  width: 100% auto;\r\n  font-size: 15px;\r\n}\r\n\r\ntable{\r\n  margin-bottom: 2%;\r\n}\r\n\r\ninput{\r\n  width: 100%;\r\n}\r\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var o=[].concat(e[r]);n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o)}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);google.charts.load("current",{packages:["corechart"]});var i=[];function a(e,t,n,r,o){this.name=ko.observable(e),this.company=ko.observable(t),this.gender=ko.observable(n),this.dispersia=ko.observable(r),this.math=ko.observable(o)}i.push(new a("Имя","Пол","Коэффициент","Адаптация","Девианта"));var l={phones:ko.observableArray(i),nameForAdd:ko.observable(""),dispersiaForAdd:ko.observable(""),nameForDelete:ko.observable(""),companyForAdd:ko.observableArray(["Мужской","Женский"]),colorForText:ko.observable(""),colorForCells:ko.observable(""),colorForInCells:ko.observable("")};function d(){let e=0,t=0;for(let n=0;n<l.phones().length;n++)"Мужской"==l.phones()[n].company()?e++:"Женский"==l.phones()[n].company()&&t++;var n=google.visualization.arrayToDataTable([["Test","%"],["М",e],["Ж",t]]);new google.visualization.PieChart(document.getElementById("piechart")).draw(n,{title:"Cотношение мужчин и женщин в исследовании",sliceVisibilityThreshold:.2})}window.onload=function(){document.getElementById("nado").innerHTML='<table id = "fack" data-bind = "foreach: phones"><table>';let e=document.createElement("tr");for(let t=0;t<5;t++){let n=document.createElement("td");0==t?n.innerHTML="<input  disabled data-bind='textInput: name'>":1==t?n.innerHTML="<input disabled = 'true' data-bind='textInput: company'>":2==t?n.innerHTML="<input disabled = 'true' data-bind='textInput: gender'>":3==t?n.innerHTML="<input disabled = 'true' data-bind='textInput: dispersia'>":4==t&&(n.innerHTML="<input disabled = 'true' data-bind='textInput: math'>"),n.setAttribute("class","mystyle"),e.appendChild(n)}document.getElementById("fack").appendChild(e),ko.applyBindings(l),d()},l.phones.subscribe((function(){1==l.phones().length&&document.getElementById("delete").setAttribute("disabled","true"),document.getElementById("delete").removeAttribute("disabled"),d(),l.nameForAdd(""),l.dispersiaForAdd("")})),$("#delete").click((function(){if(l.phones().length>1)for(let e=1;e<l.phones().length;e++)if(l.phones()[e].name()==l.nameForDelete())return l.phones.splice(e,1),void(document.getElementById("delete-input").value="");alert("Такого человека нет!")})),l.nameForAdd.subscribe((function(){""!=l.nameForAdd()&&""!=l.dispersiaForAdd()?document.getElementById("add").removeAttribute("disabled"):document.getElementById("add").setAttribute("disabled","true")})),$("#add").click((function(){let e=document.getElementsByClassName("options-for-add");for(let t=0;t<e.length;t++)e[t].value="";var t;l.phones.push(new a(l.nameForAdd(),$("#select-gender option:selected").text(),l.dispersiaForAdd(),(t=l.dispersiaForAdd(),(2*Math.cos(t)/(Math.sqrt(t)*Math.sqrt(t+1))+.1).toFixed(5)),function(e){return(Math.log(e)/2*Math.sin(e)+10).toFixed(5)}(l.dispersiaForAdd()))),o.a.changeColorText("td > input",l.colorForText()),o.a.changeColorCells(".mystyle",l.colorForCells()),o.a.changeColorCells("td > input",l.colorForInCells())})),l.colorForCells.subscribe((function(){o.a.changeColorCells(".mystyle",l.colorForCells())})),l.colorForText.subscribe((function(){o.a.changeColorText("td > input",l.colorForText())})),l.colorForInCells.subscribe((function(){o.a.changeColorCells("td > input",l.colorForInCells())})),l.dispersiaForAdd.subscribe((function(){""!=l.nameForAdd()&&""!=l.dispersiaForAdd()?document.getElementById("add").removeAttribute("disabled"):document.getElementById("add").setAttribute("disabled","true")}));n(1)}]);