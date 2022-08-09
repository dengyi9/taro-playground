/*! For license information please see 25.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[25],{"5403":function(e,r,t){t.d(r,{"ub":function(){return n},"Gt":function(){return c},"_z":function(){return a},"pf":function(){return i},"tq":function(){return u},"t3":function(){return s},"G7":function(){return f},"JO":function(){return l},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return v},"zx":function(){return m},"XZ":function(){return y},"cO":function(){return h},"l0":function(){return Z},"__":function(){return b},"cW":function(){return g},"Nf":function(){return w},"$o":function(){return x},"Y8":function(){return j},"FX":function(){return O},"iR":function(){return _},"rs":function(){return E},"gx":function(){return k},"V1":function(){return S},"Ee":function(){return I},"nk":function(){return P},"kh":function(){return N}});t(3464);var o=t(2214),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),c=(0,o.Z)("taro-movable-view-core"),a=(0,o.Z)("taro-page-container-core"),i=((0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),u=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),s=(0,o.Z)("taro-swiper-item-core"),f=(0,o.Z)("taro-view-core"),l=(0,o.Z)("taro-icon-core"),p=(0,o.Z)("taro-progress-core"),d=(0,o.Z)("taro-rich-text-core"),v=(0,o.Z)("taro-text-core"),m=(0,o.Z)("taro-button-core"),y=(0,o.Z)("taro-checkbox-core"),h=(0,o.Z)("taro-checkbox-group-core"),Z=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),b=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),g=(0,o.Z)("taro-picker-core"),w=(0,o.Z)("taro-picker-view-core"),x=(0,o.Z)("taro-picker-view-column-core"),j=(0,o.Z)("taro-radio-core"),O=(0,o.Z)("taro-radio-group-core"),_=(0,o.Z)("taro-slider-core"),E=(0,o.Z)("taro-switch-core"),k=(0,o.Z)("taro-textarea-core"),S=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),I=(0,o.Z)("taro-image-core"),P=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),N=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var o=t(5827),n=t(1760),c=t(517),a=t(6830),i=t(8652),u=t(6014),s=t(3317),f=t(5935),l=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,o=(0,f.Z)(e);if(r){var n=(0,f.Z)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,s.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,o,n){var c=e.ref.current,a=n[t],i=o?o[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&c.setAttribute(t,a),r===d){if("scrollTop"===t)return void(c.mpScrollTop=a);if("scrollLeft"===t)return void(c.mpScrollLeft=a);if("scrollIntoView"===t)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&t.match(/^on[A-Z]/)){var u=t.substr(2).toLowerCase(),s=a;return r===d&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(t,a),void(c[t]=a)):"boolean"==typeof a?a?(c[t]=!0,c.setAttribute(t,a)):(c[t]=!1,c.removeAttribute(t)):void(c[t]=a)}if("string"==typeof a)return void c.setAttribute(t,a);if(!a)return void c.removeAttribute(t);if(o)if("string"==typeof i)c.style.cssText="";else for(var f in i)updateStyle(c,f,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,r,t){var o=Array.from(e.classList),n=(r.className||r.class||"").split(" "),c=(t.className||t.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(r){return r!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat((0,l.Z)(a),(0,l.Z)(c))).join(" ")}(c,o,n):a}r.Z=function reactifyWebComponent(e){var r=function(r){(0,u.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,a.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in t.props||updateProp(t,e,o,r,t.props)})),Object.keys(this.props).forEach((function(o){updateProp(t,e,o,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,n.Z)(r,2),o=t[0],c=t[1];e.ref.current&&e.ref.current.removeEventListener(o,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,o=r.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,p.createElement)(e,n,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){var o=t(3464),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,c={},s=null,f=null;for(o in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,o)&&!u.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{"$$typeof":n,"type":e,"key":s,"ref":f,"props":c,"_owner":i.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var o=t(5403),n=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":r}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!t&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":t})]})}},"1199":function(e,r,t){t.r(r),t.d(r,{"default":function(){return ImageView}});var o=t(5403),n=t(7465),c=t(9845),a=t(2922);function ImageView(){return(0,a.jsxs)(o.G7,{"className":"components-page","children":[(0,a.jsx)(o.G7,{"className":"components-page__header","children":(0,a.jsx)(n.Z,{"title":"Image"})}),["aspectFill","aspectFit","scaleToFill","center","widthFix"].map((function(e){return(0,a.jsx)(i,{"mode":e,"src":c},e)}))]})}var i=function ImageContainer(e){var r=e.mode,t=void 0===r?"scaleToFill":r,n=e.src;return(0,a.jsxs)(o.G7,{"className":"imgContainer","children":[(0,a.jsx)(o.Ee,{"className":"imgContainer-left","mode":t,"src":n}),(0,a.jsx)(o.G7,{"style":{"flex":1,"justifyContent":"center","alignItems":"center"},"children":(0,a.jsx)(o.xv,{"style":{"fontWeight":"bold"},"children":"scaleToFill"==t?"scaleToFill（默认）":t})})]})}},"9845":function(e,r,t){e.exports=t.p+"static/images/assets/common/taro_logo.jpg"}}]);