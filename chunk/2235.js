/*! For license information please see 2235.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2235],{"5403":function(e,t,r){r.d(t,{"ub":function(){return o},"Gt":function(){return c},"_z":function(){return a},"pf":function(){return i},"tq":function(){return u},"t3":function(){return s},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return v},"zx":function(){return m},"XZ":function(){return g},"cO":function(){return y},"l0":function(){return h},"__":function(){return Z},"cW":function(){return b},"Nf":function(){return w},"$o":function(){return S},"Y8":function(){return k},"FX":function(){return x},"iR":function(){return j},"rs":function(){return O},"gx":function(){return E},"V1":function(){return N},"Ee":function(){return I},"nk":function(){return _},"kh":function(){return C}});r(3464);var n=r(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),c=(0,n.Z)("taro-movable-view-core"),a=(0,n.Z)("taro-page-container-core"),i=(0,n.Z)("taro-scroll-view-core"),u=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),s=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),v=(0,n.Z)("taro-text-core"),m=(0,n.Z)("taro-button-core"),g=(0,n.Z)("taro-checkbox-core"),y=(0,n.Z)("taro-checkbox-group-core"),h=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),Z=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),b=(0,n.Z)("taro-picker-core"),w=(0,n.Z)("taro-picker-view-core"),S=(0,n.Z)("taro-picker-view-column-core"),k=(0,n.Z)("taro-radio-core"),x=(0,n.Z)("taro-radio-group-core"),j=(0,n.Z)("taro-slider-core"),O=(0,n.Z)("taro-switch-core"),E=(0,n.Z)("taro-textarea-core"),N=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),I=(0,n.Z)("taro-image-core"),_=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),C=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,t,r){var n=r(5827),o=r(1760),c=r(517),a=r(6830),i=r(8652),u=r(6014),s=r(3317),l=r(5935),f=r(766),p=r(3464);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}p.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||v.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,n,o){var c=e.ref.current,a=o[r],i=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),t===d){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return t===d&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(n)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat((0,f.Z)(a),(0,f.Z)(c))).join(" ")}(c,n,o):a}t.Z=function reactifyWebComponent(e){var t=function(t){(0,u.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,a.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,i.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),n=r[0],c=r[1];e.ref.current&&e.ref.current.removeEventListener(n,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"7853":function(e,t,r){r.d(t,{"Fj":function(){return a},"po":function(){return i},"nQ":function(){return s},"cF":function(){return l},"B$":function(){return p}});var n=r(517),o=r(7255),c=r(4388);function getItem(e){var t;try{t=JSON.parse(localStorage.getItem(e)||"")}catch(e){}return t&&"object"===(0,n.Z)(t)&&t.hasOwnProperty("data")?{"result":!0,"data":t.data}:{"result":!1}}var a=function setStorageSync(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"==typeof e){var r=(0,n.Z)(t),c={};c="symbol"===r?{"data":""}:{"data":t},localStorage.setItem(e,JSON.stringify(c))}else console.error((0,o.Hl)({"name":"setStorage","correct":"String","wrong":e}))},i=function setStorage(e){var t=(0,o.jc)(e);if(!t.flag){var r={"errMsg":"setStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var n=e.key,i=e.data,u=e.success,s=e.fail,l=e.complete,f=new c.N({"name":"setStorage","success":u,"fail":s,"complete":l});return"string"!=typeof n?f.fail({"errMsg":(0,o.Hl)({"para":"key","correct":"String","wrong":n})}):(a(n,i),f.success())},u=((0,o.tA)("revokeBufferURL"),function getStorageInfoSync(){return{"keys":Object.keys(localStorage),"limitSize":NaN,"currentSize":NaN}}),s=function getStorageInfo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,n=e.complete,o=new c.N({"name":"getStorageInfo","success":t,"fail":r,"complete":n});return o.success(u())},l=function getStorage(e){var t=(0,o.jc)(e);if(!t.flag){var r={"errMsg":"getStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var n=e.key,a=e.success,i=e.fail,u=e.complete,s=new c.N({"name":"getStorage","success":a,"fail":i,"complete":u});if("string"!=typeof n)return s.fail({"errMsg":(0,o.Hl)({"para":"key","correct":"String","wrong":n})});var l=getItem(n),f=l.result,p=l.data;return f?s.success({"data":p}):s.fail({"errMsg":"data not found"})},f=((0,o.tA)("createBufferURL"),function clearStorageSync(){localStorage.clear()}),p=function clearStorage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,n=e.complete,o=new c.N({"name":"clearStorage","success":t,"fail":r,"complete":n});return f(),o.success()}},"9112":function(e,t,r){r.d(t,{"$g":function(){return a},"ZT":function(){return setNavigationBarTitle},"_i":function(){return i},"hh":function(){return u}});var n=r(1236),o=r(7255),c=r(4388),a=(0,o.tA)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=(0,o.jc)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var a=e.title,i=e.success,u=e.fail,s=e.complete,l=new c.N({"name":"setNavigationBarTitle","success":i,"fail":u,"complete":s});return a&&"string"==typeof a?((0,n.Td)(a),l.success()):l.fail({"errMsg":(0,o.Hl)({"para":"title","correct":"String","wrong":a})})}var i=function setNavigationBarColor(e){var t=e.backgroundColor,r=e.success,n=e.fail,o=e.complete,a=new c.N({"name":"setNavigationBarColor","success":r,"fail":n,"complete":o}),i=document.createElement("meta");return i.setAttribute("name","theme-color"),i.setAttribute("content",t),document.head.appendChild(i),a.success()},u=(0,o.tA)("hideNavigationBarLoading");(0,o.tA)("hideHomeButton")},"8502":function(e,t,r){r(4744);var n=r(3464),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,c={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{"$$typeof":o,"type":e,"key":s,"ref":l,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"2922":function(e,t,r){e.exports=r(8502)},"2235":function(e,t,r){r.r(t),r.d(t,{"default":function(){return h}});var n=r(6830),o=r(8652),c=r(1729),a=r(6014),i=r(295),u=r(5827),s=r(3464),l=r(8548),f=r(4388),p=r(7853),__awaiter=function(e,t,r,n){return new(r||(r=Promise))((function(o,c){function fulfilled(e){try{step(n.next(e))}catch(e){c(e)}}function rejected(e){try{step(n.throw(e))}catch(e){c(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))},d="taro_clipboard";document.addEventListener("copy",(function(){var e;(0,p.po)({"key":d,"data":null===(e=window.getSelection())||void 0===e?void 0:e.toString()}).catch((function(e){console.error(e)}))}));var v=r(5931),m=r(9112),g=r(5403),y=r(2922),h=function(e){(0,a.Z)(Index,e);var t=(0,i.Z)(Index);function Index(){var e;(0,n.Z)(this,Index);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,u.Z)((0,c.Z)(e),"state",{"link":null,"open":null,"certified":"true"}),e}return(0,o.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e,t,r,n=this,o=(null===(e=v.ZPm.Current)||void 0===e||null===(t=e.router)||void 0===t?void 0:t.params)||{},c=o.link&&decodeURIComponent(o.link);this.setState({"link":c,"open":o.open&&decodeURIComponent(o.open),"certified":o.certified});var a=o.title||"WebView";(0,m.ZT)({"title":a}),(0,m.$g)(),"true"!==o.certified&&o.link&&((0,m.hh)(),function setClipboardData(e){var t=e.data,r=e.success,n=e.fail,o=e.complete;__awaiter(void 0,void 0,void 0,(0,l.Z)().mark((function _callee(){var e,c;return(0,l.Z)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(e=new f.N({"name":"setClipboardData","success":r,"fail":n,"complete":o}),a.prev=1,(0,p.Fj)(d,t),"function"!=typeof document.execCommand){a.next=17;break}(c=document.createElement("textarea")).readOnly=!0,c.value=t,c.style.position="absolute",c.style.width="100px",c.style.left="-10000px",document.body.appendChild(c),c.select(),c.setSelectionRange(0,c.value.length),document.execCommand("copy"),document.body.removeChild(c),a.next=18;break;case 17:throw new Error("Unsupported Function: 'document.execCommand'.");case 18:return a.abrupt("return",e.success());case 21:return a.prev=21,a.t0=a.catch(1),a.abrupt("return",e.fail({"errMsg":a.t0.message}));case 24:case"end":return a.stop()}}),_callee,null,[[1,21]])})))}({"data":c||""})),null===(r=this.props.navigation)||void 0===r||r.setOptions({"headerRight":function headerRight(){return(0,y.jsx)(g.G7,{"onClick":n.openUrl.bind(n),"style":{"paddingRight":20,"paddingLeft":20},"children":(0,y.jsx)(g.xv,{"children":o.right||"打开"})})}})}},{"key":"onWebViewLoad","value":function onWebViewLoad(){(0,m.hh)()}},{"key":"openUrl","value":function openUrl(){var e=this.state,t=e.open,r=e.link,n=t||r;n&&v.ZPm.openUrl({"url":n})}},{"key":"onError","value":function onError(){(0,m.hh)(),(0,m.ZT)({"title":"加载失败"})}},{"key":"render","value":function render(){var e=this.state,t=e.link,r=e.certified;return t?"true"!==r?(0,y.jsxs)(g.G7,{"children":[(0,y.jsx)(g.G7,{"className":"webview-url","children":decodeURIComponent(t)}),(0,y.jsx)(g.G7,{"className":"webview-tip","children":"该网址不支持打开，已复制到剪切板。"})]}):(0,y.jsx)(g.kh,{"src":decodeURIComponent(t),"onLoad":this.onWebViewLoad.bind(this),"onError":this.onError.bind(this)}):null}}]),Index}(s.Component)}}]);