(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ff={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function nx(){if(r_)return So;r_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return So.Fragment=e,So.jsx=i,So.jsxs=i,So}var s_;function ix(){return s_||(s_=1,Ff.exports=nx()),Ff.exports}var bt=ix(),Hf={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function ax(){if(o_)return te;o_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function S(L,et,vt){this.props=L,this.context=et,this.refs=x,this.updater=vt||T}S.prototype.isReactComponent={},S.prototype.setState=function(L,et){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,et,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=S.prototype;function D(L,et,vt){this.props=L,this.context=et,this.refs=x,this.updater=vt||T}var P=D.prototype=new B;P.constructor=D,w(P,S.prototype),P.isPureReactComponent=!0;var nt=Array.isArray;function H(){}var N={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function Et(L,et,vt){var W=vt.ref;return{$$typeof:o,type:L,key:et,ref:W!==void 0?W:null,props:vt}}function E(L,et){return Et(L.type,et,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function st(L){var et={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return et[vt]})}var rt=/\/+/g;function ft(L,et){return typeof L=="object"&&L!==null&&L.key!=null?st(""+L.key):et.toString(36)}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(et){L.status==="pending"&&(L.status="fulfilled",L.value=et)},function(et){L.status==="pending"&&(L.status="rejected",L.reason=et)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,et,vt,W,lt){var St=typeof L;(St==="undefined"||St==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(St){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case e:xt=!0;break;case _:return xt=L._init,O(xt(L._payload),et,vt,W,lt)}}if(xt)return lt=lt(L),xt=W===""?"."+ft(L,0):W,nt(lt)?(vt="",xt!=null&&(vt=xt.replace(rt,"$&/")+"/"),O(lt,et,vt,"",function(oe){return oe})):lt!=null&&(C(lt)&&(lt=E(lt,vt+(lt.key==null||L&&L.key===lt.key?"":(""+lt.key).replace(rt,"$&/")+"/")+xt)),et.push(lt)),1;xt=0;var Xt=W===""?".":W+":";if(nt(L))for(var zt=0;zt<L.length;zt++)W=L[zt],St=Xt+ft(W,zt),xt+=O(W,et,vt,St,lt);else if(zt=M(L),typeof zt=="function")for(L=zt.call(L),zt=0;!(W=L.next()).done;)W=W.value,St=Xt+ft(W,zt++),xt+=O(W,et,vt,St,lt);else if(St==="object"){if(typeof L.then=="function")return O(gt(L),et,vt,W,lt);throw et=String(L),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return xt}function q(L,et,vt){if(L==null)return L;var W=[],lt=0;return O(L,W,"","",function(St){return et.call(vt,St,lt++)}),W}function Y(L){if(L._status===-1){var et=L._result;et=et(),et.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=et)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:q,forEach:function(L,et,vt){q(L,function(){et.apply(this,arguments)},vt)},count:function(L){var et=0;return q(L,function(){et++}),et},toArray:function(L){return q(L,function(et){return et})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return te.Activity=v,te.Children=Mt,te.Component=S,te.Fragment=i,te.Profiler=l,te.PureComponent=D,te.StrictMode=r,te.Suspense=m,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,te.__COMPILER_RUNTIME={__proto__:null,c:function(L){return N.H.useMemoCache(L)}},te.cache=function(L){return function(){return L.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(L,et,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var W=w({},L.props),lt=L.key;if(et!=null)for(St in et.key!==void 0&&(lt=""+et.key),et)!K.call(et,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&et.ref===void 0||(W[St]=et[St]);var St=arguments.length-2;if(St===1)W.children=vt;else if(1<St){for(var xt=Array(St),Xt=0;Xt<St;Xt++)xt[Xt]=arguments[Xt+2];W.children=xt}return Et(L.type,lt,W)},te.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},te.createElement=function(L,et,vt){var W,lt={},St=null;if(et!=null)for(W in et.key!==void 0&&(St=""+et.key),et)K.call(et,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(lt[W]=et[W]);var xt=arguments.length-2;if(xt===1)lt.children=vt;else if(1<xt){for(var Xt=Array(xt),zt=0;zt<xt;zt++)Xt[zt]=arguments[zt+2];lt.children=Xt}if(L&&L.defaultProps)for(W in xt=L.defaultProps,xt)lt[W]===void 0&&(lt[W]=xt[W]);return Et(L,St,lt)},te.createRef=function(){return{current:null}},te.forwardRef=function(L){return{$$typeof:d,render:L}},te.isValidElement=C,te.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Y}},te.memo=function(L,et){return{$$typeof:p,type:L,compare:et===void 0?null:et}},te.startTransition=function(L){var et=N.T,vt={};N.T=vt;try{var W=L(),lt=N.S;lt!==null&&lt(vt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(H,yt)}catch(St){yt(St)}finally{et!==null&&vt.types!==null&&(et.types=vt.types),N.T=et}},te.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},te.use=function(L){return N.H.use(L)},te.useActionState=function(L,et,vt){return N.H.useActionState(L,et,vt)},te.useCallback=function(L,et){return N.H.useCallback(L,et)},te.useContext=function(L){return N.H.useContext(L)},te.useDebugValue=function(){},te.useDeferredValue=function(L,et){return N.H.useDeferredValue(L,et)},te.useEffect=function(L,et){return N.H.useEffect(L,et)},te.useEffectEvent=function(L){return N.H.useEffectEvent(L)},te.useId=function(){return N.H.useId()},te.useImperativeHandle=function(L,et,vt){return N.H.useImperativeHandle(L,et,vt)},te.useInsertionEffect=function(L,et){return N.H.useInsertionEffect(L,et)},te.useLayoutEffect=function(L,et){return N.H.useLayoutEffect(L,et)},te.useMemo=function(L,et){return N.H.useMemo(L,et)},te.useOptimistic=function(L,et){return N.H.useOptimistic(L,et)},te.useReducer=function(L,et,vt){return N.H.useReducer(L,et,vt)},te.useRef=function(L){return N.H.useRef(L)},te.useState=function(L){return N.H.useState(L)},te.useSyncExternalStore=function(L,et,vt){return N.H.useSyncExternalStore(L,et,vt)},te.useTransition=function(){return N.H.useTransition()},te.version="19.2.0",te}var l_;function hd(){return l_||(l_=1,Hf.exports=ax()),Hf.exports}var ri=hd(),Gf={exports:{}},xo={},Vf={exports:{}},kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function rx(){return c_||(c_=1,(function(o){function e(O,q){var Y=O.length;O.push(q);t:for(;0<Y;){var yt=Y-1>>>1,Mt=O[yt];if(0<l(Mt,q))O[yt]=q,O[Y]=Mt,Y=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],Y=O.pop();if(Y!==q){O[0]=Y;t:for(var yt=0,Mt=O.length,L=Mt>>>1;yt<L;){var et=2*(yt+1)-1,vt=O[et],W=et+1,lt=O[W];if(0>l(vt,Y))W<Mt&&0>l(lt,vt)?(O[yt]=lt,O[W]=Y,yt=W):(O[yt]=vt,O[et]=Y,yt=et);else if(W<Mt&&0>l(lt,Y))O[yt]=lt,O[W]=Y,yt=W;else break t}}return q}function l(O,q){var Y=O.sortIndex-q.sortIndex;return Y!==0?Y:O.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,y=3,M=!1,T=!1,w=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(O){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=O)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function nt(O){if(w=!1,P(O),!T)if(i(m)!==null)T=!0,H||(H=!0,st());else{var q=i(p);q!==null&&gt(nt,q.startTime-O)}}var H=!1,N=-1,K=5,Et=-1;function E(){return x?!0:!(o.unstable_now()-Et<K)}function C(){if(x=!1,H){var O=o.unstable_now();Et=O;var q=!0;try{t:{T=!1,w&&(w=!1,B(N),N=-1),M=!0;var Y=y;try{e:{for(P(O),v=i(m);v!==null&&!(v.expirationTime>O&&E());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,y=v.priorityLevel;var Mt=yt(v.expirationTime<=O);if(O=o.unstable_now(),typeof Mt=="function"){v.callback=Mt,P(O),q=!0;break e}v===i(m)&&r(m),P(O)}else r(m);v=i(m)}if(v!==null)q=!0;else{var L=i(p);L!==null&&gt(nt,L.startTime-O),q=!1}}break t}finally{v=null,y=Y,M=!1}q=void 0}}finally{q?st():H=!1}}}var st;if(typeof D=="function")st=function(){D(C)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=C,st=function(){ft.postMessage(null)}}else st=function(){S(C,0)};function gt(O,q){N=S(function(){O(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Y=y;y=q;try{return O()}finally{y=Y}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=y;y=O;try{return q()}finally{y=Y}},o.unstable_scheduleCallback=function(O,q,Y){var yt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?yt+Y:yt):Y=yt,O){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=Y+Mt,O={id:_++,callback:q,priorityLevel:O,startTime:Y,expirationTime:Mt,sortIndex:-1},Y>yt?(O.sortIndex=Y,e(p,O),i(m)===null&&O===i(p)&&(w?(B(N),N=-1):w=!0,gt(nt,Y-yt))):(O.sortIndex=Mt,e(m,O),T||M||(T=!0,H||(H=!0,st()))),O},o.unstable_shouldYield=E,o.unstable_wrapCallback=function(O){var q=y;return function(){var Y=y;y=q;try{return O.apply(this,arguments)}finally{y=Y}}}})(kf)),kf}var u_;function sx(){return u_||(u_=1,Vf.exports=rx()),Vf.exports}var Xf={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function ox(){if(f_)return xn;f_=1;var o=hd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,xn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},xn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},xn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},xn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},xn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},xn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},xn.requestFormReset=function(m){r.d.r(m)},xn.unstable_batchedUpdates=function(m,p){return m(p)},xn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},xn.useFormStatus=function(){return h.H.useHostTransitionStatus()},xn.version="19.2.0",xn}var h_;function lx(){if(h_)return Xf.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=ox(),Xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function cx(){if(d_)return xo;d_=1;var o=sx(),e=hd(),i=lx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,s=f;break}if(b===s){g=!0,s=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=c;break}if(b===s){g=!0,s=f,a=c;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),E=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=C&&t[C]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case x:return"StrictMode";case nt:return"Suspense";case H:return"SuspenseList";case Et:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case D:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var gt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},yt=[],Mt=-1;function L(t){return{current:t}}function et(t){0>Mt||(t.current=yt[Mt],yt[Mt]=null,Mt--)}function vt(t,n){Mt++,yt[Mt]=t.current,t.current=n}var W=L(null),lt=L(null),St=L(null),xt=L(null);function Xt(t,n){switch(vt(St,n),vt(lt,t),vt(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(W),vt(W,t)}function zt(){et(W),et(lt),et(St)}function oe(t){t.memoizedState!==null&&vt(xt,t);var n=W.current,a=wg(n,t.type);n!==a&&(vt(lt,t),vt(W,a))}function xe(t){lt.current===t&&(et(W),et(lt)),xt.current===t&&(et(xt),mo._currentValue=Y)}var ue,F;function Ze(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+F}var le=!1;function de(t,n){if(!t||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ht=function(){throw Error()};if(Object.defineProperty(ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ht,[])}catch(it){var J=it}Reflect.construct(t,[],ht)}else{try{ht.call()}catch(it){J=it}t.call(ht.prototype)}}else{try{throw Error()}catch(it){J=it}(ht=t())&&typeof ht.catch=="function"&&ht.catch(function(){})}}catch(it){if(it&&J&&typeof it.stack=="string")return[it.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var z=g.split(`
`),Z=b.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Z.length)for(s=z.length-1,c=Z.length-1;1<=s&&0<=c&&z[s]!==Z[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Z[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Z[c]){var ct=`
`+z[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=c);break}}}finally{le=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ze(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return t.child!==n&&n!==null?Ze("Suspense Fallback"):Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return de(t.type,!1);case 11:return de(t.type.render,!1);case 1:return de(t.type,!0);case 31:return Ze("Activity");default:return""}}function we(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Qt=Object.prototype.hasOwnProperty,U=o.unstable_scheduleCallback,A=o.unstable_cancelCallback,$=o.unstable_shouldYield,pt=o.unstable_requestPaint,_t=o.unstable_now,dt=o.unstable_getCurrentPriorityLevel,kt=o.unstable_ImmediatePriority,wt=o.unstable_UserBlockingPriority,Ot=o.unstable_NormalPriority,ve=o.unstable_LowPriority,At=o.unstable_IdlePriority,It=o.log,$t=o.unstable_setDisableYieldValue,Yt=null,Ct=null;function ee(t){if(typeof It=="function"&&$t(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Yt,t)}catch{}}var Wt=Math.clz32?Math.clz32:Pt,De=Math.log,G=Math.LN2;function Pt(t){return t>>>=0,t===0?32:31-(De(t)/G|0)|0}var ot=256,mt=262144,Nt=4194304;function Dt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ce(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=Dt(s):(g&=b,g!==0?c=Dt(g):a||(a=b&~t,a!==0&&(c=Dt(a))))):(b=s&~f,b!==0?c=Dt(b):g!==0?c=Dt(g):a||(a=s&~t,a!==0&&(c=Dt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Be(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function vn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Se(){var t=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),t}function un(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function En(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zo(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,z=t.expirationTimes,Z=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-Wt(a),ht=1<<ct;b[ct]=0,z[ct]=-1;var J=Z[ct];if(J!==null)for(Z[ct]=null,ct=0;ct<J.length;ct++){var it=J[ct];it!==null&&(it.lane&=-536870913)}a&=~ht}s!==0&&Rs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Rs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Wt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function gi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Wt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function vr(t,n){var a=n&-n;return a=(a&42)!==0?1:Sr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Sr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ba(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function Cs(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var In=Math.random().toString(36).slice(2),tn="__reactFiber$"+In,dn="__reactProps$"+In,ta="__reactContainer$"+In,ws="__reactEvents$"+In,Nc="__reactListeners$"+In,R="__reactHandles$"+In,V="__reactResources$"+In,Q="__reactMarker$"+In;function tt(t){delete t[tn],delete t[dn],delete t[ws],delete t[Nc],delete t[R]}function k(t){var n=t[tn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ta]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=zg(t);t!==null;){if(a=t[tn])return a;t=zg(t)}return n}t=a,a=t.parentNode}return null}function Tt(t){if(t=t[tn]||t[ta]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ut(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Bt(t){var n=t[V];return n||(n=t[V]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Rt(t){t[Q]=!0}var Zt=new Set,Kt={};function Ht(t,n){pe(t,n),pe(t+"Capture",n)}function pe(t,n){for(Kt[t]=n,t=0;t<n.length;t++)Zt.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ie={},Sn={};function ye(t){return Qt.call(Sn,t)?!0:Qt.call(Ie,t)?!1:Oe.test(t)?Sn[t]=!0:(Ie[t]=!0,!1)}function Vt(t,n,a){if(ye(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function qe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ae(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ti(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tn(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ia(t){if(!t._valueTracker){var n=Ti(t)?"checked":"value";t._valueTracker=Tn(t,n,""+t[n])}}function Xe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ti(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Fn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ds=/[\n"\\]/g;function Fe(t){return t.replace(Ds,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fa(t,n,a,s,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ke(n)):t.value!==""+ke(n)&&(t.value=""+ke(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?yr(t,g,ke(n)):a!=null?yr(t,g,ke(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+ke(b):t.removeAttribute("name")}function Bo(t,n,a,s,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ia(t);return}a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Ia(t)}function yr(t,n,a){n==="number"&&Fn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ed(t,n,a){if(n!=null&&(n=""+ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ke(a):""}function Td(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(gt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ke(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ia(t)}function Er(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Qv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ad(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&bd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&bd(t,f,n[f])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(t){return $v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function bi(){}var Pc=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,br=null;function Rd(t){var n=Tt(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Fa(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[dn]||null;if(!c)throw Error(r(90));Fa(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Xe(s)}break t;case"textarea":Ed(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mr(t,!!a.multiple,n,!1)}}}var Bc=!1;function Cd(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var s=t(n);return s}finally{if(Bc=!1,(Tr!==null||br!==null)&&(bl(),Tr&&(n=Tr,t=br,br=Tr=null,Rd(n),t)))for(n=0;n<t.length;n++)Rd(t[n])}}function Us(t,n){var a=t.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Ai)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Ic=!1}var ea=null,Fc=null,Fo=null;function wd(){if(Fo)return Fo;var t,n=Fc,a=n.length,s,c="value"in ea?ea.value:ea.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Fo=c.slice(t,1<s?1-s:void 0)}function Ho(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function Dd(){return!1}function Rn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:Dd,this.isPropagationStopped=Dd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Rn(Ha),Ns=v({},Ha,{view:0,detail:0}),t0=Rn(Ns),Hc,Gc,Os,ko=v({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Hc=t.screenX-Os.screenX,Gc=t.screenY-Os.screenY):Gc=Hc=0,Os=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Ud=Rn(ko),e0=v({},ko,{dataTransfer:0}),n0=Rn(e0),i0=v({},Ns,{relatedTarget:0}),Vc=Rn(i0),a0=v({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),r0=Rn(a0),s0=v({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=Rn(s0),l0=v({},Ha,{data:0}),Ld=Rn(l0),c0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=f0[t])?!!n[t]:!1}function kc(){return h0}var d0=v({},Ns,{key:function(t){if(t.key){var n=c0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=Rn(d0),m0=v({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Rn(m0),g0=v({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),_0=Rn(g0),v0=v({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),S0=Rn(v0),x0=v({},ko,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=Rn(x0),M0=v({},Ha,{newState:0,oldState:0}),E0=Rn(M0),T0=[9,13,27,32],Xc=Ai&&"CompositionEvent"in window,Ps=null;Ai&&"documentMode"in document&&(Ps=document.documentMode);var b0=Ai&&"TextEvent"in window&&!Ps,Od=Ai&&(!Xc||Ps&&8<Ps&&11>=Ps),Pd=" ",zd=!1;function Bd(t,n){switch(t){case"keyup":return T0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function A0(t,n){switch(t){case"compositionend":return Id(n);case"keypress":return n.which!==32?null:(zd=!0,Pd);case"textInput":return t=n.data,t===Pd&&zd?null:t;default:return null}}function R0(t,n){if(Ar)return t==="compositionend"||!Xc&&Bd(t,n)?(t=wd(),Fo=Fc=ea=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!C0[t.type]:n==="textarea"}function Hd(t,n,a,s){Tr?br?br.push(s):br=[s]:Tr=s,n=Ll(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var zs=null,Bs=null;function w0(t){Mg(t,0)}function Xo(t){var n=Ut(t);if(Xe(n))return t}function Gd(t,n){if(t==="change")return n}var Vd=!1;if(Ai){var Wc;if(Ai){var qc="oninput"in document;if(!qc){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),qc=typeof kd.oninput=="function"}Wc=qc}else Wc=!1;Vd=Wc&&(!document.documentMode||9<document.documentMode)}function Xd(){zs&&(zs.detachEvent("onpropertychange",Wd),Bs=zs=null)}function Wd(t){if(t.propertyName==="value"&&Xo(Bs)){var n=[];Hd(n,Bs,t,zc(t)),Cd(w0,n)}}function D0(t,n,a){t==="focusin"?(Xd(),zs=n,Bs=a,zs.attachEvent("onpropertychange",Wd)):t==="focusout"&&Xd()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Bs)}function L0(t,n){if(t==="click")return Xo(n)}function N0(t,n){if(t==="input"||t==="change")return Xo(n)}function O0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:O0;function Is(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Qt.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,n){var a=qd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qd(a)}}function jd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?jd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Fn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Fn(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var P0=Ai&&"documentMode"in document&&11>=document.documentMode,Rr=null,jc=null,Fs=null,Zc=!1;function Kd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||Rr==null||Rr!==Fn(s)||(s=Rr,"selectionStart"in s&&Yc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fs&&Is(Fs,s)||(Fs=s,s=Ll(jc,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Rr)))}function Ga(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Kc={},Qd={};Ai&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Va(t){if(Kc[t])return Kc[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qd)return Kc[t]=n[a];return t}var Jd=Va("animationend"),$d=Va("animationiteration"),tp=Va("animationstart"),z0=Va("transitionrun"),B0=Va("transitionstart"),I0=Va("transitioncancel"),ep=Va("transitionend"),np=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function oi(t,n){np.set(t,n),Ht(n,[t])}var Wo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Zn=[],wr=0,Jc=0;function qo(){for(var t=wr,n=Jc=wr=0;n<t;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var c=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&ip(a,c,f)}}function Yo(t,n,a,s){Zn[wr++]=t,Zn[wr++]=n,Zn[wr++]=a,Zn[wr++]=s,Jc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function $c(t,n,a,s){return Yo(t,n,a,s),jo(t)}function ka(t,n){return Yo(t,null,null,n),jo(t)}function ip(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Wt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(t){if(50<oo)throw oo=0,cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={};function F0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new F0(t,n,a,s)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zo(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")tu(t)&&(g=1);else if(typeof t=="string")g=XS(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Et:return t=Gn(31,a,n,c),t.elementType=Et,t.lanes=f,t;case w:return Xa(a.children,c,f,n);case x:g=8,c|=24;break;case S:return t=Gn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case nt:return t=Gn(13,a,n,c),t.elementType=nt,t.lanes=f,t;case H:return t=Gn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:g=10;break t;case B:g=9;break t;case P:g=11;break t;case N:g=14;break t;case K:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Xa(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function eu(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function rp(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function nu(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sp=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=sp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:we(n)},sp.set(t,n),n)}return{value:t,source:n,stack:we(n)}}var Ur=[],Lr=0,Ko=null,Hs=0,Qn=[],Jn=0,na=null,_i=1,vi="";function Ci(t,n){Ur[Lr++]=Hs,Ur[Lr++]=Ko,Ko=t,Hs=n}function op(t,n,a){Qn[Jn++]=_i,Qn[Jn++]=vi,Qn[Jn++]=na,na=t;var s=_i;t=vi;var c=32-Wt(s)-1;s&=~(1<<c),a+=1;var f=32-Wt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,_i=1<<32-Wt(n)+c|a<<c|s,vi=f+t}else _i=1<<f|a<<c|s,vi=t}function iu(t){t.return!==null&&(Ci(t,1),op(t,1,0))}function au(t){for(;t===Ko;)Ko=Ur[--Lr],Ur[Lr]=null,Hs=Ur[--Lr],Ur[Lr]=null;for(;t===na;)na=Qn[--Jn],Qn[Jn]=null,vi=Qn[--Jn],Qn[Jn]=null,_i=Qn[--Jn],Qn[Jn]=null}function lp(t,n){Qn[Jn++]=_i,Qn[Jn++]=vi,Qn[Jn++]=na,_i=n.id,vi=n.overflow,na=t}var pn=null,He=null,_e=!1,ia=null,$n=!1,ru=Error(r(519));function aa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gs(Kn(n,t)),ru}function cp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[tn]=t,n[dn]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<co.length;a++)he(co[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Bo(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Td(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ag(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=bi),n=!0):n=!1,n||aa(t,!0)}function up(t){for(pn=t.return;pn;)switch(pn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:pn=pn.return}}function Nr(t){if(t!==pn)return!1;if(!_e)return up(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Tf(t.type,t.memoizedProps)),a=!a),a&&He&&aa(t),up(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));He=Pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));He=Pg(t)}else n===27?(n=He,va(t.type)?(t=wf,wf=null,He=t):He=n):He=pn?ei(t.stateNode.nextSibling):null;return!0}function Wa(){He=pn=null,_e=!1}function su(){var t=ia;return t!==null&&(Un===null?Un=t:Un.push.apply(Un,t),ia=null),t}function Gs(t){ia===null?ia=[t]:ia.push(t)}var ou=L(null),qa=null,wi=null;function ra(t,n,a){vt(ou,n._currentValue),n._currentValue=a}function Di(t){t._currentValue=ou.current,et(ou)}function lu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),lu(f.return,a,t),s||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),lu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Or(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=c.type;Hn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===xt.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}c=c.return}t!==null&&cu(n,t,a,s),n.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ya(t){qa=t,wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function mn(t){return fp(qa,t)}function Jo(t,n){return qa===null&&Ya(t),fp(t,n)}function fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},wi===null){if(t===null)throw Error(r(308));wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else wi=wi.next=n;return a}var H0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},G0=o.unstable_scheduleCallback,V0=o.unstable_NormalPriority,en={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new H0,data:new Map,refCount:0}}function Vs(t){t.refCount--,t.refCount===0&&G0(V0,function(){t.controller.abort()})}var ks=null,fu=0,Pr=0,zr=null;function k0(t,n){if(ks===null){var a=ks=[];fu=0,Pr=mf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return fu++,n.then(hp,hp),n}function hp(){if(--fu===0&&ks!==null){zr!==null&&(zr.status="fulfilled");var t=ks;ks=null,Pr=0,zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function X0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var dp=O.S;O.S=function(t,n){Km=_t(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&k0(t,n),dp!==null&&dp(t,n)};var ja=L(null);function hu(){var t=ja.current;return t!==null?t:Pe.pooledCache}function $o(t,n){n===null?vt(ja,ja.current):vt(ja,n.pool)}function pp(){var t=hu();return t===null?null:{parent:en._currentValue,pool:t}}var Br=Error(r(460)),du=Error(r(474)),tl=Error(r(542)),el={then:function(){}};function mp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(bi,bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vp(t),t;default:if(typeof n.status=="string")n.then(bi,bi);else{if(t=Pe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vp(t),t}throw Ka=n,Br}}function Za(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ka=a,Br):a}}var Ka=null;function _p(){if(Ka===null)throw Error(r(459));var t=Ka;return Ka=null,t}function vp(t){if(t===Br||t===tl)throw Error(r(483))}var Ir=null,Xs=0;function nl(t){var n=Xs;return Xs+=1,Ir===null&&(Ir=[]),gp(Ir,t,n)}function Ws(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function il(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sp(t){function n(X,I){if(t){var j=X.deletions;j===null?(X.deletions=[I],X.flags|=16):j.push(I)}}function a(X,I){if(!t)return null;for(;I!==null;)n(X,I),I=I.sibling;return null}function s(X){for(var I=new Map;X!==null;)X.key!==null?I.set(X.key,X):I.set(X.index,X),X=X.sibling;return I}function c(X,I){return X=Ri(X,I),X.index=0,X.sibling=null,X}function f(X,I,j){return X.index=j,t?(j=X.alternate,j!==null?(j=j.index,j<I?(X.flags|=67108866,I):j):(X.flags|=67108866,I)):(X.flags|=1048576,I)}function g(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function b(X,I,j,ut){return I===null||I.tag!==6?(I=eu(j,X.mode,ut),I.return=X,I):(I=c(I,j),I.return=X,I)}function z(X,I,j,ut){var qt=j.type;return qt===w?ct(X,I,j.props.children,ut,j.key):I!==null&&(I.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===K&&Za(qt)===I.type)?(I=c(I,j.props),Ws(I,j),I.return=X,I):(I=Zo(j.type,j.key,j.props,null,X.mode,ut),Ws(I,j),I.return=X,I)}function Z(X,I,j,ut){return I===null||I.tag!==4||I.stateNode.containerInfo!==j.containerInfo||I.stateNode.implementation!==j.implementation?(I=nu(j,X.mode,ut),I.return=X,I):(I=c(I,j.children||[]),I.return=X,I)}function ct(X,I,j,ut,qt){return I===null||I.tag!==7?(I=Xa(j,X.mode,ut,qt),I.return=X,I):(I=c(I,j),I.return=X,I)}function ht(X,I,j){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=eu(""+I,X.mode,j),I.return=X,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case M:return j=Zo(I.type,I.key,I.props,null,X.mode,j),Ws(j,I),j.return=X,j;case T:return I=nu(I,X.mode,j),I.return=X,I;case K:return I=Za(I),ht(X,I,j)}if(gt(I)||st(I))return I=Xa(I,X.mode,j,null),I.return=X,I;if(typeof I.then=="function")return ht(X,nl(I),j);if(I.$$typeof===D)return ht(X,Jo(X,I),j);il(X,I)}return null}function J(X,I,j,ut){var qt=I!==null?I.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return qt!==null?null:b(X,I,""+j,ut);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return j.key===qt?z(X,I,j,ut):null;case T:return j.key===qt?Z(X,I,j,ut):null;case K:return j=Za(j),J(X,I,j,ut)}if(gt(j)||st(j))return qt!==null?null:ct(X,I,j,ut,null);if(typeof j.then=="function")return J(X,I,nl(j),ut);if(j.$$typeof===D)return J(X,I,Jo(X,j),ut);il(X,j)}return null}function it(X,I,j,ut,qt){if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return X=X.get(j)||null,b(I,X,""+ut,qt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case M:return X=X.get(ut.key===null?j:ut.key)||null,z(I,X,ut,qt);case T:return X=X.get(ut.key===null?j:ut.key)||null,Z(I,X,ut,qt);case K:return ut=Za(ut),it(X,I,j,ut,qt)}if(gt(ut)||st(ut))return X=X.get(j)||null,ct(I,X,ut,qt,null);if(typeof ut.then=="function")return it(X,I,j,nl(ut),qt);if(ut.$$typeof===D)return it(X,I,j,Jo(I,ut),qt);il(I,ut)}return null}function Ft(X,I,j,ut){for(var qt=null,Me=null,Gt=I,ie=I=0,ge=null;Gt!==null&&ie<j.length;ie++){Gt.index>ie?(ge=Gt,Gt=null):ge=Gt.sibling;var Ee=J(X,Gt,j[ie],ut);if(Ee===null){Gt===null&&(Gt=ge);break}t&&Gt&&Ee.alternate===null&&n(X,Gt),I=f(Ee,I,ie),Me===null?qt=Ee:Me.sibling=Ee,Me=Ee,Gt=ge}if(ie===j.length)return a(X,Gt),_e&&Ci(X,ie),qt;if(Gt===null){for(;ie<j.length;ie++)Gt=ht(X,j[ie],ut),Gt!==null&&(I=f(Gt,I,ie),Me===null?qt=Gt:Me.sibling=Gt,Me=Gt);return _e&&Ci(X,ie),qt}for(Gt=s(Gt);ie<j.length;ie++)ge=it(Gt,X,ie,j[ie],ut),ge!==null&&(t&&ge.alternate!==null&&Gt.delete(ge.key===null?ie:ge.key),I=f(ge,I,ie),Me===null?qt=ge:Me.sibling=ge,Me=ge);return t&&Gt.forEach(function(Ea){return n(X,Ea)}),_e&&Ci(X,ie),qt}function jt(X,I,j,ut){if(j==null)throw Error(r(151));for(var qt=null,Me=null,Gt=I,ie=I=0,ge=null,Ee=j.next();Gt!==null&&!Ee.done;ie++,Ee=j.next()){Gt.index>ie?(ge=Gt,Gt=null):ge=Gt.sibling;var Ea=J(X,Gt,Ee.value,ut);if(Ea===null){Gt===null&&(Gt=ge);break}t&&Gt&&Ea.alternate===null&&n(X,Gt),I=f(Ea,I,ie),Me===null?qt=Ea:Me.sibling=Ea,Me=Ea,Gt=ge}if(Ee.done)return a(X,Gt),_e&&Ci(X,ie),qt;if(Gt===null){for(;!Ee.done;ie++,Ee=j.next())Ee=ht(X,Ee.value,ut),Ee!==null&&(I=f(Ee,I,ie),Me===null?qt=Ee:Me.sibling=Ee,Me=Ee);return _e&&Ci(X,ie),qt}for(Gt=s(Gt);!Ee.done;ie++,Ee=j.next())Ee=it(Gt,X,ie,Ee.value,ut),Ee!==null&&(t&&Ee.alternate!==null&&Gt.delete(Ee.key===null?ie:Ee.key),I=f(Ee,I,ie),Me===null?qt=Ee:Me.sibling=Ee,Me=Ee);return t&&Gt.forEach(function(ex){return n(X,ex)}),_e&&Ci(X,ie),qt}function Ne(X,I,j,ut){if(typeof j=="object"&&j!==null&&j.type===w&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case M:t:{for(var qt=j.key;I!==null;){if(I.key===qt){if(qt=j.type,qt===w){if(I.tag===7){a(X,I.sibling),ut=c(I,j.props.children),ut.return=X,X=ut;break t}}else if(I.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===K&&Za(qt)===I.type){a(X,I.sibling),ut=c(I,j.props),Ws(ut,j),ut.return=X,X=ut;break t}a(X,I);break}else n(X,I);I=I.sibling}j.type===w?(ut=Xa(j.props.children,X.mode,ut,j.key),ut.return=X,X=ut):(ut=Zo(j.type,j.key,j.props,null,X.mode,ut),Ws(ut,j),ut.return=X,X=ut)}return g(X);case T:t:{for(qt=j.key;I!==null;){if(I.key===qt)if(I.tag===4&&I.stateNode.containerInfo===j.containerInfo&&I.stateNode.implementation===j.implementation){a(X,I.sibling),ut=c(I,j.children||[]),ut.return=X,X=ut;break t}else{a(X,I);break}else n(X,I);I=I.sibling}ut=nu(j,X.mode,ut),ut.return=X,X=ut}return g(X);case K:return j=Za(j),Ne(X,I,j,ut)}if(gt(j))return Ft(X,I,j,ut);if(st(j)){if(qt=st(j),typeof qt!="function")throw Error(r(150));return j=qt.call(j),jt(X,I,j,ut)}if(typeof j.then=="function")return Ne(X,I,nl(j),ut);if(j.$$typeof===D)return Ne(X,I,Jo(X,j),ut);il(X,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,I!==null&&I.tag===6?(a(X,I.sibling),ut=c(I,j),ut.return=X,X=ut):(a(X,I),ut=eu(j,X.mode,ut),ut.return=X,X=ut),g(X)):a(X,I)}return function(X,I,j,ut){try{Xs=0;var qt=Ne(X,I,j,ut);return Ir=null,qt}catch(Gt){if(Gt===Br||Gt===tl)throw Gt;var Me=Gn(29,Gt,null,X.mode);return Me.lanes=ut,Me.return=X,Me}finally{}}}var Qa=Sp(!0),xp=Sp(!1),sa=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function la(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Te&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=jo(t),ip(t,null,a),n}return Yo(t,s,n,a),jo(t)}function qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,gi(t,a)}}function gu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var _u=!1;function Ys(){if(_u){var t=zr;if(t!==null)throw t}}function js(t,n,a,s){_u=!1;var c=t.updateQueue;sa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,Z=z.next;z.next=null,g===null?f=Z:g.next=Z,g=z;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==g&&(b===null?ct.firstBaseUpdate=Z:b.next=Z,ct.lastBaseUpdate=z))}if(f!==null){var ht=c.baseState;g=0,ct=Z=z=null,b=f;do{var J=b.lane&-536870913,it=J!==b.lane;if(it?(me&J)===J:(s&J)===J){J!==0&&J===Pr&&(_u=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ft=t,jt=b;J=n;var Ne=a;switch(jt.tag){case 1:if(Ft=jt.payload,typeof Ft=="function"){ht=Ft.call(Ne,ht,J);break t}ht=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=jt.payload,J=typeof Ft=="function"?Ft.call(Ne,ht,J):Ft,J==null)break t;ht=v({},ht,J);break t;case 2:sa=!0}}J=b.callback,J!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[J]:it.push(J))}else it={lane:J,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(Z=ct=it,z=ht):ct=ct.next=it,g|=J;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(z=ht),c.baseState=z,c.firstBaseUpdate=Z,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),da|=g,t.lanes=g,t.memoizedState=ht}}function yp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yp(a[t],n)}var Fr=L(null),al=L(0);function Ep(t,n){t=Fi,vt(al,t),vt(Fr,n),Fi=t|n.baseLanes}function vu(){vt(al,Fi),vt(Fr,Fr.current)}function Su(){Fi=al.current,et(Fr),et(al)}var Vn=L(null),ti=null;function ca(t){var n=t.alternate;vt(Ke,Ke.current&1),vt(Vn,t),ti===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(ti=t)}function xu(t){vt(Ke,Ke.current),vt(Vn,t),ti===null&&(ti=t)}function Tp(t){t.tag===22?(vt(Ke,Ke.current),vt(Vn,t),ti===null&&(ti=t)):ua()}function ua(){vt(Ke,Ke.current),vt(Vn,Vn.current)}function kn(t){et(Vn),ti===t&&(ti=null),et(Ke)}var Ke=L(0);function rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rf(a)||Cf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ui=0,ne=null,Ue=null,nn=null,sl=!1,Hr=!1,Ja=!1,ol=0,Zs=0,Gr=null,W0=0;function Ye(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function Mu(t,n,a,s,c,f){return Ui=f,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?om:Bu,Ja=!1,f=a(s,c),Ja=!1,Hr&&(f=Ap(n,a,s,c)),bp(t),f}function bp(t){O.H=Js;var n=Ue!==null&&Ue.next!==null;if(Ui=0,nn=Ue=ne=null,sl=!1,Zs=0,Gr=null,n)throw Error(r(300));t===null||an||(t=t.dependencies,t!==null&&Qo(t)&&(an=!0))}function Ap(t,n,a,s){ne=t;var c=0;do{if(Hr&&(Gr=null),Zs=0,Hr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=lm,f=n(a,s)}while(Hr);return f}function q0(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Ks(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(ne.flags|=1024),n}function Eu(){var t=ol!==0;return ol=0,t}function Tu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bu(t){if(sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sl=!1}Ui=0,nn=Ue=ne=null,Hr=!1,Zs=ol=0,Gr=null}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ne.memoizedState=nn=t:nn=nn.next=t,nn}function Qe(){if(Ue===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=nn===null?ne.memoizedState:nn.next;if(n!==null)nn=n,Ue=t;else{if(t===null)throw ne.alternate===null?Error(r(467)):Error(r(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},nn===null?ne.memoizedState=nn=t:nn=nn.next=t}return nn}function ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(t){var n=Zs;return Zs+=1,Gr===null&&(Gr=[]),t=gp(Gr,t,n),n=ne,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?om:Bu),t}function cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ks(t);if(t.$$typeof===D)return mn(t)}throw Error(r(438,String(t)))}function Au(t){var n=null,a=ne.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ne.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ne.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=E;return n.index++,a}function Li(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=Qe();return Ru(n,Ue,t)}function Ru(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,z=null,Z=n,ct=!1;do{var ht=Z.lane&-536870913;if(ht!==Z.lane?(me&ht)===ht:(Ui&ht)===ht){var J=Z.revertLane;if(J===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ht===Pr&&(ct=!0);else if((Ui&J)===J){Z=Z.next,J===Pr&&(ct=!0);continue}else ht={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(b=z=ht,g=f):z=z.next=ht,ne.lanes|=J,da|=J;ht=Z.action,Ja&&a(f,ht),f=Z.hasEagerState?Z.eagerState:a(f,ht)}else J={lane:ht,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},z===null?(b=z=J,g=f):z=z.next=J,ne.lanes|=ht,da|=ht;Z=Z.next}while(Z!==null&&Z!==n);if(z===null?g=f:z.next=b,!Hn(f,t.memoizedState)&&(an=!0,ct&&(a=zr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Cu(t){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Hn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Rp(t,n,a){var s=ne,c=Qe(),f=_e;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Hn((Ue||c).memoizedState,a);if(g&&(c.memoizedState=a,an=!0),c=c.queue,Uu(Dp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Vr(9,{destroy:void 0},wp.bind(null,s,c,a,n),null),Pe===null)throw Error(r(349));f||(Ui&127)!==0||Cp(s,n,a)}return a}function Cp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ne.updateQueue,n===null?(n=ll(),ne.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function wp(t,n,a,s){n.value=a,n.getSnapshot=s,Up(n)&&Lp(t)}function Dp(t,n,a){return a(function(){Up(n)&&Lp(t)})}function Up(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function Lp(t){var n=ka(t,2);n!==null&&Ln(n,t,2)}function wu(t){var n=bn();if(typeof t=="function"){var a=t;if(t=a(),Ja){ee(!0);try{a()}finally{ee(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n}function Np(t,n,a,s){return t.baseState=a,Ru(t,Ue,typeof s=="function"?s:Li)}function Y0(t,n,a,s,c){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var b=a(c,s),z=O.S;z!==null&&z(g,b),Pp(t,n,b)}catch(Z){Du(t,n,Z)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),Pp(t,n,f)}catch(Z){Du(t,n,Z)}}function Pp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zp(t,n,s)},function(s){return Du(t,n,s)}):zp(t,n,a)}function zp(t,n,a){n.status="fulfilled",n.value=a,Bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Op(t,a)))}function Du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Bp(n),n=n.next;while(n!==s)}t.action=null}function Bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ip(t,n){return n}function Fp(t,n){if(_e){var a=Pe.formState;if(a!==null){t:{var s=ne;if(_e){if(He){e:{for(var c=He,f=$n;c.nodeType!==8;){if(!f){c=null;break e}if(c=ei(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){He=ei(c.nextSibling),s=c.data==="F!";break t}}aa(s)}s=!1}s&&(n=a[0])}}return a=bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=s,a=am.bind(null,ne,s),s.dispatch=a,s=wu(!1),f=zu.bind(null,ne,!1,s.queue),s=bn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Y0.bind(null,ne,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Hp(t){var n=Qe();return Gp(n,Ue,t)}function Gp(t,n,a){if(n=Ru(t,n,Ip)[0],t=ul(Li)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ks(n)}catch(g){throw g===Br?tl:g}else s=n;n=Qe();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ne.flags|=2048,Vr(9,{destroy:void 0},j0.bind(null,c,a),null)),[s,f,t]}function j0(t,n){t.action=n}function Vp(t){var n=Qe(),a=Ue;if(a!==null)return Gp(n,a,t);Qe(),n=n.memoizedState,a=Qe();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Vr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ne.updateQueue,n===null&&(n=ll(),ne.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function kp(){return Qe().memoizedState}function fl(t,n,a,s){var c=bn();ne.flags|=t,c.memoizedState=Vr(1|n,{destroy:void 0},a,s===void 0?null:s)}function hl(t,n,a,s){var c=Qe();s=s===void 0?null:s;var f=c.memoizedState.inst;Ue!==null&&s!==null&&yu(s,Ue.memoizedState.deps)?c.memoizedState=Vr(n,f,a,s):(ne.flags|=t,c.memoizedState=Vr(1|n,f,a,s))}function Xp(t,n){fl(8390656,8,t,n)}function Uu(t,n){hl(2048,8,t,n)}function Z0(t){ne.flags|=4;var n=ne.updateQueue;if(n===null)n=ll(),ne.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Wp(t){var n=Qe().memoizedState;return Z0({ref:n,nextImpl:t}),function(){if((Te&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function qp(t,n){return hl(4,2,t,n)}function Yp(t,n){return hl(4,4,t,n)}function jp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Zp(t,n,a){a=a!=null?a.concat([t]):null,hl(4,4,jp.bind(null,n,t),a)}function Lu(){}function Kp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&yu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Qp(t,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&yu(n,s[1]))return s[0];if(s=t(),Ja){ee(!0);try{t()}finally{ee(!1)}}return a.memoizedState=[s,n],s}function Nu(t,n,a){return a===void 0||(Ui&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Jm(),ne.lanes|=t,da|=t,a)}function Jp(t,n,a,s){return Hn(a,n)?a:Fr.current!==null?(t=Nu(t,a,s),Hn(t,n)||(an=!0),t):(Ui&42)===0||(Ui&1073741824)!==0&&(me&261930)===0?(an=!0,t.memoizedState=a):(t=Jm(),ne.lanes|=t,da|=t,n)}function $p(t,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var g=O.T,b={};O.T=b,zu(t,!1,n,a);try{var z=c(),Z=O.S;if(Z!==null&&Z(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=X0(z,s);Qs(t,n,ct,qn(t))}else Qs(t,n,s,qn(t))}catch(ht){Qs(t,n,{then:function(){},status:"rejected",reason:ht},qn())}finally{q.p=f,g!==null&&b.types!==null&&(g.types=b.types),O.T=g}}function K0(){}function Ou(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=tm(t).queue;$p(t,c,n,Y,a===null?K0:function(){return em(t),a(s)})}function tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function em(t){var n=tm(t);n.next===null&&(n=t.alternate.memoizedState),Qs(t,n.next.queue,{},qn())}function Pu(){return mn(mo)}function nm(){return Qe().memoizedState}function im(){return Qe().memoizedState}function Q0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=oa(a);var s=la(n,t,a);s!==null&&(Ln(s,n,a),qs(s,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function J0(t,n,a){var s=qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?rm(n,a):(a=$c(t,n,a,s),a!==null&&(Ln(a,t,s),sm(a,n,s)))}function am(t,n,a){var s=qn();Qs(t,n,a,s)}function Qs(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))rm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,Hn(b,g))return Yo(t,n,c,0),Pe===null&&qo(),!1}catch{}finally{}if(a=$c(t,n,c,s),a!==null)return Ln(a,t,s),sm(a,n,s),!0}return!1}function zu(t,n,a,s){if(s={lane:2,revertLane:mf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=$c(t,a,s,2),n!==null&&Ln(n,t,2)}function dl(t){var n=t.alternate;return t===ne||n!==null&&n===ne}function rm(t,n){Hr=sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,gi(t,a)}}var Js={readContext:mn,use:cl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};Js.useEffectEvent=Ye;var om={readContext:mn,use:cl,useCallback:function(t,n){return bn().memoizedState=[t,n===void 0?null:n],t},useContext:mn,useEffect:Xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fl(4194308,4,jp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fl(4194308,4,t,n)},useInsertionEffect:function(t,n){fl(4,2,t,n)},useMemo:function(t,n){var a=bn();n=n===void 0?null:n;var s=t();if(Ja){ee(!0);try{t()}finally{ee(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=bn();if(a!==void 0){var c=a(n);if(Ja){ee(!0);try{a(n)}finally{ee(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=J0.bind(null,ne,t),[s.memoizedState,t]},useRef:function(t){var n=bn();return t={current:t},n.memoizedState=t},useState:function(t){t=wu(t);var n=t.queue,a=am.bind(null,ne,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(t,n){var a=bn();return Nu(a,t,n)},useTransition:function(){var t=wu(!1);return t=$p.bind(null,ne,t.queue,!0,!1),bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ne,c=bn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Pe===null)throw Error(r(349));(me&127)!==0||Cp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Xp(Dp.bind(null,s,f,t),[t]),s.flags|=2048,Vr(9,{destroy:void 0},wp.bind(null,s,f,a,n),null),a},useId:function(){var t=bn(),n=Pe.identifierPrefix;if(_e){var a=vi,s=_i;a=(s&~(1<<32-Wt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=W0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Pu,useFormState:Fp,useActionState:Fp,useOptimistic:function(t){var n=bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zu.bind(null,ne,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return bn().memoizedState=Q0.bind(null,ne)},useEffectEvent:function(t){var n=bn(),a={impl:t};return n.memoizedState=a,function(){if((Te&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:mn,use:cl,useCallback:Kp,useContext:mn,useEffect:Uu,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:ul,useRef:kp,useState:function(){return ul(Li)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=Qe();return Jp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=ul(Li)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:Pu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=Qe();return Np(a,Ue,t,n)},useMemoCache:Au,useCacheRefresh:im};Bu.useEffectEvent=Wp;var lm={readContext:mn,use:cl,useCallback:Kp,useContext:mn,useEffect:Uu,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Cu,useRef:kp,useState:function(){return Cu(Li)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=Qe();return Ue===null?Nu(a,t,n):Jp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=Cu(Li)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:Pu,useFormState:Vp,useActionState:Vp,useOptimistic:function(t,n){var a=Qe();return Ue!==null?Np(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:im};lm.useEffectEvent=Wp;function Iu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),c=oa(s);c.payload=n,a!=null&&(c.callback=a),n=la(t,c,s),n!==null&&(Ln(n,t,s),qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),c=oa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=la(t,c,s),n!==null&&(Ln(n,t,s),qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=oa(a);s.tag=2,n!=null&&(s.callback=n),n=la(t,s,a),n!==null&&(Ln(n,t,a),qs(n,t,a))}};function cm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Is(a,s)||!Is(c,f):!0}function um(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function $a(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function fm(t){Wo(t)}function hm(t){console.error(t)}function dm(t){Wo(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function pm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function mm(t){return t=oa(t),t.tag=3,t}function gm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){pm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){pm(n,a,s),typeof c!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function $0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,c,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:return ti===null?Al():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===el?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),hf(t,s,c)),!1;case 22:return a.flags|=65536,s===el?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),hf(t,s,c)),!1}throw Error(r(435,a.tag))}return hf(t,s,c),Al(),!1}if(_e)return n=Vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ru&&(t=Error(r(422),{cause:s}),Gs(Kn(t,a)))):(s!==ru&&(n=Error(r(423),{cause:s}),Gs(Kn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Kn(s,a),c=Hu(t.stateNode,s,c),gu(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),so===null?so=[f]:so.push(f),je!==4&&(je=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,s,t),gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pa===null||!pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=mm(c),gm(c,t,a,s),gu(a,c),!1}a=a.return}while(a!==null);return!1}var Gu=Error(r(461)),an=!1;function gn(t,n,a,s){n.child=t===null?xp(n,null,a,s):Qa(n,t.child,a,s)}function _m(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return Ya(n),s=Mu(t,n,a,g,f,c),b=Eu(),t!==null&&!an?(Tu(t,n,c),Ni(t,n,c)):(_e&&b&&iu(n),n.flags|=1,gn(t,n,s,c),n.child)}function vm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(t,n,f,s,c)):(t=Zo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(g,s)&&t.ref===n.ref)return Ni(t,n,c)}return n.flags|=1,t=Ri(f,s),t.ref=n.ref,t.return=n,n.child=t}function Sm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Is(f,s)&&t.ref===n.ref)if(an=!1,n.pendingProps=s=f,Zu(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Ni(t,n,c)}return Vu(t,n,a,s,c)}function xm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return ym(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$o(n,f!==null?f.cachePool:null),f!==null?Ep(n,f):vu(),Tp(n);else return s=n.lanes=536870912,ym(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?($o(n,f.cachePool),Ep(n,f),ua(),n.memoizedState=null):(t!==null&&$o(n,null),vu(),ua());return gn(t,n,c,a),n.child}function $s(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ym(t,n,a,s,c){var f=hu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&$o(n,null),vu(),Tp(n),t!==null&&Or(t,n,s,!0),n.childLanes=c,null}function ml(t,n){return n=_l({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Mm(t,n,a){return Qa(n,t.child,null,a),t=ml(n,n.pendingProps),t.flags|=2,kn(n),n.memoizedState=null,t}function tS(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=ml(n,s),n.lanes=536870912,$s(null,t);if(xu(n),(t=He)?(t=Og(t,$n),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:na!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=n,n.child=a,pn=n,He=null)):t=null,t===null)throw aa(n);return n.lanes=536870912,null}return ml(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(xu(n),c)if(n.flags&256)n.flags&=-257,n=Mm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(an||Or(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(s=Pe,s!==null&&(g=vr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ka(t,g),Ln(s,t,g),Gu;Al(),n=Mm(t,n,a)}else t=f.treeContext,He=ei(g.nextSibling),pn=n,_e=!0,ia=null,$n=!1,t!==null&&lp(n,t),n=ml(n,s),n.flags|=4096;return n}return t=Ri(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vu(t,n,a,s,c){return Ya(n),a=Mu(t,n,a,s,void 0,c),s=Eu(),t!==null&&!an?(Tu(t,n,c),Ni(t,n,c)):(_e&&s&&iu(n),n.flags|=1,gn(t,n,a,c),n.child)}function Em(t,n,a,s,c,f){return Ya(n),n.updateQueue=null,a=Ap(n,s,a,c),bp(t),s=Eu(),t!==null&&!an?(Tu(t,n,f),Ni(t,n,f)):(_e&&s&&iu(n),n.flags|=1,gn(t,n,a,f),n.child)}function Tm(t,n,a,s,c){if(Ya(n),n.stateNode===null){var f=Dr,g=a.contextType;typeof g=="object"&&g!==null&&(f=mn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},pu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?mn(g):Dr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Iu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Fu.enqueueReplaceState(f,f.state,null),js(n,s,f,c),Ys(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,z=$a(a,b);f.props=z;var Z=f.context,ct=a.contextType;g=Dr,typeof ct=="object"&&ct!==null&&(g=mn(ct));var ht=a.getDerivedStateFromProps;ct=typeof ht=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Z!==g)&&um(n,f,s,g),sa=!1;var J=n.memoizedState;f.state=J,js(n,s,f,c),Ys(),Z=n.memoizedState,b||J!==Z||sa?(typeof ht=="function"&&(Iu(n,a,ht,s),Z=n.memoizedState),(z=sa||cm(n,a,z,s,J,Z,g))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,mu(t,n),g=n.memoizedProps,ct=$a(a,g),f.props=ct,ht=n.pendingProps,J=f.context,Z=a.contextType,z=Dr,typeof Z=="object"&&Z!==null&&(z=mn(Z)),b=a.getDerivedStateFromProps,(Z=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ht||J!==z)&&um(n,f,s,z),sa=!1,J=n.memoizedState,f.state=J,js(n,s,f,c),Ys();var it=n.memoizedState;g!==ht||J!==it||sa||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof b=="function"&&(Iu(n,a,b,s),it=n.memoizedState),(ct=sa||cm(n,a,ct,s,J,it,z)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=z,s=ct):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,gl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Qa(n,t.child,null,c),n.child=Qa(n,null,a,c)):gn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ni(t,n,c),t}function bm(t,n,a,s){return Wa(),n.flags|=256,gn(t,n,a,s),n.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(t){return{baseLanes:t,cachePool:pp()}}function Wu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Wn),t}function Am(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ke.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(c?ca(n):ua(),(t=He)?(t=Og(t,$n),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:na!==null?{id:_i,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=n,n.child=a,pn=n,He=null)):t=null,t===null)throw aa(n);return Cf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(ua(),c=n.mode,b=_l({mode:"hidden",children:b},c),s=Xa(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=Xu(a),s.childLanes=Wu(t,g,a),n.memoizedState=ku,$s(null,s)):(ca(n),qu(n,b))}var z=t.memoizedState;if(z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=Yu(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),b=s.fallback,c=n.mode,s=_l({mode:"visible",children:s.children},c),b=Xa(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,Qa(n,t.child,null,a),s=n.child,s.memoizedState=Xu(a),s.childLanes=Wu(t,g,a),n.memoizedState=ku,n=$s(null,s));else if(ca(n),Cf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var Z=g.dgst;g=Z,s=Error(r(419)),s.stack="",s.digest=g,Gs({value:s,source:null,stack:null}),n=Yu(t,n,a)}else if(an||Or(t,n,a,!1),g=(a&t.childLanes)!==0,an||g){if(g=Pe,g!==null&&(s=vr(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,ka(t,s),Ln(g,t,s),Gu;Rf(b)||Al(),n=Yu(t,n,a)}else Rf(b)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,He=ei(b.nextSibling),pn=n,_e=!0,ia=null,$n=!1,t!==null&&lp(n,t),n=qu(n,s.children),n.flags|=4096);return n}return c?(ua(),b=s.fallback,c=n.mode,z=t.child,Z=z.sibling,s=Ri(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,Z!==null?b=Ri(Z,b):(b=Xa(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,$s(null,s),s=n.child,b=t.child.memoizedState,b===null?b=Xu(a):(c=b.cachePool,c!==null?(z=en._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=pp(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Wu(t,g,a),n.memoizedState=ku,$s(t.child,s)):(ca(n),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function qu(t,n){return n=_l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _l(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function Yu(t,n,a){return Qa(n,t.child,null,a),t=qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),lu(t.return,n,a)}function ju(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Cm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=Ke.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,vt(Ke,g),gn(t,n,s,a),s=_e?Hs:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,a,n);else if(t.tag===19)Rm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&rl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ju(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&rl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ju(n,!0,a,null,f,s);break;case"together":ju(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ni(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),da|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ri(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function eS(t,n,a){switch(n.tag){case 3:Xt(n,n.stateNode.containerInfo),ra(n,en,t.memoizedState.cache),Wa();break;case 27:case 5:oe(n);break;case 4:Xt(n,n.stateNode.containerInfo);break;case 10:ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(t,n,a):(ca(n),t=Ni(t,n,a),t!==null?t.sibling:null);ca(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Or(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Cm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(Ke,Ke.current),s)break;return null;case 22:return n.lanes=0,xm(t,n,a,n.pendingProps);case 24:ra(n,en,t.memoizedState.cache)}return Ni(t,n,a)}function wm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return an=!1,eS(t,n,a);an=(t.flags&131072)!==0}else an=!1,_e&&(n.flags&1048576)!==0&&op(n,Hs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Za(n.elementType),n.type=t,typeof t=="function")tu(t)?(s=$a(t,s),n.tag=1,n=Tm(null,n,t,s,a)):(n.tag=0,n=Vu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===P){n.tag=11,n=_m(null,n,t,s,a);break t}else if(c===N){n.tag=14,n=vm(null,n,t,s,a);break t}}throw n=ft(t)||t,Error(r(306,n,""))}}return n;case 0:return Vu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=$a(s,n.pendingProps),Tm(t,n,s,c,a);case 3:t:{if(Xt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ra(n,en,s),s!==f.cache&&cu(n,[en],a,!0),Ys(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bm(t,n,s,a);break t}else if(s!==c){c=Kn(Error(r(424)),n),Gs(c),n=bm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(He=ei(t.firstChild),pn=n,_e=!0,ia=null,$n=!0,a=xp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Wa(),s===c){n=Ni(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return gl(t,n),t===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(a=n.type,t=n.pendingProps,s=Nl(St.current).createElement(a),s[tn]=n,s[dn]=t,_n(s,a,t),Rt(s),n.stateNode=s):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return oe(n),t===null&&_e&&(s=n.stateNode=Bg(n.type,n.pendingProps,St.current),pn=n,$n=!0,c=He,va(n.type)?(wf=c,He=ei(s.firstChild)):He=c),gn(t,n,n.pendingProps.children,a),gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((c=s=He)&&(s=US(s,n.type,n.pendingProps,$n),s!==null?(n.stateNode=s,pn=n,He=ei(s.firstChild),$n=!1,c=!0):c=!1),c||aa(n)),oe(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Tf(c,f)?s=null:g!==null&&Tf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Mu(t,n,q0,null,null,a),mo._currentValue=c),gl(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=He)&&(a=LS(a,n.pendingProps,$n),a!==null?(n.stateNode=a,pn=n,He=null,t=!0):t=!1),t||aa(n)),null;case 13:return Am(t,n,a);case 4:return Xt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Qa(n,null,s,a):gn(t,n,s,a),n.child;case 11:return _m(t,n,n.type,n.pendingProps,a);case 7:return gn(t,n,n.pendingProps,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ra(n,n.type,s.value),gn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Ya(n),c=mn(c),s=s(c),n.flags|=1,gn(t,n,s,a),n.child;case 14:return vm(t,n,n.type,n.pendingProps,a);case 15:return Sm(t,n,n.type,n.pendingProps,a);case 19:return Cm(t,n,a);case 31:return tS(t,n,a);case 22:return xm(t,n,a,n.pendingProps);case 24:return Ya(n),s=mn(en),t===null?(c=hu(),c===null&&(c=Pe,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},pu(n),ra(n,en,c)):((t.lanes&a)!==0&&(mu(t,n),js(n,null,null,a),Ys()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ra(n,en,s)):(s=f.cache,ra(n,en,s),s!==c.cache&&cu(n,[en],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Oi(t){t.flags|=4}function Ku(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw Ka=el,du}else t.flags&=-16777217}function Dm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw Ka=el,du}function vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Se():536870912,t.lanes|=n,qr|=n)}function to(t,n){if(!_e)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function nS(t,n,a){var s=n.pendingProps;switch(au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Di(en),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Nr(n)?Oi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,su())),Ge(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Oi(n),f!==null?(Ge(n),Dm(n,f)):(Ge(n),Ku(n,c,null,s,a))):f?f!==t.memoizedState?(Oi(n),Ge(n),Dm(n,f)):(Ge(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Oi(n),Ge(n),Ku(n,c,t,s,a)),null;case 27:if(xe(n),a=St.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Oi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=W.current,Nr(n)?cp(n):(t=Bg(c,s,a),n.stateNode=t,Oi(n))}return Ge(n),null;case 5:if(xe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Oi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(f=W.current,Nr(n))cp(n);else{var g=Nl(St.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[tn]=n,f[dn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(_n(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Oi(n)}}return Ge(n),Ku(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Oi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Nr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=pn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[tn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ag(t.nodeValue,a)),t||aa(n,!0)}else t=Nl(t).createTextNode(s),t[tn]=n,n.stateNode=t}return Ge(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Nr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[tn]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),t=!1}else a=su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ge(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Nr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[tn]=n}else Wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else c=su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),vl(n,n.updateQueue),Ge(n),null);case 4:return zt(),t===null&&Sf(n.stateNode.containerInfo),Ge(n),null;case 10:return Di(n.type),Ge(n),null;case 19:if(et(Ke),s=n.memoizedState,s===null)return Ge(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)to(s,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=rl(t),f!==null){for(n.flags|=128,to(s,!1),t=f.updateQueue,n.updateQueue=t,vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ap(a,t),a=a.sibling;return vt(Ke,Ke.current&1|2),_e&&Ci(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&_t()>El&&(n.flags|=128,c=!0,to(s,!1),n.lanes=4194304)}else{if(!c)if(t=rl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,vl(n,t),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!_e)return Ge(n),null}else 2*_t()-s.renderingStartTime>El&&a!==536870912&&(n.flags|=128,c=!0,to(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=_t(),t.sibling=null,a=Ke.current,vt(Ke,c?a&1|2:a&1),_e&&Ci(n,s.treeForkCount),t):(Ge(n),null);case 22:case 23:return kn(n),Su(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Di(en),Ge(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function iS(t,n){switch(au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Di(en),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return xe(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(r(340));Wa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Wa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(Ke),null;case 4:return zt(),null;case 10:return Di(n.type),null;case 22:case 23:return kn(n),Su(),t!==null&&et(ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Di(en),null;case 25:return null;default:return null}}function Um(t,n){switch(au(n),n.tag){case 3:Di(en),zt();break;case 26:case 27:case 5:xe(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:et(Ke);break;case 10:Di(n.type);break;case 22:case 23:kn(n),Su(),t!==null&&et(ja);break;case 24:Di(en)}}function eo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(b){Ce(n,n.return,b)}}function fa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var z=a,Z=b;try{Z()}catch(ct){Ce(c,z,ct)}}}s=s.next}while(s!==f)}}catch(ct){Ce(n,n.return,ct)}}function Lm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mp(n,a)}catch(s){Ce(t,t.return,s)}}}function Nm(t,n,a){a.props=$a(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ce(t,n,s)}}function no(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ce(t,n,c)}}function Si(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ce(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ce(t,n,c)}else a.current=null}function Om(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ce(t,t.return,c)}}function Qu(t,n,a){try{var s=t.stateNode;bS(s,t.type,a,n),s[dn]=n}catch(c){Ce(t,t.return,c)}}function Pm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Ju(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Pm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=bi));else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for($u(t,n,a),t=t.sibling;t!==null;)$u(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function zm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);_n(n,s,a),n[tn]=t,n[dn]=a}catch(f){Ce(t,t.return,f)}}var Pi=!1,rn=!1,tf=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function aS(t,n){if(t=t.containerInfo,Mf=Hl,t=Zd(t),Yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,z=-1,Z=0,ct=0,ht=t,J=null;e:for(;;){for(var it;ht!==a||c!==0&&ht.nodeType!==3||(b=g+c),ht!==f||s!==0&&ht.nodeType!==3||(z=g+s),ht.nodeType===3&&(g+=ht.nodeValue.length),(it=ht.firstChild)!==null;)J=ht,ht=it;for(;;){if(ht===t)break e;if(J===a&&++Z===c&&(b=g),J===f&&++ct===s&&(z=g),(it=ht.nextSibling)!==null)break;ht=J,J=ht.parentNode}ht=it}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:t,selectionRange:a},Hl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=$a(a.type,c);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(jt){Ce(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Im(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Bi(t,a),s&4&&eo(5,a);break;case 1:if(Bi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ce(a,a.return,g)}else{var c=$a(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ce(a,a.return,g)}}s&64&&Lm(a),s&512&&no(a,a.return);break;case 3:if(Bi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(t,n)}catch(g){Ce(a,a.return,g)}}break;case 27:n===null&&s&4&&zm(a);case 26:case 5:Bi(t,a),n===null&&s&4&&Om(a),s&512&&no(a,a.return);break;case 12:Bi(t,a);break;case 31:Bi(t,a),s&4&&Gm(t,a);break;case 13:Bi(t,a),s&4&&Vm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dS.bind(null,a),NS(t,a))));break;case 22:if(s=a.memoizedState!==null||Pi,!s){n=n!==null&&n.memoizedState!==null||rn,c=Pi;var f=rn;Pi=s,(rn=n)&&!f?Ii(t,a,(a.subtreeFlags&8772)!==0):Bi(t,a),Pi=c,rn=f}break;case 30:break;default:Bi(t,a)}}function Fm(t){var n=t.alternate;n!==null&&(t.alternate=null,Fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&tt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Cn=!1;function zi(t,n,a){for(a=a.child;a!==null;)Hm(t,n,a),a=a.sibling}function Hm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:rn||Si(a,n),zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Si(a,n);var s=We,c=Cn;va(a.type)&&(We=a.stateNode,Cn=!1),zi(t,n,a),fo(a.stateNode),We=s,Cn=c;break;case 5:rn||Si(a,n);case 6:if(s=We,c=Cn,We=null,zi(t,n,a),We=s,Cn=c,We!==null)if(Cn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ce(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ce(a,n,f)}break;case 18:We!==null&&(Cn?(t=We,Lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ts(t)):Lg(We,a.stateNode));break;case 4:s=We,c=Cn,We=a.stateNode.containerInfo,Cn=!0,zi(t,n,a),We=s,Cn=c;break;case 0:case 11:case 14:case 15:fa(2,a,n),rn||fa(4,a,n),zi(t,n,a);break;case 1:rn||(Si(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Nm(a,n,s)),zi(t,n,a);break;case 21:zi(t,n,a);break;case 22:rn=(s=rn)||a.memoizedState!==null,zi(t,n,a),rn=s;break;default:zi(t,n,a)}}function Gm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ts(t)}catch(a){Ce(n,n.return,a)}}}function Vm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ts(t)}catch(a){Ce(n,n.return,a)}}function rS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bm),n;default:throw Error(r(435,t.tag))}}function xl(t,n){var a=rS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=pS.bind(null,t,s);s.then(c,c)}})}function wn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(va(b.type)){We=b.stateNode,Cn=!1;break t}break;case 5:We=b.stateNode,Cn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Cn=!0;break t}b=b.return}if(We===null)throw Error(r(160));Hm(f,g,c),We=null,Cn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,t),n=n.sibling}var li=null;function km(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wn(n,t),Dn(t),s&4&&(fa(3,t,t.return),eo(3,t),fa(5,t,t.return));break;case 1:wn(n,t),Dn(t),s&512&&(rn||a===null||Si(a,a.return)),s&64&&Pi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(wn(n,t),Dn(t),s&512&&(rn||a===null||Si(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Q]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),_n(f,s,a),f[tn]=t,Rt(f),s=f;break t;case"link":var g=kg("link","href",c).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;case"meta":if(g=kg("meta","content",c).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[tn]=t,Rt(f),s=f}t.stateNode=s}else Xg(c,t.type,t.stateNode);else t.stateNode=Vg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Xg(c,t.type,t.stateNode):Vg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:wn(n,t),Dn(t),s&512&&(rn||a===null||Si(a,a.return)),a!==null&&s&4&&Qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(wn(n,t),Dn(t),s&512&&(rn||a===null||Si(a,a.return)),t.flags&32){c=t.stateNode;try{Er(c,"")}catch(Ft){Ce(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Qu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(tf=!0);break;case 6:if(wn(n,t),Dn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){Ce(t,t.return,Ft)}}break;case 3:if(zl=null,c=li,li=Ol(n.containerInfo),wn(n,t),li=c,Dn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ts(n.containerInfo)}catch(Ft){Ce(t,t.return,Ft)}tf&&(tf=!1,Xm(t));break;case 4:s=li,li=Ol(t.stateNode.containerInfo),wn(n,t),Dn(t),li=s;break;case 12:wn(n,t),Dn(t);break;case 31:wn(n,t),Dn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 13:wn(n,t),Dn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ml=_t()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Z=Pi,ct=rn;if(Pi=Z||c,rn=ct||z,wn(n,t),rn=ct,Pi=Z,Dn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Pi||rn||tr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=z.stateNode;var ht=z.memoizedProps.style,J=ht!=null&&ht.hasOwnProperty("display")?ht.display:null;b.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ft){Ce(z,z.return,Ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ft){Ce(z,z.return,Ft)}}}else if(n.tag===18){if(a===null){z=n;try{var it=z.stateNode;c?Ng(it,!0):Ng(z.stateNode,!1)}catch(Ft){Ce(z,z.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,xl(t,a))));break;case 19:wn(n,t),Dn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 30:break;case 21:break;default:wn(n,t),Dn(t)}}function Dn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Pm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ju(t);Sl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Er(g,""),a.flags&=-33);var b=Ju(t);Sl(t,b,g);break;case 3:case 4:var z=a.stateNode.containerInfo,Z=Ju(t);$u(t,Z,z);break;default:throw Error(r(161))}}catch(ct){Ce(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Xm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Bi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Im(t,n.alternate,n),n=n.sibling}function tr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:fa(4,n,n.return),tr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),tr(n);break;case 27:fo(n.stateNode);case 26:case 5:Si(n,n.return),tr(n);break;case 22:n.memoizedState===null&&tr(n);break;case 30:tr(n);break;default:tr(n)}t=t.sibling}}function Ii(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ii(c,f,a),eo(4,f);break;case 1:if(Ii(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){Ce(s,s.return,Z)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)yp(z[c],b)}catch(Z){Ce(s,s.return,Z)}}a&&g&64&&Lm(f),no(f,f.return);break;case 27:zm(f);case 26:case 5:Ii(c,f,a),a&&s===null&&g&4&&Om(f),no(f,f.return);break;case 12:Ii(c,f,a);break;case 31:Ii(c,f,a),a&&g&4&&Gm(c,f);break;case 13:Ii(c,f,a),a&&g&4&&Vm(c,f);break;case 22:f.memoizedState===null&&Ii(c,f,a),no(f,f.return);break;case 30:break;default:Ii(c,f,a)}n=n.sibling}}function ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Vs(a))}function nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t))}function ci(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(t,n,a,s),n=n.sibling}function Wm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ci(t,n,a,s),c&2048&&eo(9,n);break;case 1:ci(t,n,a,s);break;case 3:ci(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t)));break;case 12:if(c&2048){ci(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ce(n,n.return,z)}}else ci(t,n,a,s);break;case 31:ci(t,n,a,s);break;case 13:ci(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?ci(t,n,a,s):io(t,n):f._visibility&2?ci(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(g,n);break;case 24:ci(t,n,a,s),c&2048&&nf(n.alternate,n);break;default:ci(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,z=s,Z=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,b,z,c),eo(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?kr(f,g,b,z,c):io(f,g):(ct._visibility|=2,kr(f,g,b,z,c)),c&&Z&2048&&ef(g.alternate,g);break;case 24:kr(f,g,b,z,c),c&&Z&2048&&nf(g.alternate,g);break;default:kr(f,g,b,z,c)}n=n.sibling}}function io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:io(a,s),c&2048&&ef(s.alternate,s);break;case 24:io(a,s),c&2048&&nf(s.alternate,s);break;default:io(a,s)}n=n.sibling}}var ao=8192;function Xr(t,n,a){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)qm(t,n,a),t=t.sibling}function qm(t,n,a){switch(t.tag){case 26:Xr(t,n,a),t.flags&ao&&t.memoizedState!==null&&WS(a,li,t.memoizedState,t.memoizedProps);break;case 5:Xr(t,n,a);break;case 3:case 4:var s=li;li=Ol(t.stateNode.containerInfo),Xr(t,n,a),li=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=ao,ao=16777216,Xr(t,n,a),ao=s):Xr(t,n,a));break;default:Xr(t,n,a)}}function Ym(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Zm(s,t)}Ym(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(t),t=t.sibling}function jm(t){switch(t.tag){case 0:case 11:case 15:ro(t),t.flags&2048&&fa(9,t,t.return);break;case 3:ro(t);break;case 12:ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yl(t)):ro(t);break;default:ro(t)}}function yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Zm(s,t)}Ym(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:fa(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}t=t.sibling}}function Zm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var c=s.sibling,f=s.return;if(Fm(s),s===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var sS={getCacheForType:function(t){var n=mn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return mn(en).controller.signal}},oS=typeof WeakMap=="function"?WeakMap:Map,Te=0,Pe=null,fe=null,me=0,Re=0,Xn=null,ha=!1,Wr=!1,af=!1,Fi=0,je=0,da=0,er=0,rf=0,Wn=0,qr=0,so=null,Un=null,sf=!1,Ml=0,Km=0,El=1/0,Tl=null,pa=null,on=0,ma=null,Yr=null,Hi=0,of=0,lf=null,Qm=null,oo=0,cf=null;function qn(){return(Te&2)!==0&&me!==0?me&-me:O.T!==null?mf():Ba()}function Jm(){if(Wn===0)if((me&536870912)===0||_e){var t=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),Wn=t}else Wn=536870912;return t=Vn.current,t!==null&&(t.flags|=32),Wn}function Ln(t,n,a){(t===Pe&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(jr(t,0),ga(t,me,Wn,!1)),En(t,a),((Te&2)===0||t!==Pe)&&(t===Pe&&((Te&2)===0&&(er|=a),je===4&&ga(t,me,Wn,!1)),xi(t))}function $m(t,n,a){if((Te&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Be(t,n),c=s?uS(t,n):ff(t,n,!0),f=s;do{if(c===0){Wr&&!s&&ga(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!lS(a)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=so;var z=b.current.memoizedState.isDehydrated;if(z&&(jr(b,g).flags|=256),g=ff(b,g,!1),g!==2){if(af&&!z){b.errorRecoveryDisabledLanes|=f,er|=f,c=4;break t}f=Un,Un=c,f!==null&&(Un===null?Un=f:Un.push.apply(Un,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){jr(t,0),ga(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ga(s,n,Wn,!ha);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ml+300-_t(),10<c)){if(ga(s,n,Wn,!ha),ce(s,0,!0)!==0)break t;Hi=n,s.timeoutHandle=Dg(tg.bind(null,s,a,Un,Tl,sf,n,Wn,er,qr,ha,f,"Throttled",-0,0),c);break t}tg(s,a,Un,Tl,sf,n,Wn,er,qr,ha,f,null,-0,0)}}break}while(!0);xi(t)}function tg(t,n,a,s,c,f,g,b,z,Z,ct,ht,J,it){if(t.timeoutHandle=-1,ht=n.subtreeFlags,ht&8192||(ht&16785408)===16785408){ht={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bi},qm(n,f,ht);var Ft=(f&62914560)===f?Ml-_t():(f&4194048)===f?Km-_t():0;if(Ft=qS(ht,Ft),Ft!==null){Hi=f,t.cancelPendingCommit=Ft(lg.bind(null,t,n,f,a,s,c,g,b,z,ct,ht,null,J,it)),ga(t,f,g,!Z);return}}lg(t,n,f,a,s,c,g,b,z)}function lS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ga(t,n,a,s){n&=~rf,n&=~er,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Wt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Rs(t,a,n)}function bl(){return(Te&6)===0?(lo(0),!1):!0}function uf(){if(fe!==null){if(Re===0)var t=fe.return;else t=fe,wi=qa=null,bu(t),Ir=null,Xs=0,t=fe;for(;t!==null;)Um(t.alternate,t),t=t.return;fe=null}}function jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,CS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Hi=0,uf(),Pe=t,fe=a=Ri(t.current,null),me=n,Re=0,Xn=null,ha=!1,Wr=Be(t,n),af=!1,qr=Wn=rf=er=da=je=0,Un=so=null,sf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Wt(s),f=1<<c;n|=t[c],s&=~f}return Fi=n,qo(),a}function eg(t,n){ne=null,O.H=Js,n===Br||n===tl?(n=_p(),Re=3):n===du?(n=_p(),Re=4):Re=n===Gu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,fe===null&&(je=1,pl(t,Kn(n,t.current)))}function ng(){var t=Vn.current;return t===null?!0:(me&4194048)===me?ti===null:(me&62914560)===me||(me&536870912)!==0?t===ti:!1}function ig(){var t=O.H;return O.H=Js,t===null?Js:t}function ag(){var t=O.A;return O.A=sS,t}function Al(){je=4,ha||(me&4194048)!==me&&Vn.current!==null||(Wr=!0),(da&134217727)===0&&(er&134217727)===0||Pe===null||ga(Pe,me,Wn,!1)}function ff(t,n,a){var s=Te;Te|=2;var c=ig(),f=ag();(Pe!==t||me!==n)&&(Tl=null,jr(t,n)),n=!1;var g=je;t:do try{if(Re!==0&&fe!==null){var b=fe,z=Xn;switch(Re){case 8:uf(),g=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(n=!0);var Z=Re;if(Re=0,Xn=null,Zr(t,b,z,Z),a&&Wr){g=0;break t}break;default:Z=Re,Re=0,Xn=null,Zr(t,b,z,Z)}}cS(),g=je;break}catch(ct){eg(t,ct)}while(!0);return n&&t.shellSuspendCounter++,wi=qa=null,Te=s,O.H=c,O.A=f,fe===null&&(Pe=null,me=0,qo()),g}function cS(){for(;fe!==null;)rg(fe)}function uS(t,n){var a=Te;Te|=2;var s=ig(),c=ag();Pe!==t||me!==n?(Tl=null,El=_t()+500,jr(t,n)):Wr=Be(t,n);t:do try{if(Re!==0&&fe!==null){n=fe;var f=Xn;e:switch(Re){case 1:Re=0,Xn=null,Zr(t,n,f,1);break;case 2:case 9:if(mp(f)){Re=0,Xn=null,sg(n);break}n=function(){Re!==2&&Re!==9||Pe!==t||(Re=7),xi(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:mp(f)?(Re=0,Xn=null,sg(n)):(Re=0,Xn=null,Zr(t,n,f,7));break;case 5:var g=null;switch(fe.tag){case 26:g=fe.memoizedState;case 5:case 27:var b=fe;if(g?Wg(g):b.stateNode.complete){Re=0,Xn=null;var z=b.sibling;if(z!==null)fe=z;else{var Z=b.return;Z!==null?(fe=Z,Rl(Z)):fe=null}break e}}Re=0,Xn=null,Zr(t,n,f,5);break;case 6:Re=0,Xn=null,Zr(t,n,f,6);break;case 8:uf(),je=6;break t;default:throw Error(r(462))}}fS();break}catch(ct){eg(t,ct)}while(!0);return wi=qa=null,O.H=s,O.A=c,Te=a,fe!==null?0:(Pe=null,me=0,qo(),je)}function fS(){for(;fe!==null&&!$();)rg(fe)}function rg(t){var n=wm(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,n===null?Rl(t):fe=n}function sg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Em(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=Em(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:bu(n);default:Um(a,n),n=fe=ap(n,Fi),n=wm(a,n,Fi)}t.memoizedProps=t.pendingProps,n===null?Rl(t):fe=n}function Zr(t,n,a,s){wi=qa=null,bu(n),Ir=null,Xs=0;var c=n.return;try{if($0(t,c,n,a,me)){je=1,pl(t,Kn(a,t.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;je=1,pl(t,Kn(a,t.current)),fe=null;return}n.flags&32768?(_e||s===1?t=!0:Wr||(me&536870912)!==0?t=!1:(ha=t=!0,(s===2||s===9||s===3||s===6)&&(s=Vn.current,s!==null&&s.tag===13&&(s.flags|=16384))),og(n,t)):Rl(n)}function Rl(t){var n=t;do{if((n.flags&32768)!==0){og(n,ha);return}t=n.return;var a=nS(n.alternate,n,Fi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=t}while(n!==null);je===0&&(je=5)}function og(t,n){do{var a=iS(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);je=6,fe=null}function lg(t,n,a,s,c,f,g,b,z){t.cancelPendingCommit=null;do Cl();while(on!==0);if((Te&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Jc,zo(t,a,f,g,b,z),t===Pe&&(fe=Pe=null,me=0),Yr=n,ma=t,Hi=a,of=f,lf=c,Qm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,mS(Ot,function(){return dg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=q.p,q.p=2,g=Te,Te|=4;try{aS(t,n,a)}finally{Te=g,q.p=c,O.T=s}}on=1,cg(),ug(),fg()}}function cg(){if(on===1){on=0;var t=ma,n=Yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=q.p;q.p=2;var c=Te;Te|=4;try{km(n,t);var f=Ef,g=Zd(t.containerInfo),b=f.focusedElem,z=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&jd(b.ownerDocument.documentElement,b)){if(z!==null&&Yc(b)){var Z=z.start,ct=z.end;if(ct===void 0&&(ct=Z),"selectionStart"in b)b.selectionStart=Z,b.selectionEnd=Math.min(ct,b.value.length);else{var ht=b.ownerDocument||document,J=ht&&ht.defaultView||window;if(J.getSelection){var it=J.getSelection(),Ft=b.textContent.length,jt=Math.min(z.start,Ft),Ne=z.end===void 0?jt:Math.min(z.end,Ft);!it.extend&&jt>Ne&&(g=Ne,Ne=jt,jt=g);var X=Yd(b,jt),I=Yd(b,Ne);if(X&&I&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==I.node||it.focusOffset!==I.offset)){var j=ht.createRange();j.setStart(X.node,X.offset),it.removeAllRanges(),jt>Ne?(it.addRange(j),it.extend(I.node,I.offset)):(j.setEnd(I.node,I.offset),it.addRange(j))}}}}for(ht=[],it=b;it=it.parentNode;)it.nodeType===1&&ht.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ht.length;b++){var ut=ht[b];ut.element.scrollLeft=ut.left,ut.element.scrollTop=ut.top}}Hl=!!Mf,Ef=Mf=null}finally{Te=c,q.p=s,O.T=a}}t.current=n,on=2}}function ug(){if(on===2){on=0;var t=ma,n=Yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=q.p;q.p=2;var c=Te;Te|=4;try{Im(t,n.alternate,n)}finally{Te=c,q.p=s,O.T=a}}on=3}}function fg(){if(on===4||on===3){on=0,pt();var t=ma,n=Yr,a=Hi,s=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,Yr=ma=null,hg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(pa=null),xr(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=q.p,q.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{O.T=n,q.p=c}}(Hi&3)!==0&&Cl(),xi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===cf?oo++:(oo=0,cf=t):oo=0,lo(0)}}function hg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Vs(n)))}function Cl(){return cg(),ug(),fg(),dg()}function dg(){if(on!==5)return!1;var t=ma,n=of;of=0;var a=xr(Hi),s=O.T,c=q.p;try{q.p=32>a?32:a,O.T=null,a=lf,lf=null;var f=ma,g=Hi;if(on=0,Yr=ma=null,Hi=0,(Te&6)!==0)throw Error(r(331));var b=Te;if(Te|=4,jm(f.current),Wm(f,f.current,g,a),Te=b,lo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Yt,f)}catch{}return!0}finally{q.p=c,O.T=s,hg(t,n)}}function pg(t,n,a){n=Kn(a,n),n=Hu(t.stateNode,n,2),t=la(t,n,2),t!==null&&(En(t,2),xi(t))}function Ce(t,n,a){if(t.tag===3)pg(t,t,a);else for(;n!==null;){if(n.tag===3){pg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(pa===null||!pa.has(s))){t=Kn(a,t),a=mm(2),s=la(n,a,2),s!==null&&(gm(a,s,n,t),En(s,2),xi(s));break}}n=n.return}}function hf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new oS;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(af=!0,c.add(a),t=hS.bind(null,t,n,a),n.then(t,t))}function hS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Pe===t&&(me&a)===a&&(je===4||je===3&&(me&62914560)===me&&300>_t()-Ml?(Te&2)===0&&jr(t,0):rf|=a,qr===me&&(qr=0)),xi(t)}function mg(t,n){n===0&&(n=Se()),t=ka(t,n),t!==null&&(En(t,n),xi(t))}function dS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(t,a)}function pS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),mg(t,a)}function mS(t,n){return U(t,n)}var wl=null,Kr=null,df=!1,Dl=!1,pf=!1,_a=0;function xi(t){t!==Kr&&t.next===null&&(Kr===null?wl=Kr=t:Kr=Kr.next=t),Dl=!0,df||(df=!0,_S())}function lo(t,n){if(!pf&&Dl){pf=!0;do for(var a=!1,s=wl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Wt(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sg(s,f))}else f=me,f=ce(s,s===Pe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Be(s,f)||(a=!0,Sg(s,f));s=s.next}while(a);pf=!1}}function gS(){gg()}function gg(){Dl=df=!1;var t=0;_a!==0&&RS()&&(t=_a);for(var n=_t(),a=null,s=wl;s!==null;){var c=s.next,f=_g(s,n);f===0?(s.next=null,a===null?wl=c:a.next=c,c===null&&(Kr=a)):(a=s,(t!==0||(f&3)!==0)&&(Dl=!0)),s=c}on!==0&&on!==5||lo(t),_a!==0&&(_a=0)}function _g(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Wt(f),b=1<<g,z=c[g];z===-1?((b&a)===0||(b&s)!==0)&&(c[g]=vn(b,n)):z<=n&&(t.expiredLanes|=b),f&=~b}if(n=Pe,a=me,a=ce(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&A(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Be(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&A(s),xr(a)){case 2:case 8:a=wt;break;case 32:a=Ot;break;case 268435456:a=At;break;default:a=Ot}return s=vg.bind(null,t),a=U(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&A(s),t.callbackPriority=2,t.callbackNode=null,2}function vg(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cl()&&t.callbackNode!==a)return null;var s=me;return s=ce(t,t===Pe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:($m(t,s,n),_g(t,_t()),t.callbackNode!=null&&t.callbackNode===a?vg.bind(null,t):null)}function Sg(t,n){if(Cl())return null;$m(t,n,!0)}function _S(){wS(function(){(Te&6)!==0?U(kt,gS):gg()})}function mf(){if(_a===0){var t=Pr;t===0&&(t=ot,ot<<=1,(ot&261888)===0&&(ot=256)),_a=t}return _a}function xg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Io(""+t)}function yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function vS(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=xg((c[dn]||null).action),g=s.submitter;g&&(n=(n=g[dn]||null)?xg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new Vo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(_a!==0){var z=g?yg(c,g):new FormData(c);Ou(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=g?yg(c,g):new FormData(c),Ou(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var gf=0;gf<Qc.length;gf++){var _f=Qc[gf],SS=_f.toLowerCase(),xS=_f[0].toUpperCase()+_f.slice(1);oi(SS,"on"+xS)}oi(Jd,"onAnimationEnd"),oi($d,"onAnimationIteration"),oi(tp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(z0,"onTransitionRun"),oi(B0,"onTransitionStart"),oi(I0,"onTransitionCancel"),oi(ep,"onTransitionEnd"),pe("onMouseEnter",["mouseout","mouseover"]),pe("onMouseLeave",["mouseout","mouseover"]),pe("onPointerEnter",["pointerout","pointerover"]),pe("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function Mg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],z=b.instance,Z=b.currentTarget;if(b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Z;try{f(c)}catch(ct){Wo(ct)}c.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(b=s[g],z=b.instance,Z=b.currentTarget,b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Z;try{f(c)}catch(ct){Wo(ct)}c.currentTarget=null,f=z}}}}function he(t,n){var a=n[ws];a===void 0&&(a=n[ws]=new Set);var s=t+"__bubble";a.has(s)||(Eg(n,t,2,!1),a.add(s))}function vf(t,n,a){var s=0;n&&(s|=4),Eg(a,t,s,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Sf(t){if(!t[Ul]){t[Ul]=!0,Zt.forEach(function(a){a!=="selectionchange"&&(yS.has(a)||vf(a,!1,t),vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,vf("selectionchange",!1,n))}}function Eg(t,n,a,s){switch(Jg(n)){case 2:var c=ZS;break;case 8:c=KS;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function xf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=k(b),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue t}b=b.parentNode}}s=s.return}Cd(function(){var Z=f,ct=zc(a),ht=[];t:{var J=np.get(t);if(J!==void 0){var it=Vo,Ft=t;switch(t){case"keypress":if(Ho(a)===0)break t;case"keydown":case"keyup":it=p0;break;case"focusin":Ft="focus",it=Vc;break;case"focusout":Ft="blur",it=Vc;break;case"beforeblur":case"afterblur":it=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=_0;break;case Jd:case $d:case tp:it=r0;break;case ep:it=S0;break;case"scroll":case"scrollend":it=t0;break;case"wheel":it=y0;break;case"copy":case"cut":case"paste":it=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Nd;break;case"toggle":case"beforetoggle":it=E0}var jt=(n&4)!==0,Ne=!jt&&(t==="scroll"||t==="scrollend"),X=jt?J!==null?J+"Capture":null:J;jt=[];for(var I=Z,j;I!==null;){var ut=I;if(j=ut.stateNode,ut=ut.tag,ut!==5&&ut!==26&&ut!==27||j===null||X===null||(ut=Us(I,X),ut!=null&&jt.push(uo(I,ut,j))),Ne)break;I=I.return}0<jt.length&&(J=new it(J,Ft,null,a,ct),ht.push({event:J,listeners:jt}))}}if((n&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",J&&a!==Pc&&(Ft=a.relatedTarget||a.fromElement)&&(k(Ft)||Ft[ta]))break t;if((it||J)&&(J=ct.window===ct?ct:(J=ct.ownerDocument)?J.defaultView||J.parentWindow:window,it?(Ft=a.relatedTarget||a.toElement,it=Z,Ft=Ft?k(Ft):null,Ft!==null&&(Ne=u(Ft),jt=Ft.tag,Ft!==Ne||jt!==5&&jt!==27&&jt!==6)&&(Ft=null)):(it=null,Ft=Z),it!==Ft)){if(jt=Ud,ut="onMouseLeave",X="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Nd,ut="onPointerLeave",X="onPointerEnter",I="pointer"),Ne=it==null?J:Ut(it),j=Ft==null?J:Ut(Ft),J=new jt(ut,I+"leave",it,a,ct),J.target=Ne,J.relatedTarget=j,ut=null,k(ct)===Z&&(jt=new jt(X,I+"enter",Ft,a,ct),jt.target=j,jt.relatedTarget=Ne,ut=jt),Ne=ut,it&&Ft)e:{for(jt=MS,X=it,I=Ft,j=0,ut=X;ut;ut=jt(ut))j++;ut=0;for(var qt=I;qt;qt=jt(qt))ut++;for(;0<j-ut;)X=jt(X),j--;for(;0<ut-j;)I=jt(I),ut--;for(;j--;){if(X===I||I!==null&&X===I.alternate){jt=X;break e}X=jt(X),I=jt(I)}jt=null}else jt=null;it!==null&&Tg(ht,J,it,jt,!1),Ft!==null&&Ne!==null&&Tg(ht,Ne,Ft,jt,!0)}}t:{if(J=Z?Ut(Z):window,it=J.nodeName&&J.nodeName.toLowerCase(),it==="select"||it==="input"&&J.type==="file")var Me=Gd;else if(Fd(J))if(Vd)Me=N0;else{Me=U0;var Gt=D0}else it=J.nodeName,!it||it.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Z&&Oc(Z.elementType)&&(Me=Gd):Me=L0;if(Me&&(Me=Me(t,Z))){Hd(ht,Me,a,ct);break t}Gt&&Gt(t,J,Z),t==="focusout"&&Z&&J.type==="number"&&Z.memoizedProps.value!=null&&yr(J,"number",J.value)}switch(Gt=Z?Ut(Z):window,t){case"focusin":(Fd(Gt)||Gt.contentEditable==="true")&&(Rr=Gt,jc=Z,Fs=null);break;case"focusout":Fs=jc=Rr=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Kd(ht,a,ct);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Kd(ht,a,ct)}var ie;if(Xc)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Ar?Bd(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Od&&a.locale!=="ko"&&(Ar||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ar&&(ie=wd()):(ea=ct,Fc="value"in ea?ea.value:ea.textContent,Ar=!0)),Gt=Ll(Z,ge),0<Gt.length&&(ge=new Ld(ge,t,null,a,ct),ht.push({event:ge,listeners:Gt}),ie?ge.data=ie:(ie=Id(a),ie!==null&&(ge.data=ie)))),(ie=b0?A0(t,a):R0(t,a))&&(ge=Ll(Z,"onBeforeInput"),0<ge.length&&(Gt=new Ld("onBeforeInput","beforeinput",null,a,ct),ht.push({event:Gt,listeners:ge}),Gt.data=ie)),vS(ht,t,Z,a,ct)}Mg(ht,n)})}function uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Us(t,a),c!=null&&s.unshift(uo(t,c,f)),c=Us(t,n),c!=null&&s.push(uo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function MS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,z=b.alternate,Z=b.stateNode;if(b=b.tag,z!==null&&z===s)break;b!==5&&b!==26&&b!==27||Z===null||(z=Z,c?(Z=Us(a,f),Z!=null&&g.unshift(uo(a,Z,z))):c||(Z=Us(a,f),Z!=null&&g.push(uo(a,Z,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(TS,"")}function Ag(t,n){return n=bg(n),bg(t)===n}function Le(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Er(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Er(t,""+s);break;case"className":qe(t,"class",s);break;case"tabIndex":qe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,a,s);break;case"style":Ad(t,s,f);break;case"data":if(n!=="object"){qe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=bi);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Io(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":he("beforetoggle",t),he("toggle",t),Vt(t,"popover",s);break;case"xlinkActuate":ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ae(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ae(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ae(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ae(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Vt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Jv.get(a)||a,Vt(t,a,s))}}function yf(t,n,a,s,c,f){switch(a){case"style":Ad(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Er(t,s):(typeof s=="number"||typeof s=="bigint")&&Er(t,""+s);break;case"onScroll":s!=null&&he("scroll",t);break;case"onScrollEnd":s!=null&&he("scrollend",t);break;case"onClick":s!=null&&(t.onclick=bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Vt(t,a,s)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",t),he("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,g,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":he("invalid",t);var b=f=g=c=null,z=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":c=ct;break;case"type":g=ct;break;case"checked":z=ct;break;case"defaultChecked":Z=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Le(t,n,s,ct,a,null)}}Bo(t,f,b,z,Z,g,c,!1);return;case"select":he("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:Le(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Mr(t,!!s,n,!1):a!=null&&Mr(t,!!s,a,!0);return;case"textarea":he("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Le(t,n,g,b,a,null)}Td(t,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,z,s,a,null)}return;case"dialog":he("beforetoggle",t),he("toggle",t),he("cancel",t),he("close",t);break;case"iframe":case"object":he("load",t);break;case"video":case"audio":for(s=0;s<co.length;s++)he(co[s],t);break;case"image":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"embed":case"source":case"link":he("error",t),he("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,Z,s,a,null)}return;default:if(Oc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&yf(t,n,ct,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Le(t,n,b,s,a,null))}function bS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,z=null,Z=null,ct=null;for(it in a){var ht=a[it];if(a.hasOwnProperty(it)&&ht!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":z=ht;default:s.hasOwnProperty(it)||Le(t,n,it,null,s,ht)}}for(var J in s){var it=s[J];if(ht=a[J],s.hasOwnProperty(J)&&(it!=null||ht!=null))switch(J){case"type":f=it;break;case"name":c=it;break;case"checked":Z=it;break;case"defaultChecked":ct=it;break;case"value":g=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==ht&&Le(t,n,J,it,s,ht)}}Fa(t,g,b,z,Z,ct,f,c);return;case"select":it=g=b=J=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":it=z;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":J=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==z&&Le(t,n,c,f,s,z)}n=b,a=g,s=it,J!=null?Mr(t,!!a,J,!1):!!s!=!!a&&(n!=null?Mr(t,!!a,n,!0):Mr(t,!!a,a?[]:"",!1));return;case"textarea":it=J=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Le(t,n,b,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":J=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,g,c,s,f)}Ed(t,J,it);return;case"option":for(var Ft in a)if(J=a[Ft],a.hasOwnProperty(Ft)&&J!=null&&!s.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Le(t,n,Ft,null,s,J)}for(z in s)if(J=s[z],it=a[z],s.hasOwnProperty(z)&&J!==it&&(J!=null||it!=null))switch(z){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Le(t,n,z,J,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)J=a[jt],a.hasOwnProperty(jt)&&J!=null&&!s.hasOwnProperty(jt)&&Le(t,n,jt,null,s,J);for(Z in s)if(J=s[Z],it=a[Z],s.hasOwnProperty(Z)&&J!==it&&(J!=null||it!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:Le(t,n,Z,J,s,it)}return;default:if(Oc(n)){for(var Ne in a)J=a[Ne],a.hasOwnProperty(Ne)&&J!==void 0&&!s.hasOwnProperty(Ne)&&yf(t,n,Ne,void 0,s,J);for(ct in s)J=s[ct],it=a[ct],!s.hasOwnProperty(ct)||J===it||J===void 0&&it===void 0||yf(t,n,ct,J,s,it);return}}for(var X in a)J=a[X],a.hasOwnProperty(X)&&J!=null&&!s.hasOwnProperty(X)&&Le(t,n,X,null,s,J);for(ht in s)J=s[ht],it=a[ht],!s.hasOwnProperty(ht)||J===it||J==null&&it==null||Le(t,n,ht,J,s,it)}function Rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&Rg(g)){for(g=0,b=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],Z=z.startTime;if(Z>b)break;var ct=z.transferSize,ht=z.initiatorType;ct&&Rg(ht)&&(z=z.responseEnd,g+=ct*(z<b?1:(b-Z)/(z-Z)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mf=null,Ef=null;function Nl(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Tf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bf=null;function RS(){var t=window.event;return t&&t.type==="popstate"?t===bf?!1:(bf=t,!0):(bf=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(t){return Ug.resolve(null).then(t).catch(DS)}:Dg;function DS(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function Lg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ts(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,fo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[Q]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&fo(t.ownerDocument.body);a=c}while(a);ts(n)}function Ng(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Af(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),tt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function US(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Q])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ei(t.nextSibling),t===null)break}return null}function LS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ei(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ei(t.nextSibling),t===null))return null;return t}function Rf(t){return t.data==="$?"||t.data==="$~"}function Cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wf=null;function Pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function zg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Bg(t,n,a){switch(n=Nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);tt(t)}var ni=new Map,Ig=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gi=q.d;q.d={f:OS,r:PS,D:zS,C:BS,L:IS,m:FS,X:GS,S:HS,M:VS};function OS(){var t=Gi.f(),n=bl();return t||n}function PS(t){var n=Tt(t);n!==null&&n.tag===5&&n.type==="form"?em(n):Gi.r(t)}var Qr=typeof document>"u"?null:document;function Fg(t,n,a){var s=Qr;if(s&&typeof n=="string"&&n){var c=Fe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ig.has(c)||(Ig.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),_n(n,"link",t),Rt(n),s.head.appendChild(n)))}}function zS(t){Gi.D(t),Fg("dns-prefetch",t,null)}function BS(t,n){Gi.C(t,n),Fg("preconnect",t,n)}function IS(t,n,a){Gi.L(t,n,a);var s=Qr;if(s&&t&&n){var c='link[rel="preload"][as="'+Fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Fe(a.imageSizes)+'"]')):c+='[href="'+Fe(t)+'"]';var f=c;switch(n){case"style":f=Jr(t);break;case"script":f=$r(t)}ni.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ho(f))||n==="script"&&s.querySelector(po(f))||(n=s.createElement("link"),_n(n,"link",t),Rt(n),s.head.appendChild(n)))}}function FS(t,n){Gi.m(t,n);var a=Qr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Fe(s)+'"][href="'+Fe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(t)}if(!ni.has(f)&&(t=v({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(po(f)))return}s=a.createElement("link"),_n(s,"link",t),Rt(s),a.head.appendChild(s)}}}function HS(t,n,a){Gi.S(t,n,a);var s=Qr;if(s&&t){var c=Bt(s).hoistableStyles,f=Jr(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(ho(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&Df(t,a);var z=g=s.createElement("link");Rt(z),_n(z,"link",t),z._p=new Promise(function(Z,ct){z.onload=Z,z.onerror=ct}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Pl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function GS(t,n){Gi.X(t,n);var a=Qr;if(a&&t){var s=Bt(a).hoistableScripts,c=$r(t),f=s.get(c);f||(f=a.querySelector(po(c)),f||(t=v({src:t,async:!0},n),(n=ni.get(c))&&Uf(t,n),f=a.createElement("script"),Rt(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function VS(t,n){Gi.M(t,n);var a=Qr;if(a&&t){var s=Bt(a).hoistableScripts,c=$r(t),f=s.get(c);f||(f=a.querySelector(po(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&Uf(t,n),f=a.createElement("script"),Rt(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Hg(t,n,a,s){var c=(c=St.current)?Ol(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=Bt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Jr(a.href);var f=Bt(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(ho(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||kS(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=Bt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Jr(t){return'href="'+Fe(t)+'"'}function ho(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function kS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),Rt(n),t.head.appendChild(n))}function $r(t){return'[src="'+Fe(t)+'"]'}function po(t){return"script[async]"+t}function Vg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Fe(a.href)+'"]');if(s)return n.instance=s,Rt(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Rt(s),_n(s,"style",c),Pl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Jr(a.href);var f=t.querySelector(ho(c));if(f)return n.state.loading|=4,n.instance=f,Rt(f),f;s=Gg(a),(c=ni.get(c))&&Df(s,c),f=(t.ownerDocument||t).createElement("link"),Rt(f);var g=f;return g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),_n(f,"link",s),n.state.loading|=4,Pl(f,a.precedence,t),n.instance=f;case"script":return f=$r(a.src),(c=t.querySelector(po(f)))?(n.instance=c,Rt(c),c):(s=a,(c=ni.get(f))&&(s=v({},a),Uf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Rt(c),_n(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,t));return n.instance}function Pl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zl=null;function kg(t,n,a){if(zl===null){var s=new Map,c=zl=new Map;c.set(a,s)}else c=zl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Q]||f[tn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function XS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function WS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Jr(s.href),f=n.querySelector(ho(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Rt(f);return}f=n.ownerDocument||n,s=Gg(s),(c=ni.get(c))&&Df(s,c),f=f.createElement("link"),Rt(f);var g=f;g._p=new Promise(function(b,z){g.onload=b,g.onerror=z}),_n(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Bl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function qS(t,n){return t.stylesheets&&t.count===0&&Fl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Lf===0&&(Lf=62500*AS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Lf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Bl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function Fl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,n.forEach(YS,t),Il=null,Bl.call(t))}function YS(t,n){if(!(n.state.loading&4)){var a=Il.get(t);if(a)var s=a.get(null);else{a=new Map,Il.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Bl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var mo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function jS(t,n,a,s,c,f,g,b,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=un(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.hiddenUpdates=un(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function qg(t,n,a,s,c,f,g,b,z,Z,ct,ht){return t=new jS(t,n,a,g,z,Z,ct,ht,b),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},pu(f),t}function Yg(t){return t?(t=Dr,t):Dr}function jg(t,n,a,s,c,f){c=Yg(c),s.context===null?s.context=c:s.pendingContext=c,s=oa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=la(t,s,n),a!==null&&(Ln(a,t,n),qs(a,t,n))}function Zg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){Zg(t,n),(t=t.alternate)&&Zg(t,n)}function Kg(t){if(t.tag===13||t.tag===31){var n=ka(t,67108864);n!==null&&Ln(n,t,67108864),Nf(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=qn();n=Sr(n);var a=ka(t,n);a!==null&&Ln(a,t,n),Nf(t,n)}}var Hl=!0;function ZS(t,n,a,s){var c=O.T;O.T=null;var f=q.p;try{q.p=2,Of(t,n,a,s)}finally{q.p=f,O.T=c}}function KS(t,n,a,s){var c=O.T;O.T=null;var f=q.p;try{q.p=8,Of(t,n,a,s)}finally{q.p=f,O.T=c}}function Of(t,n,a,s){if(Hl){var c=Pf(s);if(c===null)xf(t,n,s,Gl,a),$g(t,s);else if(JS(c,t,n,a,s))s.stopPropagation();else if($g(t,s),n&4&&-1<QS.indexOf(t)){for(;c!==null;){var f=Tt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Dt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var z=1<<31-Wt(g);b.entanglements[1]|=z,g&=~z}xi(f),(Te&6)===0&&(El=_t()+500,lo(0))}}break;case 31:case 13:b=ka(f,2),b!==null&&Ln(b,f,2),bl(),Nf(f,2)}if(f=Pf(s),f===null&&xf(t,n,s,Gl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else xf(t,n,s,null,a)}}function Pf(t){return t=zc(t),zf(t)}var Gl=null;function zf(t){if(Gl=null,t=k(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gl=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case kt:return 2;case wt:return 8;case Ot:case ve:return 32;case At:return 268435456;default:return 32}default:return 32}}var Bf=!1,Sa=null,xa=null,ya=null,go=new Map,_o=new Map,Ma=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Tt(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function JS(t,n,a,s,c){switch(n){case"focusin":return Sa=vo(Sa,t,n,a,s,c),!0;case"dragenter":return xa=vo(xa,t,n,a,s,c),!0;case"mouseover":return ya=vo(ya,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,vo(go.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,vo(_o.get(f)||null,t,n,a,s,c)),!0}return!1}function t_(t){var n=k(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Cs(t.priority,function(){Qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Cs(t.priority,function(){Qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Pf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Pc=s,a.target.dispatchEvent(s),Pc=null}else return n=Tt(a),n!==null&&Kg(n),t.blockedOn=a,!1;n.shift()}return!0}function e_(t,n,a){Vl(t)&&a.delete(n)}function $S(){Bf=!1,Sa!==null&&Vl(Sa)&&(Sa=null),xa!==null&&Vl(xa)&&(xa=null),ya!==null&&Vl(ya)&&(ya=null),go.forEach(e_),_o.forEach(e_)}function kl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$S)))}var Xl=null;function n_(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(zf(s||a)===null)continue;break}var f=Tt(a);f!==null&&(t.splice(n,3),n-=3,Ou(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ts(t){function n(z){return kl(z,t)}Sa!==null&&kl(Sa,t),xa!==null&&kl(xa,t),ya!==null&&kl(ya,t),go.forEach(n),_o.forEach(n);for(var a=0;a<Ma.length;a++){var s=Ma[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&Ma.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[dn]||null;if(typeof f=="function")g||n_(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[dn]||null)b=g.formAction;else if(zf(c)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),n_(a)}}}function i_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function If(t){this._internalRoot=t}Wl.prototype.render=If.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();jg(a,s,t,n,null,null)},Wl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;jg(t.current,2,null,t,null,null),bl(),n[ta]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ba();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ma.length&&n!==0&&n<Ma[a].priority;a++);Ma.splice(a,0,t),a===0&&t_(t)}};var a_=e.version;if(a_!=="19.2.0")throw Error(r(527,a_,"19.2.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var tx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Yt=ql.inject(tx),Ct=ql}catch{}}return xo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=fm,f=hm,g=dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,s,null,c,f,g,i_),t[ta]=n.current,Sf(t),new If(n)},xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=fm,g=hm,b=dm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=qg(t,1,!0,n,a??null,s,c,z,f,g,b,i_),n.context=Yg(null),a=n.current,s=qn(),s=Sr(s),c=oa(s),c.callback=null,la(a,c,s),a=s,n.current.lanes=a,En(n,a),xi(n),t[ta]=n.current,Sf(t),new Wl(n)},xo.version="19.2.0",xo}var p_;function ux(){if(p_)return Gf.exports;p_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=cx(),Gf.exports}var fx=ux();const dv="https://urstgaryrkzymbxpkrep.supabase.co",pv="sb_publishable_PlRptPKKzxcZFH11jBFNbw_nuTqQ-Om",mv=!!pv,gv={apikey:pv,"Content-Type":"application/json"};function hx(){let o=null;try{const l=new URLSearchParams(location.search).get("utm_source");if(l)o=l.toLowerCase();else if(document.referrer){const u=new URL(document.referrer).hostname.replace(/^www\./,"");u!==location.hostname&&(o=u)}}catch{}let e=null;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}const i=navigator.userAgent||"",r=/iPad|Tablet/i.test(i)?"tablet":/Mobi|Android|iPhone/i.test(i)?"mobile":"desktop";return{p_referrer:o,p_lang:(navigator.language||"").slice(0,10),p_tz:e,p_device:r}}async function ur(o,e=null){if(!mv)return null;try{const i=await fetch(`${dv}/rest/v1/rpc/portfolio_track`,{method:"POST",headers:gv,body:JSON.stringify({p_type:o,p_label:e,...hx()}),keepalive:!0});if(!i.ok)return null;const r=await i.json();return r==null?null:Number(r)}catch{return null}}async function dx(){if(!mv)return null;try{const o=await fetch(`${dv}/rest/v1/portfolio_stats?select=key,value`,{headers:gv});return o.ok?Object.fromEntries((await o.json()).map(e=>[e.key,Number(e.value)])):null}catch{return null}}async function px(){let o=!1;try{o=sessionStorage.getItem("jor-visit")==="1"}catch{}if(!o){try{sessionStorage.setItem("jor-visit","1")}catch{}await ur("visit")}return dx()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="169",mx=0,m_=1,gx=2,_v=1,_x=2,Yi=3,Na=0,Pn=1,ji=2,Ua=0,gs=1,g_=2,__=3,v_=4,vx=5,fr=100,Sx=101,xx=102,yx=103,Mx=104,Ex=200,Tx=201,bx=202,Ax=203,Th=204,bh=205,Rx=206,Cx=207,wx=208,Dx=209,Ux=210,Lx=211,Nx=212,Ox=213,Px=214,Ah=0,Rh=1,Ch=2,Ss=3,wh=4,Dh=5,Uh=6,Lh=7,vv=0,zx=1,Bx=2,La=0,Ix=1,Fx=2,Hx=3,Gx=4,Vx=5,kx=6,Xx=7,Sv=300,xs=301,ys=302,Nh=303,Oh=304,wc=306,Ph=1e3,dr=1001,zh=1002,si=1003,Wx=1004,Yl=1005,di=1006,Wf=1007,pr=1008,Ji=1009,xv=1010,yv=1011,Co=1012,pd=1013,gr=1014,Zi=1015,wo=1016,md=1017,gd=1018,Ms=1020,Mv=35902,Ev=1021,Tv=1022,mi=1023,bv=1024,Av=1025,_s=1026,Es=1027,Rv=1028,_d=1029,Cv=1030,vd=1031,Sd=1033,_c=33776,vc=33777,Sc=33778,xc=33779,Bh=35840,Ih=35841,Fh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37808,Wh=37809,qh=37810,Yh=37811,jh=37812,Zh=37813,Kh=37814,Qh=37815,Jh=37816,$h=37817,td=37818,ed=37819,nd=37820,id=37821,yc=36492,ad=36494,rd=36495,wv=36283,sd=36284,od=36285,ld=36286,qx=3200,Yx=3201,jx=0,Zx=1,Da="",yi="srgb",Pa="srgb-linear",xd="display-p3",Dc="display-p3-linear",Tc="linear",Ve="srgb",bc="rec709",Ac="p3",es=7680,S_=519,Kx=512,Qx=513,Jx=514,Dv=515,$x=516,ty=517,ey=518,ny=519,x_=35044,y_="300 es",Ki=2e3,Rc=2001;class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,cd=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function iy(o,e){return(o%e+e)%e}function Yf(o,e,i){return(1-i)*o+i*e}function yo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(e,i,r,l,u,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],v=r[7],y=r[2],M=r[5],T=r[8],w=l[0],x=l[3],S=l[6],B=l[1],D=l[4],P=l[7],nt=l[2],H=l[5],N=l[8];return u[0]=h*w+d*B+m*nt,u[3]=h*x+d*D+m*H,u[6]=h*S+d*P+m*N,u[1]=p*w+_*B+v*nt,u[4]=p*x+_*D+v*H,u[7]=p*S+_*P+v*N,u[2]=y*w+M*B+T*nt,u[5]=y*x+M*D+T*H,u[8]=y*S+M*P+T*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,y=d*m-_*u,M=p*u-h*m,T=i*v+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(l*p-_*r)*w,e[2]=(d*r-l*h)*w,e[3]=y*w,e[4]=(_*i-l*m)*w,e[5]=(l*u-d*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(jf.makeScale(e,i)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,i){return this.premultiply(jf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new se;function Uv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ay(){const o=Cc("canvas");return o.style.display="block",o}const M_={};function Mc(o){o in M_||(M_[o]=!0,console.warn(o))}function ry(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function sy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function oy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const E_=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),T_=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[Pa]:{transfer:Tc,primaries:bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[yi]:{transfer:Ve,primaries:bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Dc]:{transfer:Tc,primaries:Ac,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(T_),fromReference:o=>o.applyMatrix3(E_)},[xd]:{transfer:Ve,primaries:Ac,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(T_),fromReference:o=>o.applyMatrix3(E_).convertLinearToSRGB()}},ly=new Set([Pa,Dc]),be={enabled:!0,_workingColorSpace:Pa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!ly.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Mo[e].toReference,l=Mo[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Mo[o].primaries},getTransfer:function(o){return o===Da?Tc:Mo[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(Mo[e].luminanceCoefficients)}};function vs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ns;class cy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=Cc("canvas")),ns.width=e.width,ns.height=e.height;const r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ns}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=vs(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(vs(i[r]/255)*255):i[r]=vs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uy=0;class Lv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Kf(l[h].image)):u.push(Kf(l[h]))}else u=Kf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fy=0;class zn extends bs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=dr,l=dr,u=di,h=pr,d=mi,m=Ji,p=zn.DEFAULT_ANISOTROPY,_=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Do(),this.name="",this.source=new Lv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Sv;zn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],y=m[1],M=m[5],T=m[9],w=m[2],x=m[6],S=m[10];if(Math.abs(_-y)<.01&&Math.abs(v-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(v+w)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,P=(M+1)/2,nt=(S+1)/2,H=(_+y)/4,N=(v+w)/4,K=(T+x)/4;return D>P&&D>nt?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=H/r,u=N/r):P>nt?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=H/l,u=K/l):nt<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(nt),r=N/u,l=K/u),this.set(r,l,u,i),this}let B=Math.sqrt((x-T)*(x-T)+(v-w)*(v-w)+(y-_)*(y-_));return Math.abs(B)<.001&&(B=1),this.x=(x-T)/B,this.y=(v-w)/B,this.z=(y-_)/B,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hy extends bs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new zn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Lv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends hy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Nv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],v=r[l+3];const y=u[h+0],M=u[h+1],T=u[h+2],w=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=T,e[i+3]=w;return}if(v!==w||m!==y||p!==M||_!==T){let x=1-d;const S=m*y+p*M+_*T+v*w,B=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const nt=Math.sqrt(D),H=Math.atan2(nt,S*B);x=Math.sin(x*H)/nt,d=Math.sin(d*H)/nt}const P=d*B;if(m=m*x+y*P,p=p*x+M*P,_=_*x+T*P,v=v*x+w*P,x===1-d){const nt=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=nt,p*=nt,_*=nt,v*=nt}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],v=u[h],y=u[h+1],M=u[h+2],T=u[h+3];return e[i]=d*T+_*v+m*M-p*y,e[i+1]=m*T+_*y+p*v-d*M,e[i+2]=p*T+_*M+d*y-m*v,e[i+3]=_*T-d*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),v=d(u/2),y=m(r/2),M=m(l/2),T=m(u/2);switch(h){case"XYZ":this._x=y*_*v+p*M*T,this._y=p*M*v-y*_*T,this._z=p*_*T+y*M*v,this._w=p*_*v-y*M*T;break;case"YXZ":this._x=y*_*v+p*M*T,this._y=p*M*v-y*_*T,this._z=p*_*T-y*M*v,this._w=p*_*v+y*M*T;break;case"ZXY":this._x=y*_*v-p*M*T,this._y=p*M*v+y*_*T,this._z=p*_*T+y*M*v,this._w=p*_*v-y*M*T;break;case"ZYX":this._x=y*_*v-p*M*T,this._y=p*M*v+y*_*T,this._z=p*_*T-y*M*v,this._w=p*_*v+y*M*T;break;case"YZX":this._x=y*_*v+p*M*T,this._y=p*M*v+y*_*T,this._z=p*_*T-y*M*v,this._w=p*_*v-y*M*T;break;case"XZY":this._x=y*_*v-p*M*T,this._y=p*M*v-y*_*T,this._z=p*_*T+y*M*v,this._w=p*_*v+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),v=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=h*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(b_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(b_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*_,this.y=r+m*_+d*p-u*v,this.z=l+m*v+u*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new at,b_=new Uo;class Lo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ui):ui.fromBufferAttribute(u,h),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jl.copy(r.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Zl.subVectors(this.max,Eo),is.subVectors(e.a,Eo),as.subVectors(e.b,Eo),rs.subVectors(e.c,Eo),Ta.subVectors(as,is),ba.subVectors(rs,as),nr.subVectors(is,rs);let i=[0,-Ta.z,Ta.y,0,-ba.z,ba.y,0,-nr.z,nr.y,Ta.z,0,-Ta.x,ba.z,0,-ba.x,nr.z,0,-nr.x,-Ta.y,Ta.x,0,-ba.y,ba.x,0,-nr.y,nr.x,0];return!Jf(i,is,as,rs,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,is,as,rs,Zl))?!1:(Kl.crossVectors(Ta,ba),i=[Kl.x,Kl.y,Kl.z],Jf(i,is,as,rs,Zl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new at,new at,new at,new at,new at,new at,new at,new at],ui=new at,jl=new Lo,is=new at,as=new at,rs=new at,Ta=new at,ba=new at,nr=new at,Eo=new at,Zl=new at,Kl=new at,ir=new at;function Jf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ir.fromArray(o,u);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=e.dot(ir),p=i.dot(ir),_=r.dot(ir);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const py=new Lo,To=new at,$f=new at;class Uc{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):py.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add($f)),this.expandByPoint(To.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new at,th=new at,Ql=new at,Aa=new at,eh=new at,Jl=new at,nh=new at;class Ov{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,i),ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){th.copy(e).add(i).multiplyScalar(.5),Ql.copy(i).sub(e).normalize(),Aa.copy(this.origin).sub(th);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=Aa.dot(this.direction),m=-Aa.dot(Ql),p=Aa.lengthSq(),_=Math.abs(1-h*h);let v,y,M,T;if(_>0)if(v=h*m-d,y=h*d-m,T=u*_,v>=0)if(y>=-T)if(y<=T){const w=1/_;v*=w,y*=w,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-T?(v=Math.max(0,-(-h*u+d)),y=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p):y<=T?(v=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(v=Math.max(0,-(h*u+d)),y=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+y*(y+2*m)+p);else y=h>0?-u:u,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(Ql,y),M}intersectSphere(e,i){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),l=ki.dot(ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(u=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,i,r,l,u){eh.subVectors(i,e),Jl.subVectors(r,e),nh.crossVectors(eh,Jl);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Aa.subVectors(this.origin,e);const m=d*this.direction.dot(Jl.crossVectors(Aa,Jl));if(m<0)return null;const p=d*this.direction.dot(eh.cross(Aa));if(p<0||m+p>h)return null;const _=-d*Aa.dot(nh);return _<0?null:this.at(_/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,r,l,u,h,d,m,p,_,v,y,M,T,w,x){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,_,v,y,M,T,w,x)}set(e,i,r,l,u,h,d,m,p,_,v,y,M,T,w,x){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=y,S[3]=M,S[7]=T,S[11]=w,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ss.setFromMatrixColumn(e,0).length(),u=1/ss.setFromMatrixColumn(e,1).length(),h=1/ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const y=h*_,M=h*v,T=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=y-w*p,i[9]=-d*m,i[2]=w-y*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,M=m*v,T=p*_,w=p*v;i[0]=y+w*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=w+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,M=m*v,T=p*_,w=p*v;i[0]=y-w*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=w-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,M=h*v,T=d*_,w=d*v;i[0]=m*_,i[4]=T*p-M,i[8]=y*p+w,i[1]=m*v,i[5]=w*p+y,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-y*v,i[8]=T*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+T,i[10]=y-w*v}else if(e.order==="XZY"){const y=h*m,M=h*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=y*v+w,i[5]=h*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*_,i[10]=w*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(my,e,gy)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ra.crossVectors(r,Yn),Ra.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ra.crossVectors(r,Yn)),Ra.normalize(),$l.crossVectors(Yn,Ra),l[0]=Ra.x,l[4]=$l.x,l[8]=Yn.x,l[1]=Ra.y,l[5]=$l.y,l[9]=Yn.y,l[2]=Ra.z,l[6]=$l.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],v=r[5],y=r[9],M=r[13],T=r[2],w=r[6],x=r[10],S=r[14],B=r[3],D=r[7],P=r[11],nt=r[15],H=l[0],N=l[4],K=l[8],Et=l[12],E=l[1],C=l[5],st=l[9],rt=l[13],ft=l[2],gt=l[6],O=l[10],q=l[14],Y=l[3],yt=l[7],Mt=l[11],L=l[15];return u[0]=h*H+d*E+m*ft+p*Y,u[4]=h*N+d*C+m*gt+p*yt,u[8]=h*K+d*st+m*O+p*Mt,u[12]=h*Et+d*rt+m*q+p*L,u[1]=_*H+v*E+y*ft+M*Y,u[5]=_*N+v*C+y*gt+M*yt,u[9]=_*K+v*st+y*O+M*Mt,u[13]=_*Et+v*rt+y*q+M*L,u[2]=T*H+w*E+x*ft+S*Y,u[6]=T*N+w*C+x*gt+S*yt,u[10]=T*K+w*st+x*O+S*Mt,u[14]=T*Et+w*rt+x*q+S*L,u[3]=B*H+D*E+P*ft+nt*Y,u[7]=B*N+D*C+P*gt+nt*yt,u[11]=B*K+D*st+P*O+nt*Mt,u[15]=B*Et+D*rt+P*q+nt*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],y=e[10],M=e[14],T=e[3],w=e[7],x=e[11],S=e[15];return T*(+u*m*v-l*p*v-u*d*y+r*p*y+l*d*M-r*m*M)+w*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*_-u*m*_)+x*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*_-r*p*_)+S*(-l*d*_-i*m*v+i*d*y+l*h*v-r*h*y+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],y=e[10],M=e[11],T=e[12],w=e[13],x=e[14],S=e[15],B=v*x*p-w*y*p+w*m*M-d*x*M-v*m*S+d*y*S,D=T*y*p-_*x*p-T*m*M+h*x*M+_*m*S-h*y*S,P=_*w*p-T*v*p+T*d*M-h*w*M-_*d*S+h*v*S,nt=T*v*m-_*w*m-T*d*y+h*w*y+_*d*x-h*v*x,H=i*B+r*D+l*P+u*nt;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return e[0]=B*N,e[1]=(w*y*u-v*x*u-w*l*M+r*x*M+v*l*S-r*y*S)*N,e[2]=(d*x*u-w*m*u+w*l*p-r*x*p-d*l*S+r*m*S)*N,e[3]=(v*m*u-d*y*u-v*l*p+r*y*p+d*l*M-r*m*M)*N,e[4]=D*N,e[5]=(_*x*u-T*y*u+T*l*M-i*x*M-_*l*S+i*y*S)*N,e[6]=(T*m*u-h*x*u-T*l*p+i*x*p+h*l*S-i*m*S)*N,e[7]=(h*y*u-_*m*u+_*l*p-i*y*p-h*l*M+i*m*M)*N,e[8]=P*N,e[9]=(T*v*u-_*w*u-T*r*M+i*w*M+_*r*S-i*v*S)*N,e[10]=(h*w*u-T*d*u+T*r*p-i*w*p-h*r*S+i*d*S)*N,e[11]=(_*d*u-h*v*u-_*r*p+i*v*p+h*r*M-i*d*M)*N,e[12]=nt*N,e[13]=(_*w*l-T*v*l+T*r*y-i*w*y-_*r*x+i*v*x)*N,e[14]=(T*d*l-h*w*l-T*r*m+i*w*m+h*r*x-i*d*x)*N,e[15]=(h*v*l-_*d*l+_*r*m-i*v*m-h*r*y+i*d*y)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,v=d+d,y=u*p,M=u*_,T=u*v,w=h*_,x=h*v,S=d*v,B=m*p,D=m*_,P=m*v,nt=r.x,H=r.y,N=r.z;return l[0]=(1-(w+S))*nt,l[1]=(M+P)*nt,l[2]=(T-D)*nt,l[3]=0,l[4]=(M-P)*H,l[5]=(1-(y+S))*H,l[6]=(x+B)*H,l[7]=0,l[8]=(T+D)*N,l[9]=(x-B)*N,l[10]=(1-(y+w))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ss.set(l[0],l[1],l[2]).length();const h=ss.set(l[4],l[5],l[6]).length(),d=ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/u,_=1/h,v=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=_,fi.elements[5]*=_,fi.elements[6]*=_,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=Ki){const m=this.elements,p=2*u/(i-e),_=2*u/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let M,T;if(d===Ki)M=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(d===Rc)M=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=Ki){const m=this.elements,p=1/(i-e),_=1/(r-l),v=1/(h-u),y=(i+e)*p,M=(r+l)*_;let T,w;if(d===Ki)T=(h+u)*v,w=-2*v;else if(d===Rc)T=u*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ss=new at,fi=new $e,my=new at(0,0,0),gy=new at(1,1,1),Ra=new at,$l=new at,Yn=new at,A_=new $e,R_=new Uo;class $i{constructor(e=0,i=0,r=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(On(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-On(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return A_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _y=0;const C_=new at,os=new Uo,Xi=new $e,tc=new at,bo=new at,vy=new at,Sy=new Uo,w_=new at(1,0,0),D_=new at(0,1,0),U_=new at(0,0,1),L_={type:"added"},xy={type:"removed"},ls={type:"childadded",child:null},ih={type:"childremoved",child:null};class Bn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new at,i=new $i,r=new Uo,l=new at(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new se}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,i){return os.setFromAxisAngle(e,i),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(w_,e)}rotateY(e){return this.rotateOnAxis(D_,e)}rotateZ(e){return this.rotateOnAxis(U_,e)}translateOnAxis(e,i){return C_.copy(e).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(w_,e)}translateY(e){return this.translateOnAxis(D_,e)}translateZ(e){return this.translateOnAxis(U_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tc.copy(e):tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(bo,tc,this.up):Xi.lookAt(tc,bo,this.up),this.quaternion.setFromRotationMatrix(Xi),l&&(Xi.extractRotation(l.matrixWorld),os.setFromRotationMatrix(Xi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xy),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new at(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new at,Wi=new at,ah=new at,qi=new at,cs=new at,us=new at,N_=new at,rh=new at,sh=new at,oh=new at,lh=new Je,ch=new Je,uh=new Je;class pi{constructor(e=new at,i=new at,r=new at){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Wi.subVectors(r,i),ah.subVectors(e,i);const h=hi.dot(hi),d=hi.dot(Wi),m=hi.dot(ah),p=Wi.dot(Wi),_=Wi.dot(ah),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const y=1/v,M=(p*m-d*_)*y,T=(h*_-d*m)*y;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,qi.x),m.addScaledVector(h,qi.y),m.addScaledVector(d,qi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return lh.setScalar(0),ch.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,r),uh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(lh,u.x),h.addScaledVector(ch,u.y),h.addScaledVector(uh,u.z),h}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Wi.subVectors(e,i),hi.cross(Wi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),hi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;cs.subVectors(l,r),us.subVectors(u,r),rh.subVectors(e,r);const m=cs.dot(rh),p=us.dot(rh);if(m<=0&&p<=0)return i.copy(r);sh.subVectors(e,l);const _=cs.dot(sh),v=us.dot(sh);if(_>=0&&v<=_)return i.copy(l);const y=m*v-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(cs,h);oh.subVectors(e,u);const M=cs.dot(oh),T=us.dot(oh);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(us,d);const x=_*T-M*v;if(x<=0&&v-_>=0&&M-T>=0)return N_.subVectors(u,l),d=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(N_,d);const S=1/(x+w+y);return h=w*S,d=y*S,i.copy(r).addScaledVector(cs,h).addScaledVector(us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},ec={h:0,s:0,l:0};function fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ae{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=iy(e,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=fh(h,u,e+1/3),this.g=fh(h,u,e),this.b=fh(h,u,e-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(e,i=yi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const r=zv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Zf(e.r),this.g=Zf(e.g),this.b=Zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return be.fromWorkingColorSpace(Mn.copy(this),e),Math.round(On(Mn.r*255,0,255))*65536+Math.round(On(Mn.g*255,0,255))*256+Math.round(On(Mn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,u=Mn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=yi){be.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,l=Mn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ca),this.setHSL(Ca.h+e,Ca.s+i,Ca.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ca),e.getHSL(ec);const r=Yf(Ca.h,ec.h,i),l=Yf(Ca.s,ec.s,i),u=Yf(Ca.l,ec.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ae;Ae.NAMES=zv;let yy=0;class No extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=gs,this.side=Na,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=bh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Na&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Th&&(r.blendSrc=this.blendSrc),this.blendDst!==bh&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bv extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new at,nc=new ze;class Ei{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=x_,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nc.fromBufferAttribute(this,i),nc.applyMatrix3(e),this.setXY(i,nc.x,nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x_&&(e.usage=this.usage),e}}class Iv extends Ei{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Fv extends Ei{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class mr extends Ei{constructor(e,i,r){super(new Float32Array(e),i,r)}}let My=0;const ii=new $e,hh=new Bn,fs=new at,jn=new Lo,Ao=new Lo,hn=new at;class za extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?Fv:Iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new mr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(jn.min,Ao.min),jn.expandByPoint(hn),hn.addVectors(jn.max,Ao.max),jn.expandByPoint(hn)):(jn.expandByPoint(Ao.min),jn.expandByPoint(Ao.max))}jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)hn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)hn.fromBufferAttribute(d,p),m&&(fs.fromBufferAttribute(e,p),hn.add(fs)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new at,m[K]=new at;const p=new at,_=new at,v=new at,y=new ze,M=new ze,T=new ze,w=new at,x=new at;function S(K,Et,E){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,Et),v.fromBufferAttribute(r,E),y.fromBufferAttribute(u,K),M.fromBufferAttribute(u,Et),T.fromBufferAttribute(u,E),_.sub(p),v.sub(p),M.sub(y),T.sub(y);const C=1/(M.x*T.y-T.x*M.y);isFinite(C)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(C),x.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(C),d[K].add(w),d[Et].add(w),d[E].add(w),m[K].add(x),m[Et].add(x),m[E].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let K=0,Et=B.length;K<Et;++K){const E=B[K],C=E.start,st=E.count;for(let rt=C,ft=C+st;rt<ft;rt+=3)S(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const D=new at,P=new at,nt=new at,H=new at;function N(K){nt.fromBufferAttribute(l,K),H.copy(nt);const Et=d[K];D.copy(Et),D.sub(nt.multiplyScalar(nt.dot(Et))).normalize(),P.crossVectors(H,Et);const C=P.dot(m[K])<0?-1:1;h.setXYZW(K,D.x,D.y,D.z,C)}for(let K=0,Et=B.length;K<Et;++K){const E=B[K],C=E.start,st=E.count;for(let rt=C,ft=C+st;rt<ft;rt+=3)N(e.getX(rt+0)),N(e.getX(rt+1)),N(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new at,u=new at,h=new at,d=new at,m=new at,p=new at,_=new at,v=new at;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),d.add(_),m.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,u),v.subVectors(l,u),_.cross(v),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,y=new p.constructor(m.length*_);let M=0,T=0;for(let w=0,x=m.length;w<x;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*_;for(let S=0;S<_;S++)y[T++]=p[M++]}return new Ei(y,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new za,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,v=p.length;_<v;_++){const y=p[_],M=e(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let y=0,M=v.length;y<M;y++)_.push(v[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O_=new $e,ar=new Ov,ic=new Uc,P_=new at,ac=new at,rc=new at,sc=new at,dh=new at,oc=new at,z_=new at,lc=new at;class Qi extends Bn{constructor(e=new za,i=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){oc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],v=u[m];_!==0&&(dh.fromBufferAttribute(v,e),h?oc.addScaledVector(dh,_):oc.addScaledVector(dh.sub(i),_))}i.add(oc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(u),ar.copy(e.ray).recast(e.near),!(ic.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ic,P_)===null||ar.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(O_.copy(u).invert(),ar.copy(e.ray).applyMatrix4(O_),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=y.length;T<w;T++){const x=y[T],S=h[x.materialIndex],B=Math.max(x.start,M.start),D=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let P=B,nt=D;P<nt;P+=3){const H=d.getX(P),N=d.getX(P+1),K=d.getX(P+2);l=cc(this,S,e,r,p,_,v,H,N,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let x=T,S=w;x<S;x+=3){const B=d.getX(x),D=d.getX(x+1),P=d.getX(x+2);l=cc(this,h,e,r,p,_,v,B,D,P),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=y.length;T<w;T++){const x=y[T],S=h[x.materialIndex],B=Math.max(x.start,M.start),D=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let P=B,nt=D;P<nt;P+=3){const H=P,N=P+1,K=P+2;l=cc(this,S,e,r,p,_,v,H,N,K),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let x=T,S=w;x<S;x+=3){const B=x,D=x+1,P=x+2;l=cc(this,h,e,r,p,_,v,B,D,P),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Ey(o,e,i,r,l,u,h,d){let m;if(e.side===Pn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Na,d),m===null)return null;lc.copy(d),lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:o}}function cc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ac),o.getVertexPosition(m,rc),o.getVertexPosition(p,sc);const _=Ey(o,e,i,r,ac,rc,sc,z_);if(_){const v=new at;pi.getBarycoord(z_,ac,rc,sc,v),l&&(_.uv=pi.getInterpolatedAttribute(l,d,m,p,v,new ze)),u&&(_.uv1=pi.getInterpolatedAttribute(u,d,m,p,v,new ze)),h&&(_.normal=pi.getInterpolatedAttribute(h,d,m,p,v,new at),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new at,materialIndex:0};pi.getNormal(ac,rc,sc,y.normal),_.face=y,_.barycoord=v}return _}class Oo extends za{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],v=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,e,h,u,0),T("z","y","x",1,-1,r,i,-e,h,u,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new mr(p,3)),this.setAttribute("normal",new mr(_,3)),this.setAttribute("uv",new mr(v,2));function T(w,x,S,B,D,P,nt,H,N,K,Et){const E=P/N,C=nt/K,st=P/2,rt=nt/2,ft=H/2,gt=N+1,O=K+1;let q=0,Y=0;const yt=new at;for(let Mt=0;Mt<O;Mt++){const L=Mt*C-rt;for(let et=0;et<gt;et++){const vt=et*E-st;yt[w]=vt*B,yt[x]=L*D,yt[S]=ft,p.push(yt.x,yt.y,yt.z),yt[w]=0,yt[x]=0,yt[S]=H>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(et/N),v.push(1-Mt/K),q+=1}}for(let Mt=0;Mt<K;Mt++)for(let L=0;L<N;L++){const et=y+L+gt*Mt,vt=y+L+gt*(Mt+1),W=y+(L+1)+gt*(Mt+1),lt=y+(L+1)+gt*Mt;m.push(et,vt,lt),m.push(vt,W,lt),Y+=6}d.addGroup(M,Y,Et),M+=Y,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function Ty(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Hv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const by={clone:Ts,merge:An};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Gv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ki}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wa=new at,B_=new ze,I_=new ze;class ai extends Gv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,i){return this.getViewBounds(e,B_,I_),i.subVectors(I_,B_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ds=1;class Cy extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(hs,ds,e,i);l.layers=this.layers,this.add(l);const u=new ai(hs,ds,e,i);u.layers=this.layers,this.add(u);const h=new ai(hs,ds,e,i);h.layers=this.layers,this.add(h);const d=new ai(hs,ds,e,i);d.layers=this.layers,this.add(d);const m=new ai(hs,ds,e,i);m.layers=this.layers,this.add(m);const p=new ai(hs,ds,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(v,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Vv extends zn{constructor(e,i,r,l,u,h,d,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:xs,super(e,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends _r{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Vv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Oo(5,5,5),u=new Oa({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Ua});u.uniforms.tEquirect.value=i;const h=new Qi(l,u),d=i.minFilter;return i.minFilter===pr&&(i.minFilter=di),new Cy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}const ph=new at,Dy=new at,Uy=new se;class lr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ph.subVectors(r,i).cross(Dy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ph),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Uy.getNormalMatrix(e),l=this.coplanarPoint(ph).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Uc,uc=new at;class kv{constructor(e=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ki){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],v=l[6],y=l[7],M=l[8],T=l[9],w=l[10],x=l[11],S=l[12],B=l[13],D=l[14],P=l[15];if(r[0].setComponents(m-u,y-p,x-M,P-S).normalize(),r[1].setComponents(m+u,y+p,x+M,P+S).normalize(),r[2].setComponents(m+h,y+_,x+T,P+B).normalize(),r[3].setComponents(m-h,y-_,x-T,P-B).normalize(),r[4].setComponents(m-d,y-v,x-w,P-D).normalize(),i===Ki)r[5].setComponents(m+d,y+v,x+w,P+D).normalize();else if(i===Rc)r[5].setComponents(d,v,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?e.max.x:e.min.x,uc.y=l.normal.y>0?e.max.y:e.min.y,uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ly(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<v.length;M++){const T=v[y],w=v[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++y,v[y]=w)}v.length=y+1;for(let M=0,T=v.length;M<T;M++){const w=v[M];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class Po extends za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,v=e/d,y=i/m,M=[],T=[],w=[],x=[];for(let S=0;S<_;S++){const B=S*y-h;for(let D=0;D<p;D++){const P=D*v-u;T.push(P,-B,0),w.push(0,0,1),x.push(D/d),x.push(1-S/m)}}for(let S=0;S<m;S++)for(let B=0;B<d;B++){const D=B+p*S,P=B+p*(S+1),nt=B+1+p*(S+1),H=B+1+p*S;M.push(D,P,H),M.push(P,nt,H)}this.setIndex(M),this.setAttribute("position",new mr(T,3)),this.setAttribute("normal",new mr(w,3)),this.setAttribute("uv",new mr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ky=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Ny,alphahash_pars_fragment:Oy,alphamap_fragment:Py,alphamap_pars_fragment:zy,alphatest_fragment:By,alphatest_pars_fragment:Iy,aomap_fragment:Fy,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Vy,begin_vertex:ky,beginnormal_vertex:Xy,bsdfs:Wy,iridescence_fragment:qy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Qy,color_fragment:Jy,color_pars_fragment:$y,color_pars_vertex:tM,color_vertex:eM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:aM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:fM,envmap_common_pars_fragment:hM,envmap_pars_fragment:dM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:bM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:_M,fog_fragment:vM,fog_pars_fragment:SM,gradientmap_pars_fragment:xM,lightmap_pars_fragment:yM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:EM,lights_pars_begin:TM,lights_toon_fragment:AM,lights_toon_pars_fragment:RM,lights_phong_fragment:CM,lights_phong_pars_fragment:wM,lights_physical_fragment:DM,lights_physical_pars_fragment:UM,lights_fragment_begin:LM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:IM,map_fragment:FM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:XM,morphinstance_vertex:WM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:jM,morphtarget_vertex:ZM,normal_fragment_begin:KM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:$M,normal_vertex:tE,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:SE,skinning_vertex:xE,skinnormal_vertex:yE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:bE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:wE,uv_vertex:DE,worldpos_vertex:UE,background_vert:LE,background_frag:NE,backgroundCube_vert:OE,backgroundCube_frag:PE,cube_vert:zE,cube_frag:BE,depth_vert:IE,depth_frag:FE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:kE,linedashed_vert:XE,linedashed_frag:WE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:jE,meshlambert_frag:ZE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:$E,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:lT,shadow_frag:cT,sprite_vert:uT,sprite_frag:fT},Lt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:An([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:An([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:An([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:An([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:An([Lt.points,Lt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:An([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:An([Lt.common,Lt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:An([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:An([Lt.sprite,Lt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:An([Lt.common,Lt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:An([Lt.lights,Lt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const fc={r:0,b:0,g:0},sr=new $i,hT=new $e;function dT(o,e,i,r,l,u,h){const d=new Ae(0);let m=u===!0?0:1,p,_,v=null,y=0,M=null;function T(B){let D=B.isScene===!0?B.background:null;return D&&D.isTexture&&(D=(B.backgroundBlurriness>0?i:e).get(D)),D}function w(B){let D=!1;const P=T(B);P===null?S(d,m):P&&P.isColor&&(S(P,1),D=!0);const nt=o.xr.getEnvironmentBlendMode();nt==="additive"?r.buffers.color.setClear(0,0,0,1,h):nt==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(B,D){const P=T(D);P&&(P.isCubeTexture||P.mapping===wc)?(_===void 0&&(_=new Qi(new Oo(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:Ts(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(nt,H,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),sr.copy(D.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(sr)),_.material.toneMapped=be.getTransfer(P.colorSpace)!==Ve,(v!==P||y!==P.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=P,y=P.version,M=o.toneMapping),_.layers.enableAll(),B.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Qi(new Po(2,2),new Oa({name:"BackgroundMaterial",uniforms:Ts(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=be.getTransfer(P.colorSpace)!==Ve,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||y!==P.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=P,y=P.version,M=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function S(B,D){B.getRGB(fc,Hv(o)),r.buffers.color.setClear(fc.r,fc.g,fc.b,D,h)}return{getClearColor:function(){return d},setClearColor:function(B,D=1){d.set(B),m=D,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,S(d,m)},render:w,addToRenderList:x}}function pT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,h=!1;function d(E,C,st,rt,ft){let gt=!1;const O=v(rt,st,C);u!==O&&(u=O,p(u.object)),gt=M(E,rt,st,ft),gt&&T(E,rt,st,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(gt||h)&&(h=!1,P(E,C,st,rt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(E){return o.bindVertexArray(E)}function _(E){return o.deleteVertexArray(E)}function v(E,C,st){const rt=st.wireframe===!0;let ft=r[E.id];ft===void 0&&(ft={},r[E.id]=ft);let gt=ft[C.id];gt===void 0&&(gt={},ft[C.id]=gt);let O=gt[rt];return O===void 0&&(O=y(m()),gt[rt]=O),O}function y(E){const C=[],st=[],rt=[];for(let ft=0;ft<i;ft++)C[ft]=0,st[ft]=0,rt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:st,attributeDivisors:rt,object:E,attributes:{},index:null}}function M(E,C,st,rt){const ft=u.attributes,gt=C.attributes;let O=0;const q=st.getAttributes();for(const Y in q)if(q[Y].location>=0){const Mt=ft[Y];let L=gt[Y];if(L===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(L=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(L=E.instanceColor)),Mt===void 0||Mt.attribute!==L||L&&Mt.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==rt}function T(E,C,st,rt){const ft={},gt=C.attributes;let O=0;const q=st.getAttributes();for(const Y in q)if(q[Y].location>=0){let Mt=gt[Y];Mt===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor));const L={};L.attribute=Mt,Mt&&Mt.data&&(L.data=Mt.data),ft[Y]=L,O++}u.attributes=ft,u.attributesNum=O,u.index=rt}function w(){const E=u.newAttributes;for(let C=0,st=E.length;C<st;C++)E[C]=0}function x(E){S(E,0)}function S(E,C){const st=u.newAttributes,rt=u.enabledAttributes,ft=u.attributeDivisors;st[E]=1,rt[E]===0&&(o.enableVertexAttribArray(E),rt[E]=1),ft[E]!==C&&(o.vertexAttribDivisor(E,C),ft[E]=C)}function B(){const E=u.newAttributes,C=u.enabledAttributes;for(let st=0,rt=C.length;st<rt;st++)C[st]!==E[st]&&(o.disableVertexAttribArray(st),C[st]=0)}function D(E,C,st,rt,ft,gt,O){O===!0?o.vertexAttribIPointer(E,C,st,ft,gt):o.vertexAttribPointer(E,C,st,rt,ft,gt)}function P(E,C,st,rt){w();const ft=rt.attributes,gt=st.getAttributes(),O=C.defaultAttributeValues;for(const q in gt){const Y=gt[q];if(Y.location>=0){let yt=ft[q];if(yt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),yt!==void 0){const Mt=yt.normalized,L=yt.itemSize,et=e.get(yt);if(et===void 0)continue;const vt=et.buffer,W=et.type,lt=et.bytesPerElement,St=W===o.INT||W===o.UNSIGNED_INT||yt.gpuType===pd;if(yt.isInterleavedBufferAttribute){const xt=yt.data,Xt=xt.stride,zt=yt.offset;if(xt.isInstancedInterleavedBuffer){for(let oe=0;oe<Y.locationSize;oe++)S(Y.location+oe,xt.meshPerAttribute);E.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let oe=0;oe<Y.locationSize;oe++)x(Y.location+oe);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let oe=0;oe<Y.locationSize;oe++)D(Y.location+oe,L/Y.locationSize,W,Mt,Xt*lt,(zt+L/Y.locationSize*oe)*lt,St)}else{if(yt.isInstancedBufferAttribute){for(let xt=0;xt<Y.locationSize;xt++)S(Y.location+xt,yt.meshPerAttribute);E.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let xt=0;xt<Y.locationSize;xt++)x(Y.location+xt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let xt=0;xt<Y.locationSize;xt++)D(Y.location+xt,L/Y.locationSize,W,Mt,L*lt,L/Y.locationSize*xt*lt,St)}}else if(O!==void 0){const Mt=O[q];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(Y.location,Mt);break;case 3:o.vertexAttrib3fv(Y.location,Mt);break;case 4:o.vertexAttrib4fv(Y.location,Mt);break;default:o.vertexAttrib1fv(Y.location,Mt)}}}}B()}function nt(){K();for(const E in r){const C=r[E];for(const st in C){const rt=C[st];for(const ft in rt)_(rt[ft].object),delete rt[ft];delete C[st]}delete r[E]}}function H(E){if(r[E.id]===void 0)return;const C=r[E.id];for(const st in C){const rt=C[st];for(const ft in rt)_(rt[ft].object),delete rt[ft];delete C[st]}delete r[E.id]}function N(E){for(const C in r){const st=r[C];if(st[E.id]===void 0)continue;const rt=st[E.id];for(const ft in rt)_(rt[ft].object),delete rt[ft];delete st[E.id]}}function K(){Et(),h=!0,u!==l&&(u=l,p(u.object))}function Et(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:Et,dispose:nt,releaseStatesOfGeometry:H,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:x,disableUnusedAttributes:B}}function mT(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(r,p,_,v),i.update(_,r,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=_[T];i.update(M,r,1)}function m(p,_,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w];for(let w=0;w<y.length;w++)i.update(T,r,y[w])}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function gT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==mi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const K=N===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Ji&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Zi&&!K)}function m(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(y===!0){const N=e.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),nt=T>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:B,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:nt,maxSamples:H}}function _T(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||l;return l=y,r=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=_(v,y,0)},this.setState=function(v,y,M){const T=v.clippingPlanes,w=v.clipIntersection,x=v.clipShadows,S=o.get(v);if(!l||T===null||T.length===0||u&&!x)u?_(null):p();else{const B=u?0:r,D=B*4;let P=S.clippingState||null;m.value=P,P=_(T,y,D,M);for(let nt=0;nt!==D;++nt)P[nt]=i[nt];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,y,M,T){const w=v!==null?v.length:0;let x=null;if(w!==0){if(x=m.value,T!==!0||x===null){const S=M+w*4,B=y.matrixWorldInverse;d.getNormalMatrix(B),(x===null||x.length<S)&&(x=new Float32Array(S));for(let D=0,P=M;D!==w;++D,P+=4)h.copy(v[D]).applyMatrix4(B,d),h.normal.toArray(x,P),x[P+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function vT(o){let e=new WeakMap;function i(h,d){return d===Nh?h.mapping=xs:d===Oh&&(h.mapping=ys),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nh||d===Oh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new wy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class ST extends Gv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ms=4,F_=[.125,.215,.35,.446,.526,.582],hr=20,mh=new ST,H_=new Ae;let gh=null,_h=0,vh=0,Sh=!1;const cr=(1+Math.sqrt(5))/2,ps=1/cr,G_=[new at(-cr,ps,0),new at(cr,ps,0),new at(-ps,0,cr),new at(ps,0,cr),new at(0,cr,-ps),new at(0,cr,ps),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class V_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:wo,format:mi,colorSpace:Pa,depthBuffer:!1},l=k_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(u)),this._blurMaterial=yT(u,e,i)}return l}_compileMaterial(e){const i=new Qi(this._lodPlanes[0],e);this._renderer.compile(i,mh)}_sceneToCubeUV(e,i,r,l){const d=new ai(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(H_),_.toneMapping=La,_.autoClear=!1;const M=new Bv({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),T=new Qi(new Oo,M);let w=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,w=!0):(M.color.copy(H_),w=!0);for(let S=0;S<6;S++){const B=S%3;B===0?(d.up.set(0,m[S],0),d.lookAt(p[S],0,0)):B===1?(d.up.set(0,0,m[S]),d.lookAt(0,p[S],0)):(d.up.set(0,m[S],0),d.lookAt(0,0,p[S]));const D=this._cubeSize;hc(l,B*D,S>2?D:0,D,D),_.setRenderTarget(l),w&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=W_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Qi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;hc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,mh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=G_[(l-u-1)%G_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Qi(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*hr-1),w=u/T,x=isFinite(u)?1+Math.floor(_*w):hr;x>hr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${hr}`);const S=[];let B=0;for(let N=0;N<hr;++N){const K=N/w,Et=Math.exp(-K*K/2);S.push(Et),N===0?B+=Et:N<x&&(B+=2*Et)}for(let N=0;N<S.length;N++)S[N]=S[N]/B;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-r;const P=this._sizeLods[l],nt=3*P*(l>D-ms?l-D+ms:0),H=4*(this._cubeSize-P);hc(i,nt,H,3*P,2*P),m.setRenderTarget(i),m.render(v,mh)}}function xT(o){const e=[],i=[],r=[];let l=o;const u=o-ms+1+F_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ms?m=F_[h-o+ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,v=1+p,y=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,w=3,x=2,S=1,B=new Float32Array(w*T*M),D=new Float32Array(x*T*M),P=new Float32Array(S*T*M);for(let H=0;H<M;H++){const N=H%3*2/3-1,K=H>2?0:-1,Et=[N,K,0,N+2/3,K,0,N+2/3,K+1,0,N,K,0,N+2/3,K+1,0,N,K+1,0];B.set(Et,w*T*H),D.set(y,x*T*H);const E=[H,H,H,H,H,H];P.set(E,S*T*H)}const nt=new za;nt.setAttribute("position",new Ei(B,w)),nt.setAttribute("uv",new Ei(D,x)),nt.setAttribute("faceIndex",new Ei(P,S)),e.push(nt),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function k_(o,e,i){const r=new _r(o,e,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function yT(o,e,i){const r=new Float32Array(hr),l=new at(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function X_(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function W_(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Nh||m===Oh,_=m===xs||m===ys;if(p||_){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ET(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Mc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function TT(o,e,i,r){const l={},u=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const w=y.morphAttributes[T];for(let x=0,S=w.length;x<S;x++)e.remove(w[x])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const T in y)e.update(y[T],o.ARRAY_BUFFER);const M=v.morphAttributes;for(const T in M){const w=M[T];for(let x=0,S=w.length;x<S;x++)e.update(w[x],o.ARRAY_BUFFER)}}function p(v){const y=[],M=v.index,T=v.attributes.position;let w=0;if(M!==null){const B=M.array;w=M.version;for(let D=0,P=B.length;D<P;D+=3){const nt=B[D+0],H=B[D+1],N=B[D+2];y.push(nt,H,H,N,N,nt)}}else if(T!==void 0){const B=T.array;w=T.version;for(let D=0,P=B.length/3-1;D<P;D+=3){const nt=D+0,H=D+1,N=D+2;y.push(nt,H,H,N,N,nt)}}else return;const x=new(Uv(y)?Fv:Iv)(y,1);x.version=w;const S=u.get(v);S&&e.remove(S),u.set(v,x)}function _(v){const y=u.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function bT(o,e,i){let r;function l(y){r=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(r,M,u,y*h),i.update(M,r,1)}function p(y,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,y*h,T),i.update(M,r,T))}function _(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,y,0,T);let x=0;for(let S=0;S<T;S++)x+=M[S];i.update(x,r,1)}function v(y,M,T,w){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<y.length;S++)p(y[S]/h,M[S],w[S]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,u,y,0,w,0,T);let S=0;for(let B=0;B<T;B++)S+=M[B];for(let B=0;B<w.length;B++)i.update(S,r,w[B])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function AT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function RT(o,e,i){const r=new WeakMap,l=new Je;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let E=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var M=E;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),w===!0&&(P=2),x===!0&&(P=3);let nt=d.attributes.position.count*P,H=1;nt>e.maxTextureSize&&(H=Math.ceil(nt/e.maxTextureSize),nt=e.maxTextureSize);const N=new Float32Array(nt*H*4*v),K=new Nv(N,nt,H,v);K.type=Zi,K.needsUpdate=!0;const Et=P*4;for(let C=0;C<v;C++){const st=S[C],rt=B[C],ft=D[C],gt=nt*H*4*C;for(let O=0;O<st.count;O++){const q=O*Et;T===!0&&(l.fromBufferAttribute(st,O),N[gt+q+0]=l.x,N[gt+q+1]=l.y,N[gt+q+2]=l.z,N[gt+q+3]=0),w===!0&&(l.fromBufferAttribute(rt,O),N[gt+q+4]=l.x,N[gt+q+5]=l.y,N[gt+q+6]=l.z,N[gt+q+7]=0),x===!0&&(l.fromBufferAttribute(ft,O),N[gt+q+8]=l.x,N[gt+q+9]=l.y,N[gt+q+10]=l.z,N[gt+q+11]=ft.itemSize===4?l.w:1)}}y={count:v,texture:K,size:new ze(nt,H)},r.set(d,y),d.addEventListener("dispose",E)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function CT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class Wv extends zn{constructor(e,i,r,l,u,h,d,m,p,_=_s){if(_!==_s&&_!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===_s&&(r=gr),r===void 0&&_===Es&&(r=Ms),super(null,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:si,this.minFilter=m!==void 0?m:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const qv=new zn,q_=new Wv(1,1),Yv=new Nv,jv=new dy,Zv=new Vv,Y_=[],j_=[],Z_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function As(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Y_[l];if(u===void 0&&(u=new Float32Array(l),Y_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Lc(o,e){let i=j_[e];i===void 0&&(i=new Int32Array(e),j_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function NT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;Q_.set(r),o.uniformMatrix2fv(this.addr,!1,Q_),cn(i,r)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;K_.set(r),o.uniformMatrix3fv(this.addr,!1,K_),cn(i,r)}}function PT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;Z_.set(r),o.uniformMatrix4fv(this.addr,!1,Z_),cn(i,r)}}function zT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function XT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(q_.compareFunction=Dv,u=q_):u=qv,i.setTexture2D(e||u,l)}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||jv,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Zv,l)}function YT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Yv,l)}function jT(o){switch(o){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return PT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function ZT(o,e){o.uniform1fv(this.addr,e)}function KT(o,e){const i=As(e,this.size,2);o.uniform2fv(this.addr,i)}function QT(o,e){const i=As(e,this.size,3);o.uniform3fv(this.addr,i)}function JT(o,e){const i=As(e,this.size,4);o.uniform4fv(this.addr,i)}function $T(o,e){const i=As(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tb(o,e){const i=As(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eb(o,e){const i=As(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nb(o,e){o.uniform1iv(this.addr,e)}function ib(o,e){o.uniform2iv(this.addr,e)}function ab(o,e){o.uniform3iv(this.addr,e)}function rb(o,e){o.uniform4iv(this.addr,e)}function sb(o,e){o.uniform1uiv(this.addr,e)}function ob(o,e){o.uniform2uiv(this.addr,e)}function lb(o,e){o.uniform3uiv(this.addr,e)}function cb(o,e){o.uniform4uiv(this.addr,e)}function ub(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||qv,u[h])}function fb(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||jv,u[h])}function hb(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Zv,u[h])}function db(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Yv,u[h])}function pb(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}class mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pb(i.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function J_(o,e){o.seq.push(e),o.map[e.id]=e}function vb(o,e,i){const r=o.name,l=r.length;for(xh.lastIndex=0;;){const u=xh.exec(r),h=xh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J_(i,p===void 0?new mb(d,o,e):new gb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new _b(d),J_(i,v)),i=v}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);vb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function $_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Sb=37297;let xb=0;function yb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function Mb(o){const e=be.getPrimaries(be.workingColorSpace),i=be.getPrimaries(o);let r;switch(e===i?r="":e===Ac&&i===bc?r="LinearDisplayP3ToLinearSRGB":e===bc&&i===Ac&&(r="LinearSRGBToLinearDisplayP3"),o){case Pa:case Dc:return[r,"LinearTransferOETF"];case yi:case xd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function tv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+yb(o.getShaderSource(e),h)}else return l}function Eb(o,e){const i=Mb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Tb(o,e){let i;switch(e){case Ix:i="Linear";break;case Fx:i="Reinhard";break;case Hx:i="Cineon";break;case Gx:i="ACESFilmic";break;case kx:i="AgX";break;case Xx:i="Neutral";break;case Vx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new at;function bb(){be.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Rb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Cb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ro(o){return o!==""}function ev(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(o){return o.replace(wb,Ub)}const Db=new Map;function Ub(o,e){let i=re[e];if(i===void 0){const r=Db.get(e);if(r!==void 0)i=re[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ud(i)}const Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(o){return o.replace(Lb,Nb)}function Nb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function av(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ob(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_v?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function Bb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case vv:e="ENVMAP_BLENDING_MULTIPLY";break;case zx:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Fb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ob(i),p=Pb(i),_=zb(i),v=Bb(i),y=Ib(i),M=Ab(i),T=Rb(u),w=l.createProgram();let x,S,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ro).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ro).join(`
`),S.length>0&&(S+=`
`)):(x=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),S=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?re.tonemapping_pars_fragment:"",i.toneMapping!==La?Tb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Eb("linearToOutputTexel",i.outputColorSpace),bb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),h=ud(h),h=ev(h,i),h=nv(h,i),d=ud(d),d=ev(d,i),d=nv(d,i),h=iv(h),d=iv(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=B+x+h,P=B+S+d,nt=$_(l,l.VERTEX_SHADER,D),H=$_(l,l.FRAGMENT_SHADER,P);l.attachShader(w,nt),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function N(C){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(w).trim(),rt=l.getShaderInfoLog(nt).trim(),ft=l.getShaderInfoLog(H).trim();let gt=!0,O=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(gt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,nt,H);else{const q=tv(l,nt,"vertex"),Y=tv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+st+`
`+q+`
`+Y)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(rt===""||ft==="")&&(O=!1);O&&(C.diagnostics={runnable:gt,programLog:st,vertexShader:{log:rt,prefix:x},fragmentShader:{log:ft,prefix:S}})}l.deleteShader(nt),l.deleteShader(H),K=new Ec(l,w),Et=Cb(l,w)}let K;this.getUniforms=function(){return K===void 0&&N(this),K};let Et;this.getAttributes=function(){return Et===void 0&&N(this),Et};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=l.getProgramParameter(w,Sb)),E},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=nt,this.fragmentShader=H,this}let Hb=0;class Gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Vb(e),i.set(e,r)),r}}class Vb{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}}function kb(o,e,i,r,l,u,h){const d=new Pv,m=new Gb,p=new Set,_=[],v=l.logarithmicDepthBuffer,y=l.reverseDepthBuffer,M=l.vertexTextures;let T=l.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return p.add(E),E===0?"uv":`uv${E}`}function S(E,C,st,rt,ft){const gt=rt.fog,O=ft.geometry,q=E.isMeshStandardMaterial?rt.environment:null,Y=(E.isMeshStandardMaterial?i:e).get(E.envMap||q),yt=Y&&Y.mapping===wc?Y.image.height:null,Mt=w[E.type];E.precision!==null&&(T=l.getMaxPrecision(E.precision),T!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",T,"instead."));const L=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=L!==void 0?L.length:0;let vt=0;O.morphAttributes.position!==void 0&&(vt=1),O.morphAttributes.normal!==void 0&&(vt=2),O.morphAttributes.color!==void 0&&(vt=3);let W,lt,St,xt;if(Mt){const un=Mi[Mt];W=un.vertexShader,lt=un.fragmentShader}else W=E.vertexShader,lt=E.fragmentShader,m.update(E),St=m.getVertexShaderID(E),xt=m.getFragmentShaderID(E);const Xt=o.getRenderTarget(),zt=ft.isInstancedMesh===!0,oe=ft.isBatchedMesh===!0,xe=!!E.map,ue=!!E.matcap,F=!!Y,Ze=!!E.aoMap,le=!!E.lightMap,de=!!E.bumpMap,Jt=!!E.normalMap,we=!!E.displacementMap,Qt=!!E.emissiveMap,U=!!E.metalnessMap,A=!!E.roughnessMap,$=E.anisotropy>0,pt=E.clearcoat>0,_t=E.dispersion>0,dt=E.iridescence>0,kt=E.sheen>0,wt=E.transmission>0,Ot=$&&!!E.anisotropyMap,ve=pt&&!!E.clearcoatMap,At=pt&&!!E.clearcoatNormalMap,It=pt&&!!E.clearcoatRoughnessMap,$t=dt&&!!E.iridescenceMap,Yt=dt&&!!E.iridescenceThicknessMap,Ct=kt&&!!E.sheenColorMap,ee=kt&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,De=!!E.specularColorMap,G=!!E.specularIntensityMap,Pt=wt&&!!E.transmissionMap,ot=wt&&!!E.thicknessMap,mt=!!E.gradientMap,Nt=!!E.alphaMap,Dt=E.alphaTest>0,ce=!!E.alphaHash,Be=!!E.extensions;let vn=La;E.toneMapped&&(Xt===null||Xt.isXRRenderTarget===!0)&&(vn=o.toneMapping);const Se={shaderID:Mt,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:lt,defines:E.defines,customVertexShaderID:St,customFragmentShaderID:xt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:T,batching:oe,batchingColor:oe&&ft._colorsTexture!==null,instancing:zt,instancingColor:zt&&ft.instanceColor!==null,instancingMorph:zt&&ft.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:Xt===null?o.outputColorSpace:Xt.isXRRenderTarget===!0?Xt.texture.colorSpace:Pa,alphaToCoverage:!!E.alphaToCoverage,map:xe,matcap:ue,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:yt,aoMap:Ze,lightMap:le,bumpMap:de,normalMap:Jt,displacementMap:M&&we,emissiveMap:Qt,normalMapObjectSpace:Jt&&E.normalMapType===Zx,normalMapTangentSpace:Jt&&E.normalMapType===jx,metalnessMap:U,roughnessMap:A,anisotropy:$,anisotropyMap:Ot,clearcoat:pt,clearcoatMap:ve,clearcoatNormalMap:At,clearcoatRoughnessMap:It,dispersion:_t,iridescence:dt,iridescenceMap:$t,iridescenceThicknessMap:Yt,sheen:kt,sheenColorMap:Ct,sheenRoughnessMap:ee,specularMap:Wt,specularColorMap:De,specularIntensityMap:G,transmission:wt,transmissionMap:Pt,thicknessMap:ot,gradientMap:mt,opaque:E.transparent===!1&&E.blending===gs&&E.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Dt,alphaHash:ce,combine:E.combine,mapUv:xe&&x(E.map.channel),aoMapUv:Ze&&x(E.aoMap.channel),lightMapUv:le&&x(E.lightMap.channel),bumpMapUv:de&&x(E.bumpMap.channel),normalMapUv:Jt&&x(E.normalMap.channel),displacementMapUv:we&&x(E.displacementMap.channel),emissiveMapUv:Qt&&x(E.emissiveMap.channel),metalnessMapUv:U&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:Ot&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ee&&x(E.sheenRoughnessMap.channel),specularMapUv:Wt&&x(E.specularMap.channel),specularColorMapUv:De&&x(E.specularColorMap.channel),specularIntensityMapUv:G&&x(E.specularIntensityMap.channel),transmissionMapUv:Pt&&x(E.transmissionMap.channel),thicknessMapUv:ot&&x(E.thicknessMap.channel),alphaMapUv:Nt&&x(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Jt||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!O.attributes.uv&&(xe||Nt),fog:!!gt,useFog:E.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:y,skinning:ft.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&st.length>0,shadowMapType:o.shadowMap.type,toneMapping:vn,decodeVideoTexture:xe&&E.map.isVideoTexture===!0&&be.getTransfer(E.map.colorSpace)===Ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||oe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Se.vertexUv1s=p.has(1),Se.vertexUv2s=p.has(2),Se.vertexUv3s=p.has(3),p.clear(),Se}function B(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const st in E.defines)C.push(st),C.push(E.defines[st]);return E.isRawShaderMaterial===!1&&(D(C,E),P(C,E),C.push(o.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function D(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function P(E,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.alphaToCoverage&&d.enable(20),E.push(d.mask)}function nt(E){const C=w[E.type];let st;if(C){const rt=Mi[C];st=by.clone(rt.uniforms)}else st=E.uniforms;return st}function H(E,C){let st;for(let rt=0,ft=_.length;rt<ft;rt++){const gt=_[rt];if(gt.cacheKey===C){st=gt,++st.usedTimes;break}}return st===void 0&&(st=new Fb(o,C,E,u),_.push(st)),st}function N(E){if(--E.usedTimes===0){const C=_.indexOf(E);_[C]=_[_.length-1],_.pop(),E.destroy()}}function K(E){m.remove(E)}function Et(){m.dispose()}return{getParameters:S,getProgramCacheKey:B,getUniforms:nt,acquireProgram:H,releaseProgram:N,releaseShaderCache:K,programs:_,dispose:Et}}function Xb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Wb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function rv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function sv(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,y,M,T,w,x){let S=o[e];return S===void 0?(S={id:v.id,object:v,geometry:y,material:M,groupOrder:T,renderOrder:v.renderOrder,z:w,group:x},o[e]=S):(S.id=v.id,S.object=v,S.geometry=y,S.material=M,S.groupOrder=T,S.renderOrder=v.renderOrder,S.z=w,S.group=x),e++,S}function d(v,y,M,T,w,x){const S=h(v,y,M,T,w,x);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(v,y,M,T,w,x){const S=h(v,y,M,T,w,x);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function p(v,y){i.length>1&&i.sort(v||Wb),r.length>1&&r.sort(y||rv),l.length>1&&l.sort(y||rv)}function _(){for(let v=e,y=o.length;v<y;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function qb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new sv,o.set(r,[h])):l>=u.length?(h=new sv,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Yb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Ae};break;case"SpotLight":i={position:new at,direction:new at,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function jb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Zb=0;function Kb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Qb(o){const e=new Yb,i=jb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,u=new $e,h=new $e;function d(p){let _=0,v=0,y=0;for(let Et=0;Et<9;Et++)r.probe[Et].set(0,0,0);let M=0,T=0,w=0,x=0,S=0,B=0,D=0,P=0,nt=0,H=0,N=0;p.sort(Kb);for(let Et=0,E=p.length;Et<E;Et++){const C=p[Et],st=C.color,rt=C.intensity,ft=C.distance,gt=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)_+=st.r*rt,v+=st.g*rt,y+=st.b*rt;else if(C.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(C.sh.coefficients[O],rt);N++}else if(C.isDirectionalLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,Y=i.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=gt,r.directionalShadowMatrix[M]=C.shadow.matrix,B++}r.directional[M]=O,M++}else if(C.isSpotLight){const O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(st).multiplyScalar(rt),O.distance=ft,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,r.spot[w]=O;const q=C.shadow;if(C.map&&(r.spotLightMap[nt]=C.map,nt++,q.updateMatrices(C),C.castShadow&&H++),r.spotLightMatrix[w]=q.matrix,C.castShadow){const Y=i.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[w]=Y,r.spotShadowMap[w]=gt,P++}w++}else if(C.isRectAreaLight){const O=e.get(C);O.color.copy(st).multiplyScalar(rt),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),r.rectArea[x]=O,x++}else if(C.isPointLight){const O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){const q=C.shadow,Y=i.get(C);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=gt,r.pointShadowMatrix[T]=C.shadow.matrix,D++}r.point[T]=O,T++}else if(C.isHemisphereLight){const O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(rt),O.groundColor.copy(C.groundColor).multiplyScalar(rt),r.hemi[S]=O,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=y;const K=r.hash;(K.directionalLength!==M||K.pointLength!==T||K.spotLength!==w||K.rectAreaLength!==x||K.hemiLength!==S||K.numDirectionalShadows!==B||K.numPointShadows!==D||K.numSpotShadows!==P||K.numSpotMaps!==nt||K.numLightProbes!==N)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=x,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+nt-H,r.spotLightMap.length=nt,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=N,K.directionalLength=M,K.pointLength=T,K.spotLength=w,K.rectAreaLength=x,K.hemiLength=S,K.numDirectionalShadows=B,K.numPointShadows=D,K.numSpotShadows=P,K.numSpotMaps=nt,K.numLightProbes=N,r.version=Zb++)}function m(p,_){let v=0,y=0,M=0,T=0,w=0;const x=_.matrixWorldInverse;for(let S=0,B=p.length;S<B;S++){const D=p[S];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(x),v++}else if(D.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),h.identity(),u.copy(D.matrixWorld),u.premultiply(x),h.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),T++}else if(D.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),y++}else if(D.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(x),w++}}}return{setup:d,setupView:m,state:r}}function ov(o){const e=new Qb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Jb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new ov(o),e.set(l,[d])):u>=h.length?(d=new ov(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class $b extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tA extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iA(o,e,i){let r=new kv;const l=new ze,u=new ze,h=new Je,d=new $b({depthPacking:Yx}),m=new tA,p={},_=i.maxTextureSize,v={[Na]:Pn,[Pn]:Na,[ji]:ji},y=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:eA,fragmentShader:nA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new za;T.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Qi(T,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_v;let S=this.type;this.render=function(H,N,K){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const Et=o.getRenderTarget(),E=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Ua),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const rt=S!==Yi&&this.type===Yi,ft=S===Yi&&this.type!==Yi;for(let gt=0,O=H.length;gt<O;gt++){const q=H[gt],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const yt=Y.getFrameExtents();if(l.multiply(yt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/yt.x),l.x=u.x*yt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/yt.y),l.y=u.y*yt.y,Y.mapSize.y=u.y)),Y.map===null||rt===!0||ft===!0){const L=this.type!==Yi?{minFilter:si,magFilter:si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new _r(l.x,l.y,L),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const Mt=Y.getViewportCount();for(let L=0;L<Mt;L++){const et=Y.getViewport(L);h.set(u.x*et.x,u.y*et.y,u.x*et.z,u.y*et.w),st.viewport(h),Y.updateMatrices(q,L),r=Y.getFrustum(),P(N,K,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Yi&&B(Y,K),Y.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(Et,E,C)};function B(H,N){const K=e.update(w);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new _r(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(N,null,K,y,w,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(N,null,K,M,w,null)}function D(H,N,K,Et){let E=null;const C=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(C!==void 0)E=C;else if(E=K.isPointLight===!0?m:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const st=E.uuid,rt=N.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let gt=ft[rt];gt===void 0&&(gt=E.clone(),ft[rt]=gt,N.addEventListener("dispose",nt)),E=gt}if(E.visible=N.visible,E.wireframe=N.wireframe,Et===Yi?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:v[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const st=o.properties.get(E);st.light=K}return E}function P(H,N,K,Et,E){if(H.visible===!1)return;if(H.layers.test(N.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&E===Yi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const rt=e.update(H),ft=H.material;if(Array.isArray(ft)){const gt=rt.groups;for(let O=0,q=gt.length;O<q;O++){const Y=gt[O],yt=ft[Y.materialIndex];if(yt&&yt.visible){const Mt=D(H,yt,Et,E);H.onBeforeShadow(o,H,N,K,rt,Mt,Y),o.renderBufferDirect(K,null,rt,Mt,H,Y),H.onAfterShadow(o,H,N,K,rt,Mt,Y)}}}else if(ft.visible){const gt=D(H,ft,Et,E);H.onBeforeShadow(o,H,N,K,rt,gt,null),o.renderBufferDirect(K,null,rt,gt,H,null),H.onAfterShadow(o,H,N,K,rt,gt,null)}}const st=H.children;for(let rt=0,ft=st.length;rt<ft;rt++)P(st[rt],N,K,Et,E)}function nt(H){H.target.removeEventListener("dispose",nt);for(const K in p){const Et=p[K],E=H.target.uuid;E in Et&&(Et[E].dispose(),delete Et[E])}}}const aA={[Ah]:Rh,[Ch]:Uh,[wh]:Lh,[Ss]:Dh,[Rh]:Ah,[Uh]:Ch,[Lh]:wh,[Dh]:Ss};function rA(o){function e(){let G=!1;const Pt=new Je;let ot=null;const mt=new Je(0,0,0,0);return{setMask:function(Nt){ot!==Nt&&!G&&(o.colorMask(Nt,Nt,Nt,Nt),ot=Nt)},setLocked:function(Nt){G=Nt},setClear:function(Nt,Dt,ce,Be,vn){vn===!0&&(Nt*=Be,Dt*=Be,ce*=Be),Pt.set(Nt,Dt,ce,Be),mt.equals(Pt)===!1&&(o.clearColor(Nt,Dt,ce,Be),mt.copy(Pt))},reset:function(){G=!1,ot=null,mt.set(-1,0,0,0)}}}function i(){let G=!1,Pt=!1,ot=null,mt=null,Nt=null;return{setReversed:function(Dt){Pt=Dt},setTest:function(Dt){Dt?St(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(Dt){ot!==Dt&&!G&&(o.depthMask(Dt),ot=Dt)},setFunc:function(Dt){if(Pt&&(Dt=aA[Dt]),mt!==Dt){switch(Dt){case Ah:o.depthFunc(o.NEVER);break;case Rh:o.depthFunc(o.ALWAYS);break;case Ch:o.depthFunc(o.LESS);break;case Ss:o.depthFunc(o.LEQUAL);break;case wh:o.depthFunc(o.EQUAL);break;case Dh:o.depthFunc(o.GEQUAL);break;case Uh:o.depthFunc(o.GREATER);break;case Lh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}mt=Dt}},setLocked:function(Dt){G=Dt},setClear:function(Dt){Nt!==Dt&&(o.clearDepth(Dt),Nt=Dt)},reset:function(){G=!1,ot=null,mt=null,Nt=null}}}function r(){let G=!1,Pt=null,ot=null,mt=null,Nt=null,Dt=null,ce=null,Be=null,vn=null;return{setTest:function(Se){G||(Se?St(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Se){Pt!==Se&&!G&&(o.stencilMask(Se),Pt=Se)},setFunc:function(Se,un,En){(ot!==Se||mt!==un||Nt!==En)&&(o.stencilFunc(Se,un,En),ot=Se,mt=un,Nt=En)},setOp:function(Se,un,En){(Dt!==Se||ce!==un||Be!==En)&&(o.stencilOp(Se,un,En),Dt=Se,ce=un,Be=En)},setLocked:function(Se){G=Se},setClear:function(Se){vn!==Se&&(o.clearStencil(Se),vn=Se)},reset:function(){G=!1,Pt=null,ot=null,mt=null,Nt=null,Dt=null,ce=null,Be=null,vn=null}}}const l=new e,u=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},_={},v=new WeakMap,y=[],M=null,T=!1,w=null,x=null,S=null,B=null,D=null,P=null,nt=null,H=new Ae(0,0,0),N=0,K=!1,Et=null,E=null,C=null,st=null,rt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let gt=!1,O=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),gt=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),gt=O>=2);let Y=null,yt={};const Mt=o.getParameter(o.SCISSOR_BOX),L=o.getParameter(o.VIEWPORT),et=new Je().fromArray(Mt),vt=new Je().fromArray(L);function W(G,Pt,ot,mt){const Nt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(G,Dt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ce=0;ce<ot;ce++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Pt,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(Pt+ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return Dt}const lt={};lt[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),lt[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),lt[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),St(o.DEPTH_TEST),u.setFunc(Ss),le(!1),de(m_),St(o.CULL_FACE),F(Ua);function St(G){p[G]!==!0&&(o.enable(G),p[G]=!0)}function xt(G){p[G]!==!1&&(o.disable(G),p[G]=!1)}function Xt(G,Pt){return _[G]!==Pt?(o.bindFramebuffer(G,Pt),_[G]=Pt,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Pt),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Pt),!0):!1}function zt(G,Pt){let ot=y,mt=!1;if(G){ot=v.get(Pt),ot===void 0&&(ot=[],v.set(Pt,ot));const Nt=G.textures;if(ot.length!==Nt.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,ce=Nt.length;Dt<ce;Dt++)ot[Dt]=o.COLOR_ATTACHMENT0+Dt;ot.length=Nt.length,mt=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,mt=!0);mt&&o.drawBuffers(ot)}function oe(G){return M!==G?(o.useProgram(G),M=G,!0):!1}const xe={[fr]:o.FUNC_ADD,[Sx]:o.FUNC_SUBTRACT,[xx]:o.FUNC_REVERSE_SUBTRACT};xe[yx]=o.MIN,xe[Mx]=o.MAX;const ue={[Ex]:o.ZERO,[Tx]:o.ONE,[bx]:o.SRC_COLOR,[Th]:o.SRC_ALPHA,[Ux]:o.SRC_ALPHA_SATURATE,[wx]:o.DST_COLOR,[Rx]:o.DST_ALPHA,[Ax]:o.ONE_MINUS_SRC_COLOR,[bh]:o.ONE_MINUS_SRC_ALPHA,[Dx]:o.ONE_MINUS_DST_COLOR,[Cx]:o.ONE_MINUS_DST_ALPHA,[Lx]:o.CONSTANT_COLOR,[Nx]:o.ONE_MINUS_CONSTANT_COLOR,[Ox]:o.CONSTANT_ALPHA,[Px]:o.ONE_MINUS_CONSTANT_ALPHA};function F(G,Pt,ot,mt,Nt,Dt,ce,Be,vn,Se){if(G===Ua){T===!0&&(xt(o.BLEND),T=!1);return}if(T===!1&&(St(o.BLEND),T=!0),G!==vx){if(G!==w||Se!==K){if((x!==fr||D!==fr)&&(o.blendEquation(o.FUNC_ADD),x=fr,D=fr),Se)switch(G){case gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case g_:o.blendFunc(o.ONE,o.ONE);break;case __:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case v_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case g_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case __:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case v_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,B=null,P=null,nt=null,H.set(0,0,0),N=0,w=G,K=Se}return}Nt=Nt||Pt,Dt=Dt||ot,ce=ce||mt,(Pt!==x||Nt!==D)&&(o.blendEquationSeparate(xe[Pt],xe[Nt]),x=Pt,D=Nt),(ot!==S||mt!==B||Dt!==P||ce!==nt)&&(o.blendFuncSeparate(ue[ot],ue[mt],ue[Dt],ue[ce]),S=ot,B=mt,P=Dt,nt=ce),(Be.equals(H)===!1||vn!==N)&&(o.blendColor(Be.r,Be.g,Be.b,vn),H.copy(Be),N=vn),w=G,K=!1}function Ze(G,Pt){G.side===ji?xt(o.CULL_FACE):St(o.CULL_FACE);let ot=G.side===Pn;Pt&&(ot=!ot),le(ot),G.blending===gs&&G.transparent===!1?F(Ua):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const mt=G.stencilWrite;h.setTest(mt),mt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),we(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(G){Et!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),Et=G)}function de(G){G!==mx?(St(o.CULL_FACE),G!==E&&(G===m_?o.cullFace(o.BACK):G===gx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),E=G}function Jt(G){G!==C&&(gt&&o.lineWidth(G),C=G)}function we(G,Pt,ot){G?(St(o.POLYGON_OFFSET_FILL),(st!==Pt||rt!==ot)&&(o.polygonOffset(Pt,ot),st=Pt,rt=ot)):xt(o.POLYGON_OFFSET_FILL)}function Qt(G){G?St(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function U(G){G===void 0&&(G=o.TEXTURE0+ft-1),Y!==G&&(o.activeTexture(G),Y=G)}function A(G,Pt,ot){ot===void 0&&(Y===null?ot=o.TEXTURE0+ft-1:ot=Y);let mt=yt[ot];mt===void 0&&(mt={type:void 0,texture:void 0},yt[ot]=mt),(mt.type!==G||mt.texture!==Pt)&&(Y!==ot&&(o.activeTexture(ot),Y=ot),o.bindTexture(G,Pt||lt[G]),mt.type=G,mt.texture=Pt)}function $(){const G=yt[Y];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $t(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(G){et.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),et.copy(G))}function Ct(G){vt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),vt.copy(G))}function ee(G,Pt){let ot=m.get(Pt);ot===void 0&&(ot=new WeakMap,m.set(Pt,ot));let mt=ot.get(G);mt===void 0&&(mt=o.getUniformBlockIndex(Pt,G.name),ot.set(G,mt))}function Wt(G,Pt){const mt=m.get(Pt).get(G);d.get(Pt)!==mt&&(o.uniformBlockBinding(Pt,mt,G.__bindingPointIndex),d.set(Pt,mt))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},Y=null,yt={},_={},v=new WeakMap,y=[],M=null,T=!1,w=null,x=null,S=null,B=null,D=null,P=null,nt=null,H=new Ae(0,0,0),N=0,K=!1,Et=null,E=null,C=null,st=null,rt=null,et.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:St,disable:xt,bindFramebuffer:Xt,drawBuffers:zt,useProgram:oe,setBlending:F,setMaterial:Ze,setFlipSided:le,setCullFace:de,setLineWidth:Jt,setPolygonOffset:we,setScissorTest:Qt,activeTexture:U,bindTexture:A,unbindTexture:$,compressedTexImage2D:pt,compressedTexImage3D:_t,texImage2D:It,texImage3D:$t,updateUBOMapping:ee,uniformBlockBinding:Wt,texStorage2D:ve,texStorage3D:At,texSubImage2D:dt,texSubImage3D:kt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ot,scissor:Yt,viewport:Ct,reset:De}}function lv(o,e,i,r){const l=sA(r);switch(i){case Ev:return o*e;case bv:return o*e;case Av:return o*e*2;case Rv:return o*e/l.components*l.byteLength;case _d:return o*e/l.components*l.byteLength;case Cv:return o*e*2/l.components*l.byteLength;case vd:return o*e*2/l.components*l.byteLength;case Tv:return o*e*3/l.components*l.byteLength;case mi:return o*e*4/l.components*l.byteLength;case Sd:return o*e*4/l.components*l.byteLength;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ih:case Hh:return Math.max(o,16)*Math.max(e,8)/4;case Bh:case Fh:return Math.max(o,8)*Math.max(e,8)/2;case Gh:case Vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case yc:case ad:case rd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case wv:case sd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case od:case ld:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sA(o){switch(o){case Ji:case xv:return{byteLength:1,components:1};case Co:case yv:case wo:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case gr:case pd:case Zi:return{byteLength:4,components:1};case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function oA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,_=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,A){return M?new OffscreenCanvas(U,A):Cc("canvas")}function w(U,A,$){let pt=1;const _t=Qt(U);if((_t.width>$||_t.height>$)&&(pt=$/Math.max(_t.width,_t.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(pt*_t.width),kt=Math.floor(pt*_t.height);v===void 0&&(v=T(dt,kt));const wt=A?T(dt,kt):v;return wt.width=dt,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,dt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+dt+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==si&&U.minFilter!==di}function S(U){o.generateMipmap(U)}function B(U,A,$,pt,_t=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=A;if(A===o.RED&&($===o.FLOAT&&(dt=o.R32F),$===o.HALF_FLOAT&&(dt=o.R16F),$===o.UNSIGNED_BYTE&&(dt=o.R8)),A===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.R8UI),$===o.UNSIGNED_SHORT&&(dt=o.R16UI),$===o.UNSIGNED_INT&&(dt=o.R32UI),$===o.BYTE&&(dt=o.R8I),$===o.SHORT&&(dt=o.R16I),$===o.INT&&(dt=o.R32I)),A===o.RG&&($===o.FLOAT&&(dt=o.RG32F),$===o.HALF_FLOAT&&(dt=o.RG16F),$===o.UNSIGNED_BYTE&&(dt=o.RG8)),A===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RG8UI),$===o.UNSIGNED_SHORT&&(dt=o.RG16UI),$===o.UNSIGNED_INT&&(dt=o.RG32UI),$===o.BYTE&&(dt=o.RG8I),$===o.SHORT&&(dt=o.RG16I),$===o.INT&&(dt=o.RG32I)),A===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),$===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),$===o.UNSIGNED_INT&&(dt=o.RGB32UI),$===o.BYTE&&(dt=o.RGB8I),$===o.SHORT&&(dt=o.RGB16I),$===o.INT&&(dt=o.RGB32I)),A===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),$===o.UNSIGNED_INT&&(dt=o.RGBA32UI),$===o.BYTE&&(dt=o.RGBA8I),$===o.SHORT&&(dt=o.RGBA16I),$===o.INT&&(dt=o.RGBA32I)),A===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),A===o.RGBA){const kt=_t?Tc:be.getTransfer(pt);$===o.FLOAT&&(dt=o.RGBA32F),$===o.HALF_FLOAT&&(dt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(dt=kt===Ve?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,A){let $;return U?A===null||A===gr||A===Ms?$=o.DEPTH24_STENCIL8:A===Zi?$=o.DEPTH32F_STENCIL8:A===Co&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===gr||A===Ms?$=o.DEPTH_COMPONENT24:A===Zi?$=o.DEPTH_COMPONENT32F:A===Co&&($=o.DEPTH_COMPONENT16),$}function P(U,A){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==si&&U.minFilter!==di?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function nt(U){const A=U.target;A.removeEventListener("dispose",nt),N(A),A.isVideoTexture&&_.delete(A)}function H(U){const A=U.target;A.removeEventListener("dispose",H),Et(A)}function N(U){const A=r.get(U);if(A.__webglInit===void 0)return;const $=U.source,pt=y.get($);if(pt){const _t=pt[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&K(U),Object.keys(pt).length===0&&y.delete($)}r.remove(U)}function K(U){const A=r.get(U);o.deleteTexture(A.__webglTexture);const $=U.source,pt=y.get($);delete pt[A.__cacheKey],h.memory.textures--}function Et(U){const A=r.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let _t=0;_t<A.__webglFramebuffer[pt].length;_t++)o.deleteFramebuffer(A.__webglFramebuffer[pt][_t]);else o.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)o.deleteFramebuffer(A.__webglFramebuffer[pt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=U.textures;for(let pt=0,_t=$.length;pt<_t;pt++){const dt=r.get($[pt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove($[pt])}r.remove(U)}let E=0;function C(){E=0}function st(){const U=E;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),E+=1,U}function rt(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ft(U,A){const $=r.get(U);if(U.isVideoTexture&&Jt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt($,U,A);return}}i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+A)}function gt(U,A){const $=r.get(U);if(U.version>0&&$.__version!==U.version){vt($,U,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+A)}function O(U,A){const $=r.get(U);if(U.version>0&&$.__version!==U.version){vt($,U,A);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+A)}function q(U,A){const $=r.get(U);if(U.version>0&&$.__version!==U.version){W($,U,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+A)}const Y={[Ph]:o.REPEAT,[dr]:o.CLAMP_TO_EDGE,[zh]:o.MIRRORED_REPEAT},yt={[si]:o.NEAREST,[Wx]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},Mt={[Kx]:o.NEVER,[ny]:o.ALWAYS,[Qx]:o.LESS,[Dv]:o.LEQUAL,[Jx]:o.EQUAL,[ey]:o.GEQUAL,[$x]:o.GREATER,[ty]:o.NOTEQUAL};function L(U,A){if(A.type===Zi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===di||A.magFilter===Wf||A.magFilter===Yl||A.magFilter===pr||A.minFilter===di||A.minFilter===Wf||A.minFilter===Yl||A.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Y[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Y[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Y[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,yt[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===si||A.minFilter!==Yl&&A.minFilter!==pr||A.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function et(U,A){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",nt));const pt=A.source;let _t=y.get(pt);_t===void 0&&(_t={},y.set(pt,_t));const dt=rt(A);if(dt!==U.__cacheKey){_t[dt]===void 0&&(_t[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),_t[dt].usedTimes++;const kt=_t[U.__cacheKey];kt!==void 0&&(_t[U.__cacheKey].usedTimes--,kt.usedTimes===0&&K(A)),U.__cacheKey=dt,U.__webglTexture=_t[dt].texture}return $}function vt(U,A,$){let pt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=o.TEXTURE_3D);const _t=et(U,A),dt=A.source;i.bindTexture(pt,U.__webglTexture,o.TEXTURE0+$);const kt=r.get(dt);if(dt.version!==kt.__version||_t===!0){i.activeTexture(o.TEXTURE0+$);const wt=be.getPrimaries(be.workingColorSpace),Ot=A.colorSpace===Da?null:be.getPrimaries(A.colorSpace),ve=A.colorSpace===Da||wt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let At=w(A.image,!1,l.maxTextureSize);At=we(A,At);const It=u.convert(A.format,A.colorSpace),$t=u.convert(A.type);let Yt=B(A.internalFormat,It,$t,A.colorSpace,A.isVideoTexture);L(pt,A);let Ct;const ee=A.mipmaps,Wt=A.isVideoTexture!==!0,De=kt.__version===void 0||_t===!0,G=dt.dataReady,Pt=P(A,At);if(A.isDepthTexture)Yt=D(A.format===Es,A.type),De&&(Wt?i.texStorage2D(o.TEXTURE_2D,1,Yt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Yt,At.width,At.height,0,It,$t,null));else if(A.isDataTexture)if(ee.length>0){Wt&&De&&i.texStorage2D(o.TEXTURE_2D,Pt,Yt,ee[0].width,ee[0].height);for(let ot=0,mt=ee.length;ot<mt;ot++)Ct=ee[ot],Wt?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,It,$t,Ct.data):i.texImage2D(o.TEXTURE_2D,ot,Yt,Ct.width,Ct.height,0,It,$t,Ct.data);A.generateMipmaps=!1}else Wt?(De&&i.texStorage2D(o.TEXTURE_2D,Pt,Yt,At.width,At.height),G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,It,$t,At.data)):i.texImage2D(o.TEXTURE_2D,0,Yt,At.width,At.height,0,It,$t,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Wt&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,ee[0].width,ee[0].height,At.depth);for(let ot=0,mt=ee.length;ot<mt;ot++)if(Ct=ee[ot],A.format!==mi)if(It!==null)if(Wt){if(G)if(A.layerUpdates.size>0){const Nt=lv(Ct.width,Ct.height,A.format,A.type);for(const Dt of A.layerUpdates){const ce=Ct.data.subarray(Dt*Nt/Ct.data.BYTES_PER_ELEMENT,(Dt+1)*Nt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Dt,Ct.width,Ct.height,1,It,ce,0,0)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ct.width,Ct.height,At.depth,It,Ct.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Yt,Ct.width,Ct.height,At.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ct.width,Ct.height,At.depth,It,$t,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Yt,Ct.width,Ct.height,At.depth,0,It,$t,Ct.data)}else{Wt&&De&&i.texStorage2D(o.TEXTURE_2D,Pt,Yt,ee[0].width,ee[0].height);for(let ot=0,mt=ee.length;ot<mt;ot++)Ct=ee[ot],A.format!==mi?It!==null?Wt?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,It,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Yt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ct.width,Ct.height,It,$t,Ct.data):i.texImage2D(o.TEXTURE_2D,ot,Yt,Ct.width,Ct.height,0,It,$t,Ct.data)}else if(A.isDataArrayTexture)if(Wt){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,At.width,At.height,At.depth),G)if(A.layerUpdates.size>0){const ot=lv(At.width,At.height,A.format,A.type);for(const mt of A.layerUpdates){const Nt=At.data.subarray(mt*ot/At.data.BYTES_PER_ELEMENT,(mt+1)*ot/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,At.width,At.height,1,It,$t,Nt)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,$t,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,At.width,At.height,At.depth,0,It,$t,At.data);else if(A.isData3DTexture)Wt?(De&&i.texStorage3D(o.TEXTURE_3D,Pt,Yt,At.width,At.height,At.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,$t,At.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,At.width,At.height,At.depth,0,It,$t,At.data);else if(A.isFramebufferTexture){if(De)if(Wt)i.texStorage2D(o.TEXTURE_2D,Pt,Yt,At.width,At.height);else{let ot=At.width,mt=At.height;for(let Nt=0;Nt<Pt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Yt,ot,mt,0,It,$t,null),ot>>=1,mt>>=1}}else if(ee.length>0){if(Wt&&De){const ot=Qt(ee[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Yt,ot.width,ot.height)}for(let ot=0,mt=ee.length;ot<mt;ot++)Ct=ee[ot],Wt?G&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,It,$t,Ct):i.texImage2D(o.TEXTURE_2D,ot,Yt,It,$t,Ct);A.generateMipmaps=!1}else if(Wt){if(De){const ot=Qt(At);i.texStorage2D(o.TEXTURE_2D,Pt,Yt,ot.width,ot.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,$t,At)}else i.texImage2D(o.TEXTURE_2D,0,Yt,It,$t,At);x(A)&&S(pt),kt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function W(U,A,$){if(A.image.length!==6)return;const pt=et(U,A),_t=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const dt=r.get(_t);if(_t.version!==dt.__version||pt===!0){i.activeTexture(o.TEXTURE0+$);const kt=be.getPrimaries(be.workingColorSpace),wt=A.colorSpace===Da?null:be.getPrimaries(A.colorSpace),Ot=A.colorSpace===Da||kt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const ve=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,It=[];for(let mt=0;mt<6;mt++)!ve&&!At?It[mt]=w(A.image[mt],!0,l.maxCubemapSize):It[mt]=At?A.image[mt].image:A.image[mt],It[mt]=we(A,It[mt]);const $t=It[0],Yt=u.convert(A.format,A.colorSpace),Ct=u.convert(A.type),ee=B(A.internalFormat,Yt,Ct,A.colorSpace),Wt=A.isVideoTexture!==!0,De=dt.__version===void 0||pt===!0,G=_t.dataReady;let Pt=P(A,$t);L(o.TEXTURE_CUBE_MAP,A);let ot;if(ve){Wt&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ee,$t.width,$t.height);for(let mt=0;mt<6;mt++){ot=It[mt].mipmaps;for(let Nt=0;Nt<ot.length;Nt++){const Dt=ot[Nt];A.format!==mi?Yt!==null?Wt?G&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,0,0,Dt.width,Dt.height,Yt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,ee,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,0,0,Dt.width,Dt.height,Yt,Ct,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt,ee,Dt.width,Dt.height,0,Yt,Ct,Dt.data)}}}else{if(ot=A.mipmaps,Wt&&De){ot.length>0&&Pt++;const mt=Qt(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,ee,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(At){Wt?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,It[mt].width,It[mt].height,Yt,Ct,It[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ee,It[mt].width,It[mt].height,0,Yt,Ct,It[mt].data);for(let Nt=0;Nt<ot.length;Nt++){const ce=ot[Nt].image[mt].image;Wt?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,0,0,ce.width,ce.height,Yt,Ct,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,ee,ce.width,ce.height,0,Yt,Ct,ce.data)}}else{Wt?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Yt,Ct,It[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ee,Yt,Ct,It[mt]);for(let Nt=0;Nt<ot.length;Nt++){const Dt=ot[Nt];Wt?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,0,0,Yt,Ct,Dt.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt+1,ee,Yt,Ct,Dt.image[mt])}}}x(A)&&S(o.TEXTURE_CUBE_MAP),dt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function lt(U,A,$,pt,_t,dt){const kt=u.convert($.format,$.colorSpace),wt=u.convert($.type),Ot=B($.internalFormat,kt,wt,$.colorSpace);if(!r.get(A).__hasExternalTextures){const At=Math.max(1,A.width>>dt),It=Math.max(1,A.height>>dt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,dt,Ot,At,It,A.depth,0,kt,wt,null):i.texImage2D(_t,dt,Ot,At,It,0,kt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),de(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,_t,r.get($).__webglTexture,0,le(A)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,_t,r.get($).__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(U,A,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer){const pt=A.depthTexture,_t=pt&&pt.isDepthTexture?pt.type:null,dt=D(A.stencilBuffer,_t),kt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=le(A);de(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,dt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const pt=A.textures;for(let _t=0;_t<pt.length;_t++){const dt=pt[_t],kt=u.convert(dt.format,dt.colorSpace),wt=u.convert(dt.type),Ot=B(dt.internalFormat,kt,wt,dt.colorSpace),ve=le(A);$&&de(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,Ot,A.width,A.height):de(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ve,Ot,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ot,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function xt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ft(A.depthTexture,0);const pt=r.get(A.depthTexture).__webglTexture,_t=le(A);if(A.depthTexture.format===_s)de(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pt,0);else if(A.depthTexture.format===Es)de(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Xt(U){const A=r.get(U),$=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const _t=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",_t)};pt.addEventListener("dispose",_t),A.__depthDisposeCallback=_t}A.__boundDepthTexture=pt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");xt(A.__webglFramebuffer,U)}else if($){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=o.createRenderbuffer(),St(A.__webglDepthbuffer[pt],U,!1);else{const _t=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),St(A.__webglDepthbuffer,U,!1);else{const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,_t)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(U,A,$){const pt=r.get(U);A!==void 0&&lt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Xt(U)}function oe(U){const A=U.texture,$=r.get(U),pt=r.get(A);U.addEventListener("dispose",H);const _t=U.textures,dt=U.isWebGLCubeRenderTarget===!0,kt=_t.length>1;if(kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=A.version,h.memory.textures++),dt){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let Ot=0;Ot<A.mipmaps.length;Ot++)$.__webglFramebuffer[wt][Ot]=o.createFramebuffer()}else $.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)$.__webglFramebuffer[wt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(kt)for(let wt=0,Ot=_t.length;wt<Ot;wt++){const ve=r.get(_t[wt]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&de(U)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let wt=0;wt<_t.length;wt++){const Ot=_t[wt];$.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[wt]);const ve=u.convert(Ot.format,Ot.colorSpace),At=u.convert(Ot.type),It=B(Ot.internalFormat,ve,At,Ot.colorSpace,U.isXRRenderTarget===!0),$t=le(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,It,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,$.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),St($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),L(o.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ot=0;Ot<A.mipmaps.length;Ot++)lt($.__webglFramebuffer[wt][Ot],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ot);else lt($.__webglFramebuffer[wt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);x(A)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,Ot=_t.length;wt<Ot;wt++){const ve=_t[wt],At=r.get(ve);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),L(o.TEXTURE_2D,ve),lt($.__webglFramebuffer,U,ve,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),x(ve)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,pt.__webglTexture),L(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Ot=0;Ot<A.mipmaps.length;Ot++)lt($.__webglFramebuffer[Ot],U,A,o.COLOR_ATTACHMENT0,wt,Ot);else lt($.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,wt,0);x(A)&&S(wt),i.unbindTexture()}U.depthBuffer&&Xt(U)}function xe(U){const A=U.textures;for(let $=0,pt=A.length;$<pt;$++){const _t=A[$];if(x(_t)){const dt=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,kt=r.get(_t).__webglTexture;i.bindTexture(dt,kt),S(dt),i.unbindTexture()}}}const ue=[],F=[];function Ze(U){if(U.samples>0){if(de(U)===!1){const A=U.textures,$=U.width,pt=U.height;let _t=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=r.get(U),wt=A.length>1;if(wt)for(let Ot=0;Ot<A.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Ot=0;Ot<A.length;Ot++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Ot]);const ve=r.get(A[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,$,pt,0,0,$,pt,_t,o.NEAREST),m===!0&&(ue.length=0,F.length=0,ue.push(o.COLOR_ATTACHMENT0+Ot),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ue.push(dt),F.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Ot=0;Ot<A.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Ot]);const ve=r.get(A[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,ve,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const A=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function le(U){return Math.min(l.maxSamples,U.samples)}function de(U){const A=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Jt(U){const A=h.render.frame;_.get(U)!==A&&(_.set(U,A),U.update())}function we(U,A){const $=U.colorSpace,pt=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Pa&&$!==Da&&(be.getTransfer($)===Ve?(pt!==mi||_t!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=C,this.setTexture2D=ft,this.setTexture2DArray=gt,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=zt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=de}function lA(o,e){function i(r,l=Da){let u;const h=be.getTransfer(l);if(r===Ji)return o.UNSIGNED_BYTE;if(r===md)return o.UNSIGNED_SHORT_4_4_4_4;if(r===gd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Mv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===xv)return o.BYTE;if(r===yv)return o.SHORT;if(r===Co)return o.UNSIGNED_SHORT;if(r===pd)return o.INT;if(r===gr)return o.UNSIGNED_INT;if(r===Zi)return o.FLOAT;if(r===wo)return o.HALF_FLOAT;if(r===Ev)return o.ALPHA;if(r===Tv)return o.RGB;if(r===mi)return o.RGBA;if(r===bv)return o.LUMINANCE;if(r===Av)return o.LUMINANCE_ALPHA;if(r===_s)return o.DEPTH_COMPONENT;if(r===Es)return o.DEPTH_STENCIL;if(r===Rv)return o.RED;if(r===_d)return o.RED_INTEGER;if(r===Cv)return o.RG;if(r===vd)return o.RG_INTEGER;if(r===Sd)return o.RGBA_INTEGER;if(r===_c||r===vc||r===Sc||r===xc)if(h===Ve)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bh||r===Ih||r===Fh||r===Hh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Bh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ih)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gh||r===Vh||r===kh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Gh||r===Vh)return h===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===kh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Xh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===td)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ed)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nd)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===id)return h===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yc||r===ad||r===rd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===yc)return h===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wv||r===sd||r===od||r===ld)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===yc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===sd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===od)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ld)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ms?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class cA extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uA={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const x=i.getJointPose(w,r),S=this._getHandJoint(p,w);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=_.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new pc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new zn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oa({vertexShader:fA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new Po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends bs{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,y=null,M=null,T=null;const w=new dA,x=i.getContextAttributes();let S=null,B=null;const D=[],P=[],nt=new ze;let H=null;const N=new ai;N.layers.enable(1),N.viewport=new Je;const K=new ai;K.layers.enable(2),K.viewport=new Je;const Et=[N,K],E=new cA;E.layers.enable(1),E.layers.enable(2);let C=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let lt=D[W];return lt===void 0&&(lt=new yh,D[W]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(W){let lt=D[W];return lt===void 0&&(lt=new yh,D[W]=lt),lt.getGripSpace()},this.getHand=function(W){let lt=D[W];return lt===void 0&&(lt=new yh,D[W]=lt),lt.getHandSpace()};function rt(W){const lt=P.indexOf(W.inputSource);if(lt===-1)return;const St=D[lt];St!==void 0&&(St.update(W.inputSource,W.frame,p||h),St.dispatchEvent({type:W.type,data:W.inputSource}))}function ft(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",gt);for(let W=0;W<D.length;W++){const lt=P[W];lt!==null&&(P[W]=null,D[W].disconnect(lt))}C=null,st=null,w.reset(),e.setRenderTarget(S),M=null,y=null,v=null,l=null,B=null,vt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(nt.width,nt.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){u=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",gt),x.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(nt),l.renderState.layers===void 0){const lt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,lt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new _r(M.framebufferWidth,M.framebufferHeight,{format:mi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let lt=null,St=null,xt=null;x.depth&&(xt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,lt=x.stencil?Es:_s,St=x.stencil?Ms:gr);const Xt={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Xt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),B=new _r(y.textureWidth,y.textureHeight,{format:mi,type:Ji,depthTexture:new Wv(y.textureWidth,y.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),vt.setContext(l),vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function gt(W){for(let lt=0;lt<W.removed.length;lt++){const St=W.removed[lt],xt=P.indexOf(St);xt>=0&&(P[xt]=null,D[xt].disconnect(St))}for(let lt=0;lt<W.added.length;lt++){const St=W.added[lt];let xt=P.indexOf(St);if(xt===-1){for(let zt=0;zt<D.length;zt++)if(zt>=P.length){P.push(St),xt=zt;break}else if(P[zt]===null){P[zt]=St,xt=zt;break}if(xt===-1)break}const Xt=D[xt];Xt&&Xt.connect(St)}}const O=new at,q=new at;function Y(W,lt,St){O.setFromMatrixPosition(lt.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const xt=O.distanceTo(q),Xt=lt.projectionMatrix.elements,zt=St.projectionMatrix.elements,oe=Xt[14]/(Xt[10]-1),xe=Xt[14]/(Xt[10]+1),ue=(Xt[9]+1)/Xt[5],F=(Xt[9]-1)/Xt[5],Ze=(Xt[8]-1)/Xt[0],le=(zt[8]+1)/zt[0],de=oe*Ze,Jt=oe*le,we=xt/(-Ze+le),Qt=we*-Ze;if(lt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Qt),W.translateZ(we),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Xt[10]===-1)W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const U=oe+we,A=xe+we,$=de-Qt,pt=Jt+(xt-Qt),_t=ue*xe/A*U,dt=F*xe/A*U;W.projectionMatrix.makePerspective($,pt,_t,dt,U,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function yt(W,lt){lt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(lt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let lt=W.near,St=W.far;w.texture!==null&&(w.depthNear>0&&(lt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),E.near=K.near=N.near=lt,E.far=K.far=N.far=St,(C!==E.near||st!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,st=E.far);const xt=W.parent,Xt=E.cameras;yt(E,xt);for(let zt=0;zt<Xt.length;zt++)yt(Xt[zt],xt);Xt.length===2?Y(E,N,K):E.projectionMatrix.copy(N.projectionMatrix),Mt(W,E,xt)};function Mt(W,lt,St){St===null?W.matrix.copy(lt.matrixWorld):(W.matrix.copy(St.matrixWorld),W.matrix.invert(),W.matrix.multiply(lt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=cd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(W){m=W,y!==null&&(y.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)};let L=null;function et(W,lt){if(_=lt.getViewerPose(p||h),T=lt,_!==null){const St=_.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let xt=!1;St.length!==E.cameras.length&&(E.cameras.length=0,xt=!0);for(let zt=0;zt<St.length;zt++){const oe=St[zt];let xe=null;if(M!==null)xe=M.getViewport(oe);else{const F=v.getViewSubImage(y,oe);xe=F.viewport,zt===0&&(e.setRenderTargetTextures(B,F.colorTexture,y.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(B))}let ue=Et[zt];ue===void 0&&(ue=new ai,ue.layers.enable(zt),ue.viewport=new Je,Et[zt]=ue),ue.matrix.fromArray(oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(xe.x,xe.y,xe.width,xe.height),zt===0&&(E.matrix.copy(ue.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xt===!0&&E.cameras.push(ue)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){const zt=v.getDepthInformation(St[0]);zt&&zt.isValid&&zt.texture&&w.init(e,zt,l.renderState)}}for(let St=0;St<D.length;St++){const xt=P[St],Xt=D[St];xt!==null&&Xt!==void 0&&Xt.update(xt,lt,p||h)}L&&L(W,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),T=null}const vt=new Xv;vt.setAnimationLoop(et),this.setAnimationLoop=function(W){L=W},this.dispose=function(){}}}const or=new $i,mA=new $e;function gA(o,e){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,Hv(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,B,D,P){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(x,S):S.isMeshToonMaterial?(u(x,S),v(x,S)):S.isMeshPhongMaterial?(u(x,S),_(x,S)):S.isMeshStandardMaterial?(u(x,S),y(x,S),S.isMeshPhysicalMaterial&&M(x,S,P)):S.isMeshMatcapMaterial?(u(x,S),T(x,S)):S.isMeshDepthMaterial?u(x,S):S.isMeshDistanceMaterial?(u(x,S),w(x,S)):S.isMeshNormalMaterial?u(x,S):S.isLineBasicMaterial?(h(x,S),S.isLineDashedMaterial&&d(x,S)):S.isPointsMaterial?m(x,S,B,D):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Pn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Pn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const B=e.get(S),D=B.envMap,P=B.envMapRotation;D&&(x.envMap.value=D,or.copy(P),or.x*=-1,or.y*=-1,or.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),x.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(or)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function d(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function m(x,S,B,D){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*B,x.scale.value=D*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function y(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,B){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Pn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,S){S.matcap&&(x.matcap.value=S.matcap)}function w(x,S){const B=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _A(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,D){const P=D.program;r.uniformBlockBinding(B,P)}function p(B,D){let P=l[B.id];P===void 0&&(T(B),P=_(B),l[B.id]=P,B.addEventListener("dispose",x));const nt=D.program;r.updateUBOMapping(B,nt);const H=e.render.frame;u[B.id]!==H&&(y(B),u[B.id]=H)}function _(B){const D=v();B.__bindingPointIndex=D;const P=o.createBuffer(),nt=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,nt,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function v(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const D=l[B.id],P=B.uniforms,nt=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let H=0,N=P.length;H<N;H++){const K=Array.isArray(P[H])?P[H]:[P[H]];for(let Et=0,E=K.length;Et<E;Et++){const C=K[Et];if(M(C,H,Et,nt)===!0){const st=C.__offset,rt=Array.isArray(C.value)?C.value:[C.value];let ft=0;for(let gt=0;gt<rt.length;gt++){const O=rt[gt],q=w(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,st+ft,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,ft),ft+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,D,P,nt){const H=B.value,N=D+"_"+P;if(nt[N]===void 0)return typeof H=="number"||typeof H=="boolean"?nt[N]=H:nt[N]=H.clone(),!0;{const K=nt[N];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return nt[N]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function T(B){const D=B.uniforms;let P=0;const nt=16;for(let N=0,K=D.length;N<K;N++){const Et=Array.isArray(D[N])?D[N]:[D[N]];for(let E=0,C=Et.length;E<C;E++){const st=Et[E],rt=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,gt=rt.length;ft<gt;ft++){const O=rt[ft],q=w(O),Y=P%nt,yt=Y%q.boundary,Mt=Y+yt;P+=yt,Mt!==0&&nt-Mt<q.storage&&(P+=nt-Mt),st.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=P,P+=q.storage}}}const H=P%nt;return H>0&&(P+=nt-H),B.__size=P,B.__cache={},this}function w(B){const D={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(D.boundary=4,D.storage=4):B.isVector2?(D.boundary=8,D.storage=8):B.isVector3||B.isColor?(D.boundary=16,D.storage=12):B.isVector4?(D.boundary=16,D.storage=16):B.isMatrix3?(D.boundary=48,D.storage=48):B.isMatrix4?(D.boundary=64,D.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),D}function x(B){const D=B.target;D.removeEventListener("dispose",x);const P=h.indexOf(D.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function S(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:S}}class vA{constructor(e={}){const{canvas:i=ay(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const M=new Uint32Array(4),T=new Int32Array(4);let w=null,x=null;const S=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this.toneMapping=La,this.toneMappingExposure=1;const D=this;let P=!1,nt=0,H=0,N=null,K=-1,Et=null;const E=new Je,C=new Je;let st=null;const rt=new Ae(0);let ft=0,gt=i.width,O=i.height,q=1,Y=null,yt=null;const Mt=new Je(0,0,gt,O),L=new Je(0,0,gt,O);let et=!1;const vt=new kv;let W=!1,lt=!1;const St=new $e,xt=new $e,Xt=new at,zt=new Je,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function ue(){return N===null?q:1}let F=r;function Ze(R,V){return i.getContext(R,V)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dd}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const V="webgl2";if(F=Ze(V,R),F===null)throw Ze(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,de,Jt,we,Qt,U,A,$,pt,_t,dt,kt,wt,Ot,ve,At,It,$t,Yt,Ct,ee,Wt,De,G;function Pt(){le=new ET(F),le.init(),Wt=new lA(F,le),de=new gT(F,le,e,Wt),Jt=new rA(F),de.reverseDepthBuffer&&Jt.buffers.depth.setReversed(!0),we=new AT(F),Qt=new Xb,U=new oA(F,le,Jt,Qt,de,Wt,we),A=new vT(D),$=new MT(D),pt=new Ly(F),De=new pT(F,pt),_t=new TT(F,pt,we,De),dt=new CT(F,_t,pt,we),Yt=new RT(F,de,U),At=new _T(Qt),kt=new kb(D,A,$,le,de,De,At),wt=new gA(D,Qt),Ot=new qb,ve=new Jb(le),$t=new dT(D,A,$,Jt,dt,y,m),It=new iA(D,dt,de),G=new _A(F,we,de,Jt),Ct=new mT(F,le,we),ee=new bT(F,le,we),we.programs=kt.programs,D.capabilities=de,D.extensions=le,D.properties=Qt,D.renderLists=Ot,D.shadowMap=It,D.state=Jt,D.info=we}Pt();const ot=new pA(D,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(gt,O,!1))},this.getSize=function(R){return R.set(gt,O)},this.setSize=function(R,V,Q=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}gt=R,O=V,i.width=Math.floor(R*q),i.height=Math.floor(V*q),Q===!0&&(i.style.width=R+"px",i.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(gt*q,O*q).floor()},this.setDrawingBufferSize=function(R,V,Q){gt=R,O=V,q=Q,i.width=Math.floor(R*Q),i.height=Math.floor(V*Q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(Mt)},this.setViewport=function(R,V,Q,tt){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,V,Q,tt),Jt.viewport(E.copy(Mt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(L)},this.setScissor=function(R,V,Q,tt){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,V,Q,tt),Jt.scissor(C.copy(L).multiplyScalar(q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){Jt.setScissorTest(et=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(R=!0,V=!0,Q=!0){let tt=0;if(R){let k=!1;if(N!==null){const Tt=N.texture.format;k=Tt===Sd||Tt===vd||Tt===_d}if(k){const Tt=N.texture.type,Ut=Tt===Ji||Tt===gr||Tt===Co||Tt===Ms||Tt===md||Tt===gd,Bt=$t.getClearColor(),Rt=$t.getClearAlpha(),Zt=Bt.r,Kt=Bt.g,Ht=Bt.b;Ut?(M[0]=Zt,M[1]=Kt,M[2]=Ht,M[3]=Rt,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=Zt,T[1]=Kt,T[2]=Ht,T[3]=Rt,F.clearBufferiv(F.COLOR,0,T))}else tt|=F.COLOR_BUFFER_BIT}V&&(tt|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(tt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Ot.dispose(),ve.dispose(),Qt.dispose(),A.dispose(),$.dispose(),dt.dispose(),De.dispose(),G.dispose(),kt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",zo),ot.removeEventListener("sessionend",Rs),gi.stop()};function mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=we.autoReset,V=It.enabled,Q=It.autoUpdate,tt=It.needsUpdate,k=It.type;Pt(),we.autoReset=R,It.enabled=V,It.autoUpdate=Q,It.needsUpdate=tt,It.type=k}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const V=R.target;V.removeEventListener("dispose",ce),Be(V)}function Be(R){vn(R),Qt.remove(R)}function vn(R){const V=Qt.get(R).programs;V!==void 0&&(V.forEach(function(Q){kt.releaseProgram(Q)}),R.isShaderMaterial&&kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Q,tt,k,Tt){V===null&&(V=oe);const Ut=k.isMesh&&k.matrixWorld.determinant()<0,Bt=ta(R,V,Q,tt,k);Jt.setMaterial(tt,Ut);let Rt=Q.index,Zt=1;if(tt.wireframe===!0){if(Rt=_t.getWireframeAttribute(Q),Rt===void 0)return;Zt=2}const Kt=Q.drawRange,Ht=Q.attributes.position;let pe=Kt.start*Zt,Oe=(Kt.start+Kt.count)*Zt;Tt!==null&&(pe=Math.max(pe,Tt.start*Zt),Oe=Math.min(Oe,(Tt.start+Tt.count)*Zt)),Rt!==null?(pe=Math.max(pe,0),Oe=Math.min(Oe,Rt.count)):Ht!=null&&(pe=Math.max(pe,0),Oe=Math.min(Oe,Ht.count));const Ie=Oe-pe;if(Ie<0||Ie===1/0)return;De.setup(k,tt,Bt,Q,Rt);let Sn,ye=Ct;if(Rt!==null&&(Sn=pt.get(Rt),ye=ee,ye.setIndex(Sn)),k.isMesh)tt.wireframe===!0?(Jt.setLineWidth(tt.wireframeLinewidth*ue()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(k.isLine){let Vt=tt.linewidth;Vt===void 0&&(Vt=1),Jt.setLineWidth(Vt*ue()),k.isLineSegments?ye.setMode(F.LINES):k.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else k.isPoints?ye.setMode(F.POINTS):k.isSprite&&ye.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Vt=k._multiDrawStarts,qe=k._multiDrawCounts,ae=k._multiDrawCount,ke=Rt?pt.get(Rt).bytesPerElement:1,Ti=Qt.get(tt).currentProgram.getUniforms();for(let Tn=0;Tn<ae;Tn++)Ti.setValue(F,"_gl_DrawID",Tn),ye.render(Vt[Tn]/ke,qe[Tn])}else if(k.isInstancedMesh)ye.renderInstances(pe,Ie,k.count);else if(Q.isInstancedBufferGeometry){const Vt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,qe=Math.min(Q.instanceCount,Vt);ye.renderInstances(pe,Ie,qe)}else ye.render(pe,Ie)};function Se(R,V,Q){R.transparent===!0&&R.side===ji&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,In(R,V,Q),R.side=Na,R.needsUpdate=!0,In(R,V,Q),R.side=ji):In(R,V,Q)}this.compile=function(R,V,Q=null){Q===null&&(Q=R),x=ve.get(Q),x.init(V),B.push(x),Q.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),R!==Q&&R.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),x.setupLights();const tt=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Tt=k.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];Se(Bt,Q,k),tt.add(Bt)}else Se(Tt,Q,k),tt.add(Tt)}),B.pop(),x=null,tt},this.compileAsync=function(R,V,Q=null){const tt=this.compile(R,V,Q);return new Promise(k=>{function Tt(){if(tt.forEach(function(Ut){Qt.get(Ut).currentProgram.isReady()&&tt.delete(Ut)}),tt.size===0){k(R);return}setTimeout(Tt,10)}le.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let un=null;function En(R){un&&un(R)}function zo(){gi.stop()}function Rs(){gi.start()}const gi=new Xv;gi.setAnimationLoop(En),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){un=R,ot.setAnimationLoop(R),R===null?gi.stop():gi.start()},ot.addEventListener("sessionstart",zo),ot.addEventListener("sessionend",Rs),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(V),V=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,V,N),x=ve.get(R,B.length),x.init(V),B.push(x),xt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),vt.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,W=At.init(this.clippingPlanes,lt),w=Ot.get(R,S.length),w.init(),S.push(w),ot.enabled===!0&&ot.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&vr(Tt,V,-1/0,D.sortObjects)}vr(R,V,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort(Y,yt),xe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,xe&&$t.addToRenderList(w,R),this.info.render.frame++,W===!0&&At.beginShadows();const Q=x.state.shadowsArray;It.render(Q,R,V),W===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=w.opaque,k=w.transmissive;if(x.setupLights(),V.isArrayCamera){const Tt=V.cameras;if(k.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Rt=Tt[Ut];xr(tt,k,R,Rt)}xe&&$t.render(R);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Rt=Tt[Ut];Sr(w,R,Rt,Rt.viewport)}}else k.length>0&&xr(tt,k,R,V),xe&&$t.render(R),Sr(w,R,V);N!==null&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(D,R,V),De.resetDefaultState(),K=-1,Et=null,B.pop(),B.length>0?(x=B[B.length-1],W===!0&&At.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?w=S[S.length-1]:w=null};function vr(R,V,Q,tt){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||vt.intersectsSprite(R)){tt&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);const Ut=dt.update(R),Bt=R.material;Bt.visible&&w.push(R,Ut,Bt,Q,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||vt.intersectsObject(R))){const Ut=dt.update(R),Bt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),zt.copy(Ut.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(Bt)){const Rt=Ut.groups;for(let Zt=0,Kt=Rt.length;Zt<Kt;Zt++){const Ht=Rt[Zt],pe=Bt[Ht.materialIndex];pe&&pe.visible&&w.push(R,Ut,pe,Q,zt.z,Ht)}}else Bt.visible&&w.push(R,Ut,Bt,Q,zt.z,null)}}const Tt=R.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)vr(Tt[Ut],V,Q,tt)}function Sr(R,V,Q,tt){const k=R.opaque,Tt=R.transmissive,Ut=R.transparent;x.setupLightsView(Q),W===!0&&At.setGlobalState(D.clippingPlanes,Q),tt&&Jt.viewport(E.copy(tt)),k.length>0&&Ba(k,V,Q),Tt.length>0&&Ba(Tt,V,Q),Ut.length>0&&Ba(Ut,V,Q),Jt.buffers.depth.setTest(!0),Jt.buffers.depth.setMask(!0),Jt.buffers.color.setMask(!0),Jt.setPolygonOffset(!1)}function xr(R,V,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[tt.id]===void 0&&(x.state.transmissionRenderTarget[tt.id]=new _r(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?wo:Ji,minFilter:pr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[tt.id],Ut=tt.viewport||E;Tt.setSize(Ut.z,Ut.w);const Bt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(rt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),xe&&$t.render(Q);const Rt=D.toneMapping;D.toneMapping=La;const Zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),x.setupLightsView(tt),W===!0&&At.setGlobalState(D.clippingPlanes,tt),Ba(R,Q,tt),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ht=0,pe=V.length;Ht<pe;Ht++){const Oe=V[Ht],Ie=Oe.object,Sn=Oe.geometry,ye=Oe.material,Vt=Oe.group;if(ye.side===ji&&Ie.layers.test(tt.layers)){const qe=ye.side;ye.side=Pn,ye.needsUpdate=!0,Cs(Ie,Q,tt,Sn,ye,Vt),ye.side=qe,ye.needsUpdate=!0,Kt=!0}}Kt===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Bt),D.setClearColor(rt,ft),Zt!==void 0&&(tt.viewport=Zt),D.toneMapping=Rt}function Ba(R,V,Q){const tt=V.isScene===!0?V.overrideMaterial:null;for(let k=0,Tt=R.length;k<Tt;k++){const Ut=R[k],Bt=Ut.object,Rt=Ut.geometry,Zt=tt===null?Ut.material:tt,Kt=Ut.group;Bt.layers.test(Q.layers)&&Cs(Bt,V,Q,Rt,Zt,Kt)}}function Cs(R,V,Q,tt,k,Tt){R.onBeforeRender(D,V,Q,tt,k,Tt),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(D,V,Q,tt,R,Tt),k.transparent===!0&&k.side===ji&&k.forceSinglePass===!1?(k.side=Pn,k.needsUpdate=!0,D.renderBufferDirect(Q,V,tt,k,R,Tt),k.side=Na,k.needsUpdate=!0,D.renderBufferDirect(Q,V,tt,k,R,Tt),k.side=ji):D.renderBufferDirect(Q,V,tt,k,R,Tt),R.onAfterRender(D,V,Q,tt,k,Tt)}function In(R,V,Q){V.isScene!==!0&&(V=oe);const tt=Qt.get(R),k=x.state.lights,Tt=x.state.shadowsArray,Ut=k.state.version,Bt=kt.getParameters(R,k.state,Tt,V,Q),Rt=kt.getProgramCacheKey(Bt);let Zt=tt.programs;tt.environment=R.isMeshStandardMaterial?V.environment:null,tt.fog=V.fog,tt.envMap=(R.isMeshStandardMaterial?$:A).get(R.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",ce),Zt=new Map,tt.programs=Zt);let Kt=Zt.get(Rt);if(Kt!==void 0){if(tt.currentProgram===Kt&&tt.lightsStateVersion===Ut)return dn(R,Bt),Kt}else Bt.uniforms=kt.getUniforms(R),R.onBeforeCompile(Bt,D),Kt=kt.acquireProgram(Bt,Rt),Zt.set(Rt,Kt),tt.uniforms=Bt.uniforms;const Ht=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=At.uniform),dn(R,Bt),tt.needsLights=Nc(R),tt.lightsStateVersion=Ut,tt.needsLights&&(Ht.ambientLightColor.value=k.state.ambient,Ht.lightProbe.value=k.state.probe,Ht.directionalLights.value=k.state.directional,Ht.directionalLightShadows.value=k.state.directionalShadow,Ht.spotLights.value=k.state.spot,Ht.spotLightShadows.value=k.state.spotShadow,Ht.rectAreaLights.value=k.state.rectArea,Ht.ltc_1.value=k.state.rectAreaLTC1,Ht.ltc_2.value=k.state.rectAreaLTC2,Ht.pointLights.value=k.state.point,Ht.pointLightShadows.value=k.state.pointShadow,Ht.hemisphereLights.value=k.state.hemi,Ht.directionalShadowMap.value=k.state.directionalShadowMap,Ht.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ht.spotShadowMap.value=k.state.spotShadowMap,Ht.spotLightMatrix.value=k.state.spotLightMatrix,Ht.spotLightMap.value=k.state.spotLightMap,Ht.pointShadowMap.value=k.state.pointShadowMap,Ht.pointShadowMatrix.value=k.state.pointShadowMatrix),tt.currentProgram=Kt,tt.uniformsList=null,Kt}function tn(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Ec.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function dn(R,V){const Q=Qt.get(R);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function ta(R,V,Q,tt,k){V.isScene!==!0&&(V=oe),U.resetTextureUnits();const Tt=V.fog,Ut=tt.isMeshStandardMaterial?V.environment:null,Bt=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Pa,Rt=(tt.isMeshStandardMaterial?$:A).get(tt.envMap||Ut),Zt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Kt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ht=!!Q.morphAttributes.position,pe=!!Q.morphAttributes.normal,Oe=!!Q.morphAttributes.color;let Ie=La;tt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const Sn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ye=Sn!==void 0?Sn.length:0,Vt=Qt.get(tt),qe=x.state.lights;if(W===!0&&(lt===!0||R!==Et)){const Fe=R===Et&&tt.id===K;At.setState(tt,R,Fe)}let ae=!1;tt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==qe.state.version||Vt.outputColorSpace!==Bt||k.isBatchedMesh&&Vt.batching===!1||!k.isBatchedMesh&&Vt.batching===!0||k.isBatchedMesh&&Vt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Vt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Vt.instancing===!1||!k.isInstancedMesh&&Vt.instancing===!0||k.isSkinnedMesh&&Vt.skinning===!1||!k.isSkinnedMesh&&Vt.skinning===!0||k.isInstancedMesh&&Vt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Vt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Vt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Vt.instancingMorph===!1&&k.morphTexture!==null||Vt.envMap!==Rt||tt.fog===!0&&Vt.fog!==Tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==At.numPlanes||Vt.numIntersection!==At.numIntersection)||Vt.vertexAlphas!==Zt||Vt.vertexTangents!==Kt||Vt.morphTargets!==Ht||Vt.morphNormals!==pe||Vt.morphColors!==Oe||Vt.toneMapping!==Ie||Vt.morphTargetsCount!==ye)&&(ae=!0):(ae=!0,Vt.__version=tt.version);let ke=Vt.currentProgram;ae===!0&&(ke=In(tt,V,k));let Ti=!1,Tn=!1,Ia=!1;const Xe=ke.getUniforms(),Fn=Vt.uniforms;if(Jt.useProgram(ke.program)&&(Ti=!0,Tn=!0,Ia=!0),tt.id!==K&&(K=tt.id,Tn=!0),Ti||Et!==R){de.reverseDepthBuffer?(St.copy(R.projectionMatrix),sy(St),oy(St),Xe.setValue(F,"projectionMatrix",St)):Xe.setValue(F,"projectionMatrix",R.projectionMatrix),Xe.setValue(F,"viewMatrix",R.matrixWorldInverse);const Fe=Xe.map.cameraPosition;Fe!==void 0&&Fe.setValue(F,Xt.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Xe.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Xe.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),Et!==R&&(Et=R,Tn=!0,Ia=!0)}if(k.isSkinnedMesh){Xe.setOptional(F,k,"bindMatrix"),Xe.setOptional(F,k,"bindMatrixInverse");const Fe=k.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Xe.setValue(F,"boneTexture",Fe.boneTexture,U))}k.isBatchedMesh&&(Xe.setOptional(F,k,"batchingTexture"),Xe.setValue(F,"batchingTexture",k._matricesTexture,U),Xe.setOptional(F,k,"batchingIdTexture"),Xe.setValue(F,"batchingIdTexture",k._indirectTexture,U),Xe.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Xe.setValue(F,"batchingColorTexture",k._colorsTexture,U));const Ds=Q.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Yt.update(k,Q,ke),(Tn||Vt.receiveShadow!==k.receiveShadow)&&(Vt.receiveShadow=k.receiveShadow,Xe.setValue(F,"receiveShadow",k.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Fn.envMap.value=Rt,Fn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&V.environment!==null&&(Fn.envMapIntensity.value=V.environmentIntensity),Tn&&(Xe.setValue(F,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&ws(Fn,Ia),Tt&&tt.fog===!0&&wt.refreshFogUniforms(Fn,Tt),wt.refreshMaterialUniforms(Fn,tt,q,O,x.state.transmissionRenderTarget[R.id]),Ec.upload(F,tn(Vt),Fn,U)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ec.upload(F,tn(Vt),Fn,U),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Xe.setValue(F,"center",k.center),Xe.setValue(F,"modelViewMatrix",k.modelViewMatrix),Xe.setValue(F,"normalMatrix",k.normalMatrix),Xe.setValue(F,"modelMatrix",k.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Fe=tt.uniformsGroups;for(let Fa=0,Bo=Fe.length;Fa<Bo;Fa++){const yr=Fe[Fa];G.update(yr,ke),G.bind(yr,ke)}}return ke}function ws(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Nc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,V,Q){Qt.get(R.texture).__webglTexture=V,Qt.get(R.depthTexture).__webglTexture=Q;const tt=Qt.get(R);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const Q=Qt.get(R);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Q=0){N=R,nt=V,H=Q;let tt=!0,k=null,Tt=!1,Ut=!1;if(R){const Rt=Qt.get(R);if(Rt.__useDefaultFramebuffer!==void 0)Jt.bindFramebuffer(F.FRAMEBUFFER,null),tt=!1;else if(Rt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Rt.__hasExternalTextures)U.rebindTextures(R,Qt.get(R.texture).__webglTexture,Qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ht=R.depthTexture;if(Rt.__boundDepthTexture!==Ht){if(Ht!==null&&Qt.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ut=!0);const Kt=Qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?k=Kt[V][Q]:k=Kt[V],Tt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?k=Qt.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[Q]:k=Kt,E.copy(R.viewport),C.copy(R.scissor),st=R.scissorTest}else E.copy(Mt).multiplyScalar(q).floor(),C.copy(L).multiplyScalar(q).floor(),st=et;if(Jt.bindFramebuffer(F.FRAMEBUFFER,k)&&tt&&Jt.drawBuffers(R,k),Jt.viewport(E),Jt.scissor(C),Jt.setScissorTest(st),Tt){const Rt=Qt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,Q)}else if(Ut){const Rt=Qt.get(R.texture),Zt=V||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,Q||0,Zt)}K=-1},this.readRenderTargetPixels=function(R,V,Q,tt,k,Tt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){Jt.bindFramebuffer(F.FRAMEBUFFER,Bt);try{const Rt=R.texture,Zt=Rt.format,Kt=Rt.type;if(!de.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-tt&&Q>=0&&Q<=R.height-k&&F.readPixels(V,Q,tt,k,Wt.convert(Zt),Wt.convert(Kt),Tt)}finally{const Rt=N!==null?Qt.get(N).__webglFramebuffer:null;Jt.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(R,V,Q,tt,k,Tt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){const Rt=R.texture,Zt=Rt.format,Kt=Rt.type;if(!de.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-tt&&Q>=0&&Q<=R.height-k){Jt.bindFramebuffer(F.FRAMEBUFFER,Bt);const Ht=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ht),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(V,Q,tt,k,Wt.convert(Zt),Wt.convert(Kt),0);const pe=N!==null?Qt.get(N).__webglFramebuffer:null;Jt.bindFramebuffer(F.FRAMEBUFFER,pe);const Oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ry(F,Oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ht),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Ht),F.deleteSync(Oe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,Q=0){R.isTexture!==!0&&(Mc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const tt=Math.pow(2,-Q),k=Math.floor(R.image.width*tt),Tt=Math.floor(R.image.height*tt),Ut=V!==null?V.x:0,Bt=V!==null?V.y:0;U.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ut,Bt,k,Tt),Jt.unbindTexture()},this.copyTextureToTexture=function(R,V,Q=null,tt=null,k=0){R.isTexture!==!0&&(Mc("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,R=arguments[1],V=arguments[2],k=arguments[3]||0,Q=null);let Tt,Ut,Bt,Rt,Zt,Kt;Q!==null?(Tt=Q.max.x-Q.min.x,Ut=Q.max.y-Q.min.y,Bt=Q.min.x,Rt=Q.min.y):(Tt=R.image.width,Ut=R.image.height,Bt=0,Rt=0),tt!==null?(Zt=tt.x,Kt=tt.y):(Zt=0,Kt=0);const Ht=Wt.convert(V.format),pe=Wt.convert(V.type);U.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),Ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Sn=F.getParameter(F.UNPACK_SKIP_PIXELS),ye=F.getParameter(F.UNPACK_SKIP_ROWS),Vt=F.getParameter(F.UNPACK_SKIP_IMAGES),qe=R.isCompressedTexture?R.mipmaps[k]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,qe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Bt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rt),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,Zt,Kt,Tt,Ut,Ht,pe,qe.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,Zt,Kt,qe.width,qe.height,Ht,qe.data):F.texSubImage2D(F.TEXTURE_2D,k,Zt,Kt,Tt,Ut,Ht,pe,qe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ye),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt),k===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Jt.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Q=null,tt=null,k=0){R.isTexture!==!0&&(Mc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,R=arguments[2],V=arguments[3],k=arguments[4]||0);let Tt,Ut,Bt,Rt,Zt,Kt,Ht,pe,Oe;const Ie=R.isCompressedTexture?R.mipmaps[k]:R.image;Q!==null?(Tt=Q.max.x-Q.min.x,Ut=Q.max.y-Q.min.y,Bt=Q.max.z-Q.min.z,Rt=Q.min.x,Zt=Q.min.y,Kt=Q.min.z):(Tt=Ie.width,Ut=Ie.height,Bt=Ie.depth,Rt=0,Zt=0,Kt=0),tt!==null?(Ht=tt.x,pe=tt.y,Oe=tt.z):(Ht=0,pe=0,Oe=0);const Sn=Wt.convert(V.format),ye=Wt.convert(V.type);let Vt;if(V.isData3DTexture)U.setTexture3D(V,0),Vt=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)U.setTexture2DArray(V,0),Vt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const qe=F.getParameter(F.UNPACK_ROW_LENGTH),ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ke=F.getParameter(F.UNPACK_SKIP_PIXELS),Ti=F.getParameter(F.UNPACK_SKIP_ROWS),Tn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Vt,k,Ht,pe,Oe,Tt,Ut,Bt,Sn,ye,Ie.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(Vt,k,Ht,pe,Oe,Tt,Ut,Bt,Sn,Ie.data):F.texSubImage3D(Vt,k,Ht,pe,Oe,Tt,Ut,Bt,Sn,ye,Ie),F.pixelStorei(F.UNPACK_ROW_LENGTH,qe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ti),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Tn),k===0&&V.generateMipmaps&&F.generateMipmap(Vt),Jt.unbindTexture()},this.initRenderTarget=function(R){Qt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Jt.unbindTexture()},this.resetState=function(){nt=0,H=0,N=null,Jt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===xd?"display-p3":"srgb",i.unpackColorSpace=be.workingColorSpace===Dc?"display-p3":"srgb"}}class Md{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=i,this.far=r}clone(){return new Md(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class SA extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Kv extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cv=new $e,fd=new Ov,mc=new Uc,gc=new at;class xA extends Bn{constructor(e=new za,i=new Kv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(l),mc.radius+=u,e.ray.intersectsSphere(mc)===!1)return;cv.copy(l).invert(),fd.copy(e.ray).applyMatrix4(cv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=y,w=M;T<w;T++){const x=p.getX(T);gc.fromBufferAttribute(v,x),uv(gc,x,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let T=y,w=M;T<w;T++)gc.fromBufferAttribute(v,T),uv(gc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function uv(o,e,i,r,l,u,h){const d=fd.distanceSqToPoint(o);if(d<i){const m=new at;fd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);function yA(){const o=ri.useRef(null);return ri.useEffect(()=>{const e=o.current,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new vA({canvas:e,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2));const l=new SA;l.fog=new Md(657931,5,26);const u=new ai(55,1,.1,200),h=new Po(60,30,120,60);h.rotateX(-Math.PI/2);const d=h.attributes.position.array.slice(),m=new Kv({color:11859041,size:.06,transparent:!0,opacity:.55});l.add(new xA(h,m));let p=0;const _=T=>{p=T.clientX/window.innerWidth-.5},v=()=>{const T=window.innerWidth,w=window.innerHeight;r.setSize(T,w,!1),e.style.height=w+"px",u.aspect=T/w,u.updateProjectionMatrix()};let y;const M=T=>{const w=h.attributes.position.array;for(let x=0;x<w.length;x+=3){const S=d[x],B=d[x+2];w[x+1]=Math.sin(S*.35+T*9e-4)*.5+Math.cos(B*.45+T*7e-4)*.45+Math.sin((S+B)*.2+T*5e-4)*.3}h.attributes.position.needsUpdate=!0,u.position.set(p*2,2,9),u.lookAt(0,0,-6),r.render(l,u),i||(y=requestAnimationFrame(M))};return v(),window.addEventListener("resize",v),window.addEventListener("mousemove",_),y=requestAnimationFrame(M),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",v),window.removeEventListener("mousemove",_),h.dispose(),m.dispose(),r.dispose()}},[]),bt.jsx("canvas",{ref:o,className:"waves","aria-hidden":"true"})}const MA="526566763854",fv={en:{title:"whatsapp — jor13",intro:"Type a message and it opens in WhatsApp, ready to send.",hint:"↵ send · shift+↵ new line · esc close",send:"Send ↵",open:"Open chat →",empty:"nothing typed? that’s fine, go straight to the chat.",ready:"ready: WhatsApp opens with your message.",prompt:"message ›",cancel:"Cancel",chips:[["/hire","Hi Jesús! I saw your portfolio and I'd like to talk about a role on our team."],["/project","Hi Jesús! I have a project in mind and I'd like a quote."],["/hello","Hi Jesús! 👋"]]},es:{title:"whatsapp — jor13",intro:"Escribe tu mensaje y se abre en WhatsApp listo para enviar.",hint:"↵ enviar · shift+↵ salto de línea · esc cerrar",send:"Enviar ↵",open:"Abrir chat →",empty:"¿sin mensaje? no pasa nada, entra directo al chat.",ready:"listo: WhatsApp se abre con tu mensaje.",prompt:"mensaje ›",cancel:"Cancelar",chips:[["/vacante","¡Hola Jesús! Vi tu portafolio y me gustaría platicar sobre una vacante en nuestro equipo."],["/proyecto","¡Hola Jesús! Tengo un proyecto en mente y me gustaría una cotización."],["/hola","¡Hola Jesús! 👋"]]}};function EA({open:o,onClose:e,lang:i}){const r=fv[i]||fv.en,[l,u]=ri.useState(""),h=ri.useRef(null),d=l.trim();if(ri.useEffect(()=>{if(!o)return;const _=document.body.style.overflow;document.body.style.overflow="hidden";const v=y=>{y.key==="Escape"&&e()};return window.addEventListener("keydown",v),setTimeout(()=>h.current?.focus(),30),()=>{document.body.style.overflow=_,window.removeEventListener("keydown",v)}},[o,e]),ri.useEffect(()=>{const _=h.current;_&&(_.style.height="auto",_.style.height=Math.min(_.scrollHeight,180)+"px")},[l,o]),!o)return null;const m=()=>{const _=`https://wa.me/${MA}`+(d?`?text=${encodeURIComponent(d)}`:"");ur("contact",d?"whatsapp_msg":"whatsapp"),window.open(_,"_blank","noopener,noreferrer"),u(""),e()},p=_=>{_.key==="Enter"&&!_.shiftKey&&!_.nativeEvent.isComposing&&(_.preventDefault(),m())};return bt.jsx("div",{className:"wam-back",onMouseDown:_=>{_.target===_.currentTarget&&e()},children:bt.jsxs("div",{className:"wam",role:"dialog","aria-modal":"true","aria-label":"WhatsApp",children:[bt.jsxs("div",{className:"wam-bar",children:[bt.jsx("button",{className:"dot r",onClick:e,"aria-label":r.cancel}),bt.jsx("span",{className:"dot y"}),bt.jsx("span",{className:"dot g"}),bt.jsx("span",{className:"wam-title mono",children:r.title})]}),bt.jsxs("div",{className:"wam-body mono",children:[bt.jsxs("div",{className:"wam-line",children:[bt.jsx("span",{className:"lime",children:"$"})," whatsapp --to jesus"]}),bt.jsx("div",{className:"wam-line muted",children:r.intro}),bt.jsx("div",{className:"wam-chips",children:r.chips.map(([_,v])=>bt.jsx("button",{type:"button",onClick:()=>{u(v),h.current?.focus()},children:_},_))}),bt.jsxs("label",{className:"wam-prompt",children:[bt.jsx("span",{className:"lime",children:r.prompt}),bt.jsx("textarea",{ref:h,rows:1,value:l,maxLength:1e3,onChange:_=>u(_.target.value),onKeyDown:p,spellCheck:!1,"aria-label":"Message"})]}),bt.jsxs("div",{className:"wam-line dim",children:["// ",d?r.ready:r.empty]})]}),bt.jsxs("div",{className:"wam-foot",children:[bt.jsx("span",{className:"wam-hint mono",children:r.hint}),bt.jsxs("div",{className:"cta",children:[bt.jsx("button",{className:"btn2",onClick:e,children:r.cancel}),bt.jsx("button",{className:"btn wa-go",onClick:m,children:d?r.send:r.open})]})]})]})})}const hv=[["GitHub","https://github.com/jOR13"],["LinkedIn","https://linkedin.com/in/jesus-ochoa-rabelo"],["WhatsApp","https://wa.me/526566763854"]],Mh="jesus.ochoa.rabelo@gmail.com",TA="https://wa.me/526566763854",bA={en:{nav:["work","experience","contact"],stack:"RAILS · REACT · NEXT.JS · WORDPRESS",summary:"9+ years building web and mobile products for teams in the US, Canada, Chile and Mexico. Ruby on Rails, React, Next.js and WordPress, from first commit to production.",viewWork:"View work →",cv:"Download CV",role:"Full-Stack Developer",location:"Ciudad Juárez, MX · Remote",available:"available",sections:["Experience","Projects","Stack"],present:"Present",newTag:"NEW · 2026",contactTitle:["Let's build","something ","together."],jobs:[{c:"Modyo",r:"Full-Stack Ruby on Rails Developer · Contractor",d:"Sep 2024 — Present",b:["Features and platform improvements for DialogEDU (Rails, Stimulus, React).","Full-stack ownership of new functionality and fixes with the Chilean team."]},{c:"Mind (micheldada / arkusnexus)",r:"Ruby on Rails Developer",d:"2021 — Sep 2024",b:["Notary: OCR verification of payment proofs, 40% faster document processing.","Tigo Money: transfers and QR payments across five LATAM countries.","Breakthrough Broker and Fixle: real estate marketing features and a REST API from scratch."]},{c:"Hipergas",r:"Software Developer",d:"2019 — 2021",b:["Invoice portal (React + Rails API) connected to Business Central ERP.","React Native gas sales app with Rails API."]},{c:"Delphi Technologies",r:"IT Coordinator / Developer",d:"2017 — 2019",b:["Inventory and production apps in C#, MSSQL and DevExpress."]}],projects:[{n:"cuicui",d:"Multiplayer 3D social game on real maps of Mexican cities: avatars, proximity voice chat, 20+ mini-games and an in-game economy.",t:"Next.js · 3D · real-time · PWA",u:"https://cuicui.com.mx",feat:!0},{n:"Teregalo",d:"Gift exchange platform with automatic draw, WhatsApp invites and wish lists.",t:"Next.js · Firebase · TypeScript",u:"https://teregalo.online"},{n:"Juárez Survivor",d:"Arcade game with 5 mini-games inspired by Ciudad Juárez, on the App Store.",t:"React Native · Expo",u:"https://apps.apple.com/app/juarez-survivor/id6758858775"},{n:"IQKitchen",d:"HACCP food safety app that improved process efficiency by 60%.",t:"React Native · Expo"},{n:"PideDirecto",d:"Food delivery web app; raised order completion by 15%.",t:"React"},{n:"Calistenia Juárez",d:"Directory of public calisthenics parks in Ciudad Juárez.",t:"Web",u:"https://calisteniajrz.netlify.app"}]},es:{nav:["proyectos","experiencia","contacto"],stack:"RAILS · REACT · NEXT.JS · WORDPRESS",summary:"Más de 9 años construyendo productos web y móviles para equipos en Estados Unidos, Canadá, Chile y México. Ruby on Rails, React, Next.js y WordPress, del primer commit a producción.",viewWork:"Ver proyectos →",cv:"Descargar CV",role:"Desarrollador Full-Stack",location:"Ciudad Juárez, MX · Remoto",available:"disponible",sections:["Experiencia","Proyectos","Stack"],present:"Actual",newTag:"NUEVO · 2026",contactTitle:["Construyamos","algo ","juntos."],jobs:[{c:"Modyo",r:"Desarrollador Full-Stack Ruby on Rails · Contractor",d:"Sep 2024 — Presente",b:["Funcionalidades y mejoras de plataforma para DialogEDU (Rails, Stimulus, React).","Desarrollo full-stack de nuevas funciones y correcciones con el equipo de Chile."]},{c:"Mind (micheldada / arkusnexus)",r:"Desarrollador Ruby on Rails",d:"2021 — Sep 2024",b:["Notary: verificación de comprobantes de pago con OCR, 40% más rápido el procesamiento.","Tigo Money: transferencias y pagos con QR en cinco países de LATAM.","Breakthrough Broker y Fixle: marketing inmobiliario y una API REST desde cero."]},{c:"Hipergas",r:"Desarrollador de Software",d:"2019 — 2021",b:["Portal de facturas (React + API en Rails) conectado al ERP Business Central.","App de venta de gas en React Native con API en Rails."]},{c:"Delphi Technologies",r:"Coordinador de TI / Desarrollador",d:"2017 — 2019",b:["Apps de inventario y producción en C#, MSSQL y DevExpress."]}],projects:[{n:"cuicui",d:"Juego social multijugador en 3D sobre el mapa real de ciudades de México: monitos, chat de voz por cercanía, 20+ minijuegos y economía propia.",t:"Next.js · 3D · tiempo real · PWA",u:"https://cuicui.com.mx",feat:!0},{n:"Teregalo",d:"Plataforma de intercambio de regalos con sorteo automático, invitaciones por WhatsApp y listas de deseos.",t:"Next.js · Firebase · TypeScript",u:"https://teregalo.online"},{n:"Juárez Survivor",d:"Juego arcade con 5 minijuegos inspirados en Ciudad Juárez, en el App Store.",t:"React Native · Expo",u:"https://apps.apple.com/app/juarez-survivor/id6758858775"},{n:"IQKitchen",d:"App HACCP de seguridad alimentaria que mejoró la eficiencia de procesos un 60%.",t:"React Native · Expo"},{n:"PideDirecto",d:"App web de pedidos de comida; aumentó la finalización de pedidos un 15%.",t:"React"},{n:"Calistenia Juárez",d:"Directorio de parques públicos de calistenia en Ciudad Juárez.",t:"Web",u:"https://calisteniajrz.netlify.app"}]}},AA=[["Backend",["Ruby on Rails","Hotwire · Stimulus","Node.js · REST"]],["Frontend",["React · Next.js","TypeScript","Tailwind"]],["Mobile & CMS",["React Native · Expo","WordPress · PHP","PWA"]],["Data & tools",["PostgreSQL · MySQL","Firebase · AWS","Docker · Git"]]];function Eh({id:o,n:e,title:i,children:r}){return bt.jsx("section",{className:"s",id:o,children:bt.jsxs("div",{className:"wrap",children:[bt.jsxs("div",{className:"sh",children:[bt.jsx("span",{className:"n mono",children:e}),bt.jsx("h2",{children:i})]}),r]})})}function RA(){const[o,e]=ri.useState(()=>(navigator.language||"en").startsWith("es")?"es":"en"),i=bA[o],r="/me/cv.pdf",[l,u]=ri.useState(null),[h,d]=ri.useState(!1),m=ri.useCallback(()=>d(!1),[]),p=M=>{M.preventDefault(),d(!0)},_=M=>T=>M==="WhatsApp"?p(T):ur("contact",M.toLowerCase());ri.useEffect(()=>{px().then(u)},[]);const v=()=>{ur("cv_download").then(M=>M&&u(T=>({...T,cv_downloads:M})))},y=M=>new Intl.NumberFormat(o==="es"?"es-MX":"en-US").format(M);return bt.jsxs(bt.Fragment,{children:[bt.jsx(yA,{}),bt.jsx(EA,{open:h,onClose:m,lang:o}),bt.jsx("nav",{className:"nav",children:bt.jsxs("div",{className:"wrap",children:[bt.jsx("a",{href:"#",className:"mono lime",children:"~/jor13"}),bt.jsxs("div",{className:"links mono",children:[bt.jsx("a",{href:"#work",children:i.nav[0]}),bt.jsx("a",{href:"#experience",children:i.nav[1]}),bt.jsx("a",{href:"#contact",children:i.nav[2]}),bt.jsx("a",{href:r,download:"Jesus-Ochoa-Rabelo-CV.pdf",onClick:v,className:"lime",children:"cv.pdf ↓"}),bt.jsx("button",{className:"lang",onClick:()=>e(o==="en"?"es":"en"),"aria-label":"Change language",children:o==="en"?"ES":"EN"})]})]})}),bt.jsx("header",{className:"hero",children:bt.jsxs("div",{className:"wrap",children:[bt.jsxs("div",{className:"loc mono",children:[i.location," · ",bt.jsxs("span",{className:"lime",children:["● ",i.available]})]}),bt.jsx("h1",{children:"Jesús Ochoa Rabelo"}),bt.jsx("div",{className:"role",children:i.role}),bt.jsx("p",{className:"summary",children:i.summary}),bt.jsxs("div",{className:"hbar",children:[bt.jsxs("div",{className:"clinks mono",children:[bt.jsx("a",{href:`mailto:${Mh}`,onClick:()=>ur("contact","email"),children:"Email ↗"}),hv.map(([M,T])=>bt.jsxs("a",{href:T,target:"_blank",rel:"noopener noreferrer",onClick:_(M),children:[M," ↗"]},M))]}),bt.jsxs("div",{className:"cta",children:[bt.jsx("a",{className:"btn2 wa",href:TA,target:"_blank",rel:"noopener noreferrer",onClick:p,children:"WhatsApp"}),bt.jsx("a",{className:"btn",href:r,download:"Jesus-Ochoa-Rabelo-CV.pdf",onClick:v,children:i.cv})]})]})]})}),bt.jsx(Eh,{id:"experience",n:"01",title:i.sections[0],children:i.jobs.map(M=>bt.jsxs("div",{className:"job",children:[bt.jsx("div",{className:"d mono",children:M.d}),bt.jsxs("div",{children:[bt.jsx("h3",{children:M.c}),bt.jsx("div",{className:"r",children:M.r}),bt.jsx("ul",{children:M.b.map(T=>bt.jsx("li",{children:T},T))})]})]},M.c))}),bt.jsx(Eh,{id:"work",n:"02",title:i.sections[1],children:bt.jsx("div",{className:"pgrid",children:i.projects.map(M=>{const T=M.u?"a":"div";return bt.jsxs(T,{className:`p ${M.feat?"feat":""}`,...M.u?{href:M.u,target:"_blank",rel:"noopener noreferrer",onClick:()=>ur("project",M.n)}:{},children:[M.feat&&bt.jsx("div",{className:"mono lime tag",children:i.newTag}),bt.jsxs("h3",{children:[M.n,M.u&&bt.jsx("span",{className:"arrow",children:" ↗"})]}),bt.jsx("p",{children:M.d}),bt.jsx("div",{className:"tech mono",children:M.t})]},M.n)})})}),bt.jsx(Eh,{id:"skills",n:"03",title:i.sections[2],children:bt.jsx("div",{className:"skills",children:AA.map(([M,T])=>bt.jsxs("div",{children:[bt.jsx("h4",{className:"mono",children:M}),T.map(w=>bt.jsx("div",{children:w},w))]},M))})}),bt.jsx("footer",{id:"contact",children:bt.jsxs("div",{className:"wrap",children:[bt.jsxs("div",{className:"contact",children:[bt.jsxs("h2",{children:[i.contactTitle[0],bt.jsx("br",{}),i.contactTitle[1],bt.jsx("span",{className:"lime",children:i.contactTitle[2]})]}),bt.jsxs("div",{children:[bt.jsx("a",{className:"btn",href:`mailto:${Mh}`,onClick:()=>ur("contact","email"),children:Mh}),bt.jsxs("div",{className:"clinks mono",children:[hv.map(([M,T])=>bt.jsxs("a",{href:T,target:"_blank",rel:"noopener noreferrer",onClick:_(M),children:[M," ↗"]},M)),bt.jsx("a",{href:r,download:"Jesus-Ochoa-Rabelo-CV.pdf",onClick:v,children:"CV.pdf ↓"})]})]})]}),bt.jsxs("div",{className:"copy mono",children:["© ",new Date().getFullYear()," Jesús Ochoa Rabelo · Ciudad Juárez, MX",l?.visits!=null&&bt.jsxs("span",{className:"counter",children:[" · ",y(l.visits)," ",o==="es"?"visitas":"visits"," · ",y(l.cv_downloads??0)," ",o==="es"?"descargas del CV":"CV downloads"]})]})]})})]})}fx.createRoot(document.getElementById("root")).render(bt.jsx(ri.StrictMode,{children:bt.jsx(RA,{})}));
