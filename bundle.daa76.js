!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var a,u,c=0,l=[];c<e.length;c++)u=e[c],o[u]&&l.push(o[u][0]),o[u]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(n&&n(e,r,i);l.length;)l.shift()()};var r={},o={5:0};e.e=function(t){function n(){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+({}[t]||t)+".chunk."+{0:"ba6ed",1:"1dcb3",2:"86881",3:"e379a",4:"a8ad1"}[t]+".js";var c=setTimeout(n,12e4);return u.onerror=u.onload=n,a.appendChild(u),i},e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s=0)}({"/QC5":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){void 0===n&&(n=w);var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),l=0;l<c.length;l++){var s=c[l].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=a(t.replace(o,"")),e=a(e||"");for(var p=Math.max(t.length,e.length),f=0;f<p;f++)if(e[f]&&":"===e[f].charAt(0)){var h=e[f].replace(/(^\:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||w)[0]||"",v=~d.indexOf("+"),_=~d.indexOf("*"),m=t[f]||"";if(!m&&!_&&(d.indexOf("?")<0||v)){r=!1;break}if(u[h]=decodeURIComponent(m),v||_){u[h]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){var n=t.attributes||w,r=e.attributes||w;return n.default?1:r.default?-1:u(n.path)-u(r.path)||n.path.length-r.path.length}function a(t){return c(t).split("/")}function u(t){return(c(t).match(/\/+/g)||"").length}function c(t){return t.replace(/(^\/+|\/+$)/g,"")}function l(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function s(t,e){void 0===e&&(e="push"),C&&C[e]?C[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function p(){var t;return t=C&&C.location?C.location:C&&C.getCurrentLocation?C.getCurrentLocation():"undefined"!=typeof location?location:N,""+(t.pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&s(t,e?"replace":"push"),d(t)}function h(t){for(var e=x.length;e--;)if(x[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<x.length;n++)!0===x[n].routeTo(t)&&(e=!0);for(var r=k.length;r--;)k[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function _(t){if(0==t.button)return v(t.currentTarget||t.target||this),m(t)}function m(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function b(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&l(e)){if(e.hasAttribute("native"))return;if(v(e))return m(t)}}while(e=e.parentNode)}}function y(){O||("function"==typeof addEventListener&&(C||addEventListener("popstate",function(){return d(p())}),addEventListener("click",b)),O=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return k}),n.d(e,"getCurrentUrl",function(){return p}),n.d(e,"route",function(){return f}),n.d(e,"Router",function(){return j}),n.d(e,"Route",function(){return U}),n.d(e,"Link",function(){return M});var g=n("KM04"),w=(n.n(g),{}),C=null,x=[],k=[],N={},O=!1,j=function(t){function e(e){t.call(this,e),e.history&&(C=e.history),this.state={url:e.url||p()},y()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){x.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;C&&(this.unlisten=C.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),x.splice(x.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,a){return t.slice().sort(i).map(function(t){var i=t.attributes||{},u=i.path,c=o(e,u,i);if(c){if(!1!==a){var l={url:e,matches:c};return r(l,c),n.i(g.cloneElement)(t,l)}return t}return!1}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),a=i[0]||null;this._didRoute=!!a;var u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:a})),a},e}(g.Component),M=function(t){return n.i(g.h)("a",r({onClick:_},t))},U=function(t){return n.i(g.h)(t.component,t)};j.subscribers=k,j.getCurrentUrl=p,j.route=f,j.Router=j,j.Route=U,j.Link=M,e.default=j},0:function(t,e,n){t.exports=n("pwNi")},"424r":function(t,e,n){"use strict";function r(t){n.e(3).then(function(){t(n("OU0B"))}.bind(null,n)).catch(n.oe)}var o=n("7N8r");e.a=n.n(o)()(r)},"5ttS":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=n("KM04"),a=(n.n(i),n("9qb7")),u=n.n(a),c=n("ZMjw"),l=n.n(c),s=new Date,p=s.getFullYear(),f=n.i(i.h)("span",{class:"text-muted"},"Copyright © ",p," ",n.i(i.h)("a",{href:"http://theproblemsolver.nl/"},"ABL - The Problem Sover")),h=n.i(i.h)("a",{href:"https://www.themoviedb.org/"},"The Movie DB");e.a=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(){return n.i(i.h)("footer",{class:l.a.footer},n.i(i.h)("div",{class:"container"},f,n.i(i.h)("span",{class:u()("text-muted",l.a.link)},"Movies from ",h)))},e}(i.Component)},"7N8r":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=function(t){e.setState({child:t&&t.default||t})},o=t(n);o&&o.then&&o.then(n)}return e.prototype=new r.Component,e.prototype.constructor=e,e.prototype.render=function(t,e){return(0,r.h)(e.child,t)},e};var r=n("KM04")},"9qb7":function(t,e){var n,r;!function(){"use strict";function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n))t.push(o.apply(null,n));else if("object"===r)for(var a in n)i.call(n,a)&&n[a]&&t.push(a)}}return t.join(" ")}var i={}.hasOwnProperty;void 0!==t&&t.exports?t.exports=o:(n=[],void 0!==(r=function(){return o}.apply(e,n))&&(t.exports=r))}()},E1C8:function(t,e,n){"use strict";function r(t){n.e(2).then(function(){t(n("Mn+5"))}.bind(null,n)).catch(n.oe)}var o=n("7N8r");e.a=n.n(o)()(r)},JkW7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("w26S");n.n(r);e.default=n("qLaj").a},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var r,o,i,a,u=S;for(a=arguments.length;a-- >2;)E.push(arguments[a]);for(n&&null!=n.children&&(E.length||E.push(n.children),delete n.children);E.length;)if((o=E.pop())&&void 0!==o.pop)for(a=o.length;a--;)E.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?u[u.length-1]+=o:u===S?u=[o]:u.push(o),r=i;var c=new e;return c.nodeName=t,c.children=u,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==L.vnode&&L.vnode(c),c}function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return n(t.nodeName,r(r({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(L.debounceRendering||T)(a)}function a(){var t,e=A;for(A=[];t=e.pop();)t.__d&&O(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=r({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function s(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===R.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,d,a):t.removeEventListener(e,d,a),(t.__l||(t.__l={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)h(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var u=o&&e!==(e=e.replace(/^xlink\:?/,""));null==r||!1===r?u?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(u?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t,e,n){try{t[e]=n}catch(t){}}function d(t){return this.__l[t.type](L.event&&L.event(t)||t)}function v(){for(var t;t=W.pop();)L.afterMount&&L.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(t,e,n,r,o,i){K++||(D=null!=o&&void 0!==o.ownerSVGElement,I=null!=t&&!("__preactattr_"in t));var a=m(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--K||(I=!1,i||v()),a}function m(t,e,n,r,o){var i=t,a=D;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),y(t,!0))),i.__preactattr_=!0,i;var u=e.nodeName;if("function"==typeof u)return j(t,e,n,r);if(D="svg"===u||"foreignObject"!==u&&D,u+="",(!t||!c(t,u))&&(i=s(u,D),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),y(t,!0)}var l=i.firstChild,p=i.__preactattr_,f=e.children;if(null==p){p=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)p[h[d].name]=h[d].value}return!I&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&b(i,f,n,r,I||null!=p.dangerouslySetInnerHTML),w(i,e.attributes,p),D=a,i}function b(t,e,n,r,o){var i,a,c,l,s,f=t.childNodes,h=[],d={},v=0,_=0,b=f.length,g=0,w=e?e.length:0;if(0!==b)for(var C=0;C<b;C++){var x=f[C],k=x.__preactattr_,N=w&&k?x._component?x._component.__k:k.key:null;null!=N?(v++,d[N]=x):(k||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(h[g++]=x)}if(0!==w)for(var C=0;C<w;C++){l=e[C],s=null;var N=l.key;if(null!=N)v&&void 0!==d[N]&&(s=d[N],d[N]=void 0,v--);else if(!s&&_<g)for(i=_;i<g;i++)if(void 0!==h[i]&&u(a=h[i],l,o)){s=a,h[i]=void 0,i===g-1&&g--,i===_&&_++;break}s=m(s,l,n,r),c=f[C],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?p(c):t.insertBefore(s,c))}if(v)for(var C in d)void 0!==d[C]&&y(d[C],!1);for(;_<=g;)void 0!==(s=h[g--])&&y(s,!1)}function y(t,e){var n=t._component;n?M(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||p(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;y(t,!0),t=e}}function w(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||f(t,r,n[r],n[r]=void 0,D);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||f(t,r,n[r],n[r]=e[r],D)}function C(t){var e=t.constructor.name;(B[e]||(B[e]=[])).push(t)}function x(t,e,n){var r,o=B[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),U.call(r,e,n)):(r=new U(e,n),r.constructor=t,r.render=k),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.__b=o[i].__b,o.splice(i,1);break}return r}function k(t,e,n){return this.constructor(t,n)}function N(t,e,n,r,o){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.__c||(t.__c=t.context),t.context=r),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===L.syncComponentUpdates&&t.base?i(t):O(t,1,o)),t.__r&&t.__r(t))}function O(t,e,n,o){if(!t.__x){var i,a,u,c=t.props,s=t.state,p=t.context,f=t.__p||c,h=t.__s||s,d=t.__c||p,m=t.base,b=t.__b,g=m||b,w=t._component,C=!1;if(m&&(t.props=f,t.state=h,t.context=d,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,s,p)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(c,s,p),t.props=c,t.state=s,t.context=p),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!C){i=t.render(c,s,p),t.getChildContext&&(p=r(r({},p),t.getChildContext()));var k,j,U=i&&i.nodeName;if("function"==typeof U){var P=l(i);a=w,a&&a.constructor===U&&P.key==a.__k?N(a,P,1,p,!1):(k=a,t._component=a=x(U,P,p),a.__b=a.__b||b,a.__u=t,N(a,P,0,p,!1),O(a,1,n,!0)),j=a.base}else u=g,k=w,k&&(u=t._component=null),(g||1===e)&&(u&&(u._component=null),j=_(u,i,p,n||!m,g&&g.parentNode,!0));if(g&&j!==g&&a!==w){var E=g.parentNode;E&&j!==E&&(E.replaceChild(j,g),k||(g._component=null,y(g,!1)))}if(k&&M(k),t.base=j,j&&!o){for(var S=t,T=t;T=T.__u;)(S=T).base=j;j._component=S,j._componentConstructor=S.constructor}}if(!m||n?W.unshift(t):C||(t.componentDidUpdate&&t.componentDidUpdate(f,h,d),L.afterUpdate&&L.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);K||o||v()}}function j(t,e,n,r){for(var o=t&&t._component,i=o,a=t,u=o&&t._componentConstructor===e.nodeName,c=u,s=l(e);o&&!c&&(o=o.__u);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(N(o,s,3,n,r),t=o.base):(i&&!u&&(M(i),t=a=null),o=x(e.nodeName,s,n),t&&!o.__b&&(o.__b=t,a=null),N(o,s,1,n,r),t=o.base,a&&t!==a&&(a._component=null,y(a,!1))),t}function M(t){L.beforeUnmount&&L.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?M(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,p(e),C(t),g(e)),t.__r&&t.__r(null)}function U(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function P(t,e,n){return _(n,t,{},!1,e,!1)}var L={},E=[],S=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,R=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],W=[],K=0,D=!1,I=!1,B={};r(U.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),O(this,2)},render:function(){}});var $={h:n,createElement:n,cloneElement:o,Component:U,render:P,rerender:a,options:L};t.exports=$}()},ZMjw:function(t){t.exports={footer:"footer__2jd7n",link:"link__2B5F5"}},ZvhZ:function(t,e,n){"use strict";function r(t){n.e(0).then(function(){t(n("gvyV"))}.bind(null,n)).catch(n.oe)}var o=n("7N8r");e.a=n.n(o)()(r)},gNuw:function(t,e,n){"use strict";function r(t){n.e(1).then(function(){t(n("zN8o"))}.bind(null,n)).catch(n.oe)}var o=n("7N8r");e.a=n.n(o)()(r)},pwNi:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var o=function(t){return t&&t.default||t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};a()}},qLaj:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return C});var i=n("KM04"),a=(n.n(i),n("/QC5")),u=n("sIAo"),c=n("5ttS"),l=n("E1C8"),s=n("gNuw"),p=n("ZvhZ"),f=n("424r"),h=n("rfqP"),d=n.i(i.h)(u.a,null),v=n.i(i.h)(l.a,{path:"/"}),_=n.i(i.h)(p.a,{path:"/movies"}),m=n.i(i.h)(f.a,{path:"/movie/:id/:title"}),b=n.i(i.h)(h.a,{path:"/directors"}),y=n.i(i.h)(s.a,{path:"/profile/",user:"me"}),g=n.i(i.h)(s.a,{path:"/profile/:user"}),w=n.i(i.h)(c.a,null),C=function(t){function e(){for(var e,n,o,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(a))),n.handleRoute=function(t){n.currentUrl=t.url},o=e,r(n,o)}return o(e,t),e.prototype.render=function(){return n.i(i.h)("div",null,d,n.i(i.h)("div",{class:"container"},n.i(i.h)(a.Router,{onChange:this.handleRoute},v,_,m,b,y,g)),w)},e}(i.Component)},rfqP:function(t,e,n){"use strict";function r(t){n.e(4).then(function(){t(n("kKm6"))}.bind(null,n)).catch(n.oe)}var o=n("7N8r");e.a=n.n(o)()(r)},sIAo:function(t,e,n){"use strict";function r(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return p});var a=n("KM04"),u=(n.n(a),n("9qb7")),c=n.n(u),l=n("sw5u"),s=(n.n(l),n.i(a.h)("span",{class:"navbar-toggler-icon"})),p=function(t){function e(){for(var e,n,r,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(a))),n.state={expanded:!1},n.toggleExpanded=function(){n.setState(function(t){return{expanded:!t.expanded}})},n.collapse=function(){n.setState(function(){return{expanded:!1}})},r=e,o(n,r)}return i(e,t),e.prototype.render=function(t,e){var o=e.expanded;return r(t),n.i(a.h)("header",null,n.i(a.h)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},n.i(a.h)(l.Link,{onClick:this.collapse,class:"navbar-brand",href:"/"},".NET Zuid"),n.i(a.h)("button",{class:c()("navbar-toggler",{collapsed:!o}),type:"button","aria-expanded":o,"aria-label":"Toggle navigation",onClick:this.toggleExpanded},s),n.i(a.h)("div",{class:c()("navbar-collapse","collapse",{show:o})},n.i(a.h)("ul",{class:"navbar-nav mr-auto"},n.i(a.h)("li",{class:"nav-item"},n.i(a.h)(l.Link,{onClick:this.collapse,class:"nav-link",activeClassName:"active",href:"/"},"Home")),n.i(a.h)("li",{class:"nav-item"},n.i(a.h)(l.Link,{onClick:this.collapse,class:"nav-link",activeClassName:"active",href:"/movies"},"Movies")),n.i(a.h)("li",{class:"nav-item"},n.i(a.h)(l.Link,{onClick:this.collapse,class:"nav-link",activeClassName:"active",href:"/directors"},"Directors"))))))},e}(a.Component)},sw5u:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n("KM04"),c=n("/QC5"),l=e.Match=function(t){function e(){for(var e,n,r,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(a))),n.update=function(t){n.nextUrl=t,n.setState({})},r=e,o(n,r)}return i(e,t),e.prototype.componentDidMount=function(){c.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){c.subscribers.splice(c.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,c.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(u.Component),s=function(t){var e=t.activeClassName,n=t.path,o=r(t,["activeClassName","path"]);return(0,u.h)(l,{path:n||o.href},function(t){var n=t.matches;return(0,u.h)(c.Link,a({},o,{class:[o.class||o.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=s,e.default=l,l.Link=s},w26S:function(){}});
//# sourceMappingURL=bundle.daa76.js.map