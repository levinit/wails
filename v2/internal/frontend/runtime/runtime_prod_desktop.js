(()=>{var O=Object.defineProperty;var c=(e,n)=>{for(var o in n)O(e,o,{get:n[o],enumerable:!0})};var g={};c(g,{LogDebug:()=>R,LogError:()=>A,LogFatal:()=>M,LogInfo:()=>B,LogLevel:()=>F,LogPrint:()=>C,LogTrace:()=>z,LogWarning:()=>P,SetLogLevel:()=>H});function a(e,n){window.WailsInvoke("L"+e+n)}function z(e){a("T",e)}function C(e){a("P",e)}function R(e){a("D",e)}function B(e){a("I",e)}function P(e){a("W",e)}function A(e){a("E",e)}function M(e){a("F",e)}function H(e){a("S",e)}var F={TRACE:1,DEBUG:2,INFO:3,WARNING:4,ERROR:5};var p=class{constructor(n,o){o=o||-1,this.Callback=i=>(n.apply(null,i),o===-1?!1:(o-=1,o===0))}},l={};function u(e,n,o){l[e]=l[e]||[];let i=new p(n,o);l[e].push(i)}function S(e,n){u(e,n,-1)}function h(e,n){u(e,n,1)}function E(e){let n=e.name;if(l[n]){let o=l[n].slice();for(let i=0;i<l[n].length;i+=1){let t=l[n][i],r=e.data;t.Callback(r)&&o.splice(i,1)}l[n]=o}}function y(e){let n;try{n=JSON.parse(e)}catch{let i="Invalid JSON passed to Notify: "+e;throw new Error(i)}E(n)}function b(e){let n={name:e,data:[].slice.apply(arguments).slice(1)};E(n),window.WailsInvoke("EE"+JSON.stringify(n))}function k(e){delete l[e],window.WailsInvoke("EX"+e)}function D(e,...n){k(e),n.length>0&&n.forEach(o=>{k(o)})}var f={};function G(){var e=new Uint32Array(1);return window.crypto.getRandomValues(e)[0]}function J(){return Math.random()*9007199254740991}var v;window.crypto?v=G:v=J;function s(e,n,o){return o==null&&(o=0),new Promise(function(i,t){var r;do r=e+"-"+v();while(f[r]);var d;o>0&&(d=setTimeout(function(){t(Error("Call to "+e+" timed out. Request ID: "+r))},o)),f[r]={timeoutHandle:d,reject:t,resolve:i};try{let W={name:e,args:n,callbackID:r};window.WailsInvoke("C"+JSON.stringify(W))}catch(W){console.error(W)}})}function L(e){let n;try{n=JSON.parse(e)}catch(t){let r=`Invalid JSON passed to callback: ${t.message}. Message: ${e}`;throw runtime.LogDebug(r),new Error(r)}let o=n.callbackid,i=f[o];if(!i){let t=`Callback '${o}' not registered!!!`;throw console.error(t),new Error(t)}clearTimeout(i.timeoutHandle),delete f[o],n.error?i.reject(n.error):i.resolve(n.result)}window.go={};function T(e){try{e=JSON.parse(e)}catch(n){console.error(n)}window.go=window.go||{},Object.keys(e).forEach(n=>{window.go[n]=window.go[n]||{},Object.keys(e[n]).forEach(o=>{window.go[n][o]=window.go[n][o]||{},Object.keys(e[n][o]).forEach(i=>{window.go[n][o][i]=function(){let t=0;function r(){let d=[].slice.call(arguments);return s([n,o,i].join("."),d,t)}return r.setTimeout=function(d){t=d},r.getTimeout=function(){return t},r}()})})})}var x={};c(x,{WindowCenter:()=>$,WindowFullscreen:()=>Q,WindowGetPosition:()=>te,WindowGetSize:()=>_,WindowHide:()=>re,WindowIsFullscreen:()=>Z,WindowIsMaximised:()=>de,WindowIsMinimised:()=>ue,WindowIsNormal:()=>We,WindowMaximise:()=>le,WindowMinimise:()=>fe,WindowReload:()=>U,WindowReloadApp:()=>V,WindowSetAlwaysOnTop:()=>oe,WindowSetBackgroundColour:()=>ge,WindowSetDarkTheme:()=>Y,WindowSetLightTheme:()=>X,WindowSetMaxSize:()=>ee,WindowSetMinSize:()=>ne,WindowSetPosition:()=>ie,WindowSetSize:()=>K,WindowSetSystemDefaultTheme:()=>j,WindowSetTitle:()=>N,WindowShow:()=>se,WindowToggleMaximise:()=>we,WindowUnfullscreen:()=>q,WindowUnmaximise:()=>ae,WindowUnminimise:()=>ce});function U(){window.location.reload()}function V(){window.WailsInvoke("WR")}function j(){window.WailsInvoke("WASDT")}function X(){window.WailsInvoke("WALT")}function Y(){window.WailsInvoke("WADT")}function $(){window.WailsInvoke("Wc")}function N(e){window.WailsInvoke("WT"+e)}function Q(){window.WailsInvoke("WF")}function q(){window.WailsInvoke("Wf")}function Z(){return s(":wails:WindowIsFullscreen")}function K(e,n){window.WailsInvoke("Ws:"+e+":"+n)}function _(){return s(":wails:WindowGetSize")}function ee(e,n){window.WailsInvoke("WZ:"+e+":"+n)}function ne(e,n){window.WailsInvoke("Wz:"+e+":"+n)}function oe(e){window.WailsInvoke("WATP:"+(e?"1":"0"))}function ie(e,n){window.WailsInvoke("Wp:"+e+":"+n)}function te(){return s(":wails:WindowGetPos")}function re(){window.WailsInvoke("WH")}function se(){window.WailsInvoke("WS")}function le(){window.WailsInvoke("WM")}function we(){window.WailsInvoke("Wt")}function ae(){window.WailsInvoke("WU")}function de(){return s(":wails:WindowIsMaximised")}function fe(){window.WailsInvoke("Wm")}function ce(){window.WailsInvoke("Wu")}function ue(){return s(":wails:WindowIsMinimised")}function We(){return s(":wails:WindowIsNormal")}function ge(e,n,o,i){let t=JSON.stringify({r:e||0,g:n||0,b:o||0,a:i||255});window.WailsInvoke("Wr:"+t)}var m={};c(m,{ScreenGetAll:()=>pe});function pe(){return s(":wails:ScreenGetAll")}var I={};c(I,{BrowserOpenURL:()=>ve});function ve(e){window.WailsInvoke("BO:"+e)}function xe(){window.WailsInvoke("Q")}function me(){window.WailsInvoke("S")}function Ie(){window.WailsInvoke("H")}function ke(){return s(":wails:Environment")}window.runtime={...g,...x,...I,...m,EventsOn:S,EventsOnce:h,EventsOnMultiple:u,EventsEmit:b,EventsOff:D,Environment:ke,Show:me,Hide:Ie,Quit:xe};window.wails={Callback:L,EventsNotify:y,SetBindings:T,eventListeners:l,callbacks:f,flags:{disableScrollbarDrag:!1,disableWailsDefaultContextMenu:!1,enableResize:!1,defaultCursor:null,borderThickness:6,shouldDrag:!1,cssDragProperty:"--wails-draggable",cssDragValue:"drag"}};window.wails.SetBindings(window.wailsbindings);delete window.wails.SetBindings;window.addEventListener("mouseup",()=>{window.wails.flags.shouldDrag=!1});var Se=function(e){return window.getComputedStyle(e.target).getPropertyValue(window.wails.flags.cssDragProperty)===window.wails.flags.cssDragValue};window.wails.setCSSDragProperties=function(e,n){window.wails.flags.cssDragProperty=e,window.wails.flags.cssDragValue=n};window.addEventListener("mousedown",e=>{if(window.wails.flags.resizeEdge){window.WailsInvoke("resize:"+window.wails.flags.resizeEdge),e.preventDefault();return}if(Se(e)){if(window.wails.flags.disableScrollbarDrag&&(e.offsetX>e.target.clientWidth||e.offsetY>e.target.clientHeight))return;window.wails.flags.shouldDrag=!0}});function w(e){document.body.style.cursor=e||window.wails.flags.defaultCursor,window.wails.flags.resizeEdge=e}window.addEventListener("mousemove",function(e){if(window.wails.flags.shouldDrag){window.WailsInvoke("drag");return}if(!window.wails.flags.enableResize)return;window.wails.flags.defaultCursor==null&&(window.wails.flags.defaultCursor=document.body.style.cursor),window.outerWidth-e.clientX<window.wails.flags.borderThickness&&window.outerHeight-e.clientY<window.wails.flags.borderThickness&&(document.body.style.cursor="se-resize");let n=window.outerWidth-e.clientX<window.wails.flags.borderThickness,o=e.clientX<window.wails.flags.borderThickness,i=e.clientY<window.wails.flags.borderThickness,t=window.outerHeight-e.clientY<window.wails.flags.borderThickness;!o&&!n&&!i&&!t&&window.wails.flags.resizeEdge!==void 0?w():n&&t?w("se-resize"):o&&t?w("sw-resize"):o&&i?w("nw-resize"):i&&n?w("ne-resize"):o?w("w-resize"):i?w("n-resize"):t?w("s-resize"):n&&w("e-resize")});window.addEventListener("contextmenu",function(e){window.wails.flags.disableWailsDefaultContextMenu&&e.preventDefault()});window.WailsInvoke("runtime:ready");})();
