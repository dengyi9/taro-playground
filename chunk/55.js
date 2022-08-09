/*! For license information please see 55.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[55],{"5403":function(e,r,t){t.d(r,{"ub":function(){return o},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return i},"tq":function(){return s},"t3":function(){return u},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return m},"zx":function(){return y},"XZ":function(){return v},"cO":function(){return h},"l0":function(){return b},"__":function(){return Z},"cW":function(){return x},"Nf":function(){return g},"$o":function(){return w},"Y8":function(){return j},"FX":function(){return O},"iR":function(){return _},"rs":function(){return N},"gx":function(){return k},"V1":function(){return z},"Ee":function(){return E},"nk":function(){return S},"kh":function(){return P}});t(3464);var n=t(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),a=(0,n.Z)("taro-movable-view-core"),c=(0,n.Z)("taro-page-container-core"),i=((0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core")),s=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),u=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),m=(0,n.Z)("taro-text-core"),y=(0,n.Z)("taro-button-core"),v=(0,n.Z)("taro-checkbox-core"),h=(0,n.Z)("taro-checkbox-group-core"),b=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),Z=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),x=(0,n.Z)("taro-picker-core"),g=(0,n.Z)("taro-picker-view-core"),w=(0,n.Z)("taro-picker-view-column-core"),j=(0,n.Z)("taro-radio-core"),O=(0,n.Z)("taro-radio-group-core"),_=(0,n.Z)("taro-slider-core"),N=(0,n.Z)("taro-switch-core"),k=(0,n.Z)("taro-textarea-core"),z=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),E=(0,n.Z)("taro-image-core"),S=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),P=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var n=t(5827),o=t(1760),a=t(517),c=t(6830),i=t(8652),s=t(6014),u=t(3317),l=t(5935),f=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,n=(0,l.Z)(e);if(r){var o=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||m.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,n,o){var a=e.ref.current,c=o[t],i=n?n[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&a.setAttribute(t,c),r===d){if("scrollTop"===t)return void(a.mpScrollTop=c);if("scrollLeft"===t)return void(a.mpScrollLeft=c);if("scrollIntoView"===t)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=c;return r===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),a.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(t,c),void(a[t]=c)):"boolean"==typeof c?c?(a[t]=!0,a.setAttribute(t,c)):(a[t]=!1,a.removeAttribute(t)):void(a[t]=c)}if("string"==typeof c)return void a.setAttribute(t,c);if(!c)return void a.removeAttribute(t);if(n)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=n?function getClassName(e,r,t){var n=Array.from(e.classList),o=(r.className||r.class||"").split(" "),a=(t.className||t.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(r){return r!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,n,o):c}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,c.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(n){"children"===n||"key"===n||n in t.props||updateProp(t,e,n,r,t.props)})),Object.keys(this.props).forEach((function(n){updateProp(t,e,n,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],a=t[1];e.ref.current&&e.ref.current.removeEventListener(n,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){var n=t(3464),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var n,a={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":a,"_owner":i.current}}r.Fragment=a,r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var n=t(5403),o=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":r}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!t&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":t})]})}},"3078":function(e,r,t){t.r(r);var n=t(1760),o=t(3464),a=t(5403),c=t(7465),i=t(2922),s=[{"text":"页面主操作 Normal","size":"default","type":"primary"},{"text":"页面主操作 Loading","size":"default","type":"primary","loading":!0},{"text":"页面主操作 Disabled","size":"default","type":"primary","disabled":!0},{"text":"页面次要操作 Normal","size":"default","type":"default"},{"text":"页面次要操作 Disabled","size":"default","type":"default","disabled":!0},{"text":"警告类操作 Normal","size":"default","type":"warn"},{"text":"警告类操作 Disabled","size":"default","type":"warn","disabled":!0}];r.default=function Index(){var e=(0,o.useState)(!0),r=(0,n.Z)(e,2),t=r[0],u=r[1];return(0,i.jsxs)(a.pf,{"className":"components-page","children":[(0,i.jsx)(a.G7,{"className":"components-page__header","children":(0,i.jsx)(c.Z,{"title":"Button"})}),(0,i.jsx)(a.G7,{"className":"components-page__body","children":(0,i.jsx)(a.G7,{"className":"components-page__body-example example","children":(0,i.jsxs)(a.G7,{"className":"example-body","children":[s.map((function(e,r){return(0,i.jsx)(a.zx,{"className":"btn","size":e.size?e.size:void 0,"type":e.type?e.type:void 0,"loading":!!e.loading&&e.loading,"disabled":!!e.disabled&&e.disabled,"children":e.text},r)})),(0,i.jsx)(a.zx,{"loading":t,"onClick":function onClick(){u(!t)},"className":"btn","plain":!0,"type":"primary","hoverStyle":{"backgroundColor":"red","color":"#fff"},"children":"按钮"}),(0,i.jsx)(a.zx,{"plain":!0,"className":"btn","type":"primary","disabled":!0,"children":"不可点击的按钮"}),(0,i.jsx)(a.zx,{"plain":!0,"className":"btn","children":"镂空按钮"}),(0,i.jsx)(a.zx,{"plain":!0,"className":"btn","disabled":!0,"children":"镂空按钮 Disabled"}),(0,i.jsxs)(a.G7,{"className":"btn-center","children":[(0,i.jsx)(a.zx,{"size":"mini","className":"btn","type":"primary","children":"小号按钮"}),(0,i.jsx)(a.zx,{"size":"mini","className":"btn","children":"小号按钮"}),(0,i.jsx)(a.zx,{"size":"mini","className":"btn","type":"warn","children":"小号按钮"})]})]})})})]})}}}]);