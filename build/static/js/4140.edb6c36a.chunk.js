"use strict";(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[4140],{64140:(e,t,o)=>{o.r(t),o.d(t,{default:()=>W});var r=o(5057),i=o(31476),n=o(46434),l=o(80099),a=o(53381);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e){var t=e.$disabled,o=e.$checked,r=e.$isIndeterminate,i=e.$error,n=e.$isHovered,l=e.$isActive,a=e.$theme.colors;return t?o||r?a.tickFillDisabled:a.tickFill:i&&(r||o)?l?a.tickFillErrorSelectedHoverActive:n?a.tickFillErrorSelectedHover:a.tickFillErrorSelected:i?l?a.tickFillErrorHoverActive:n?a.tickFillErrorHover:a.tickFillError:r||o?l?a.tickFillSelectedHoverActive:n?a.tickFillSelectedHover:a.tickFillSelected:l?a.tickFillActive:n?a.tickFillHover:a.tickFill}function p(e){var t=e.$disabled,o=e.$theme.colors;return t?o.contentSecondary:o.contentPrimary}var h=(0,a.zo)("label",(function(e){var t=e.$disabled,o=e.$labelPlacement;return{flexDirection:"top"===o||"bottom"===o?"column":"row",display:"flex",alignItems:"top"===o||"bottom"===o?"center":"flex-start",cursor:t?"not-allowed":"pointer",userSelect:"none"}}));h.displayName="Root",h.displayName="Root";var m=(0,a.zo)("span",(function(e){var t=e.$checked,o=e.$disabled,r=e.$error,i=e.$isIndeterminate,n=e.$theme,l=e.$isFocusVisible,a=n.sizing,s=n.animation,c=o?n.colors.tickMarkFillDisabled:r?n.colors.tickMarkFillError:n.colors.tickMarkFill,d=encodeURIComponent('\n    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M14 0.5H0V3.5H14V0.5Z" fill="'.concat(c,'"/>\n    </svg>\n  ')),p=encodeURIComponent('\n    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="'.concat(c,'"/>\n    </svg>\n  ')),h=n.borders.checkboxBorderRadius,m=function(e){var t=e.$disabled,o=e.$checked,r=e.$error,i=e.$isIndeterminate,n=e.$theme,l=e.$isFocusVisible,a=n.colors;return t?a.tickFillDisabled:o||i?"transparent":r?a.borderNegative:l?a.borderSelected:a.tickBorder}(e);return{flex:"0 0 auto",transitionDuration:s.timing200,transitionTimingFunction:s.easeOutCurve,transitionProperty:"background-image, border-color, background-color",width:a.scale700,height:a.scale700,left:"4px",top:"4px",boxSizing:"border-box",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:"3px",borderRightWidth:"3px",borderTopWidth:"3px",borderBottomWidth:"3px",borderLeftColor:m,borderRightColor:m,borderTopColor:m,borderBottomColor:m,borderTopLeftRadius:h,borderTopRightRadius:h,borderBottomRightRadius:h,borderBottomLeftRadius:h,outline:l&&t?"3px solid ".concat(n.colors.accent):"none",display:"inline-block",verticalAlign:"middle",backgroundImage:i?"url('data:image/svg+xml,".concat(d,"');"):t?"url('data:image/svg+xml,".concat(p,"');"):null,backgroundColor:u(e),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",marginTop:n.sizing.scale0,marginBottom:n.sizing.scale0,marginLeft:n.sizing.scale0,marginRight:n.sizing.scale0}}));m.displayName="Checkmark",m.displayName="Checkmark";var b=(0,a.zo)("div",(function(e){var t=e.$theme.typography;return c(c(c({verticalAlign:"middle"},function(e){var t,o=e.$labelPlacement,r=void 0===o?"":o,i=e.$theme,n=i.sizing.scale300;switch(r){case"top":t="Bottom";break;case"bottom":t="Top";break;case"left":t="Right";break;default:t="Left"}return"rtl"===i.direction&&"Left"===t?t="Right":"rtl"===i.direction&&"Right"===t&&(t="Left"),d({},"padding".concat(t),n)}(e)),{},{color:p(e)},t.LabelMedium),{},{lineHeight:"24px"})}));b.displayName="Label",b.displayName="Label";var g=(0,a.zo)("input",{opacity:0,width:0,height:0,overflow:"hidden",margin:0,padding:0,position:"absolute"});g.displayName="Input",g.displayName="Input";var f=(0,a.zo)("div",(function(e){var t=e.$theme.colors.toggleFill;return e.$disabled?t=e.$theme.colors.toggleFillDisabled:e.$checked&&e.$error?t=e.$theme.colors.tickFillErrorSelected:e.$checked&&(t=e.$theme.colors.toggleFillChecked),{backgroundColor:t,borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",boxShadow:e.$isFocusVisible?"0 0 0 3px ".concat(e.$theme.colors.accent):e.$isHovered&&!e.$disabled?e.$theme.lighting.shadow500:e.$theme.lighting.shadow400,outline:"none",height:e.$theme.sizing.scale700,width:e.$theme.sizing.scale700,transform:e.$checked?"translateX(".concat("rtl"===e.$theme.direction?"-100%":"100%",")"):null,transition:"transform ".concat(e.$theme.animation.timing200)}}));f.displayName="Toggle",f.displayName="Toggle";var v=(0,a.zo)("div",(function(e){var t=e.$theme.colors.toggleTrackFill;return e.$disabled?t=e.$theme.colors.toggleTrackFillDisabled:e.$error&&e.$checked&&(t=e.$theme.colors.tickFillError),{alignItems:"center",backgroundColor:t,borderTopLeftRadius:"7px",borderTopRightRadius:"7px",borderBottomRightRadius:"7px",borderBottomLeftRadius:"7px",display:"flex",height:e.$theme.sizing.scale550,marginTop:e.$theme.sizing.scale200,marginBottom:e.$theme.sizing.scale100,marginLeft:e.$theme.sizing.scale200,marginRight:e.$theme.sizing.scale100,width:e.$theme.sizing.scale1000}}));v.displayName="ToggleTrack",v.displayName="ToggleTrack";var y=Object.freeze({default:"default",toggle:"toggle",toggle_round:"toggle"}),k=(Object.freeze({top:"top",right:"right",bottom:"bottom",left:"left"}),o(94253));function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},w.apply(this,arguments)}function F(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=C(e);if(t){var i=C(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"===$(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}(this,o)}}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function O(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var P=function(e){return e.stopPropagation()},S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,o,i,n=R(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return O(T(e=n.call.apply(n,[this].concat(o))),"state",{isFocused:e.props.autoFocus||!1,isFocusVisible:!1,isHovered:!1,isActive:!1}),O(T(e),"onMouseEnter",(function(t){e.setState({isHovered:!0}),e.props.onMouseEnter(t)})),O(T(e),"onMouseLeave",(function(t){e.setState({isHovered:!1,isActive:!1}),e.props.onMouseLeave(t)})),O(T(e),"onMouseDown",(function(t){e.setState({isActive:!0}),e.props.onMouseDown(t)})),O(T(e),"onMouseUp",(function(t){e.setState({isActive:!1}),e.props.onMouseUp(t)})),O(T(e),"onFocus",(function(t){e.setState({isFocused:!0}),e.props.onFocus(t),(0,k.E)(t)&&e.setState({isFocusVisible:!0})})),O(T(e),"onBlur",(function(t){e.setState({isFocused:!1}),e.props.onBlur(t),!1!==e.state.isFocusVisible&&e.setState({isFocusVisible:!1})})),e}return t=a,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,o=e.inputRef;t&&o.current&&o.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.overrides,o=void 0===t?{}:t,i=e.onChange,n=e.labelPlacement,a=void 0===n?this.props.checkmarkType===y.toggle?"left":"right":n,s=e.inputRef,c=e.isIndeterminate,d=e.error,u=e.disabled,p=e.value,k=e.name,$=e.type,F=e.checked,x=e.children,R=e.required,T=e.title,C=o.Root,O=o.Checkmark,S=o.Label,L=o.Input,j=o.Toggle,M=o.ToggleTrack,E=(0,l.XG)(C)||h,B=(0,l.XG)(O)||m,V=(0,l.XG)(S)||b,z=(0,l.XG)(L)||g,H=(0,l.XG)(j)||f,D=(0,l.XG)(M)||v,I={onChange:i,onFocus:this.onFocus,onBlur:this.onBlur},W={onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},A={$isFocused:this.state.isFocused,$isFocusVisible:this.state.isFocusVisible,$isHovered:this.state.isHovered,$isActive:this.state.isActive,$error:d,$checked:F,$isIndeterminate:c,$required:R,$disabled:u,$value:p},U=x&&r.createElement(V,w({$labelPlacement:a},A,(0,l.ch)(S)),this.props.containsInteractiveElement?r.createElement("div",{onClick:function(e){return e.preventDefault()}},x):x);return r.createElement(E,w({"data-baseweb":"checkbox",title:T||null,$labelPlacement:a},A,W,(0,l.ch)(C)),("top"===a||"left"===a)&&U,this.props.checkmarkType===y.toggle?r.createElement(D,w({},A,(0,l.ch)(M)),r.createElement(H,w({},A,(0,l.ch)(j)))):r.createElement(B,w({},A,(0,l.ch)(O))),r.createElement(z,w({value:p,name:k,checked:F,required:R,"aria-label":this.props["aria-label"]||this.props.ariaLabel,"aria-checked":c?"mixed":F,"aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":d||null,"aria-required":R||null,disabled:u,type:$,ref:s,onClick:P},A,I,(0,l.ch)(L))),("bottom"===a||"right"===a)&&U)}}])&&F(t.prototype,o),i&&F(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);O(S,"defaultProps",{overrides:{},checked:!1,containsInteractiveElement:!1,disabled:!1,autoFocus:!1,isIndeterminate:!1,inputRef:r.createRef(),error:!1,type:"checkbox",checkmarkType:y.default,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseDown:function(){},onMouseUp:function(){},onFocus:function(){},onBlur:function(){}});const L=S;var j=o(59990),M=o(98209),E=o(4337),B=o(89401),V=o(18950),z=o(21807);const H=(0,o(45490).Z)("div",{target:"e16v3svg0"})((({visibility:e})=>({display:e===n.Ws.Collapsed?"none":"flex",visibility:e===n.Ws.Hidden?"hidden":"visible",verticalAlign:"middle",flexDirection:"row",alignItems:"center"})),"");var D=o(96266);class I extends r.PureComponent{constructor(...e){super(...e),this.formClearHelper=new M.Kz,this.state={value:this.initialValue},this.commitWidgetValue=e=>{this.props.widgetMgr.setBoolValue(this.props.element,this.state.value,e)},this.onFormCleared=()=>{this.setState(((e,t)=>({value:t.element.default})),(()=>this.commitWidgetValue({fromUi:!0})))},this.onChange=e=>{const t=e.target.checked;this.setState({value:t},(()=>this.commitWidgetValue({fromUi:!0})))}}get initialValue(){const e=this.props.widgetMgr.getBoolValue(this.props.element);return void 0!==e?e:this.props.element.default}componentDidMount(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}componentDidUpdate(){this.maybeUpdateFromProtobuf()}componentWillUnmount(){this.formClearHelper.disconnect()}maybeUpdateFromProtobuf(){const{setValue:e}=this.props.element;e&&this.updateFromProtobuf()}updateFromProtobuf(){const{value:e}=this.props.element;this.props.element.setValue=!1,this.setState({value:e},(()=>{this.commitWidgetValue({fromUi:!1})}))}render(){var e;const{theme:t,width:o,element:r,disabled:i,widgetMgr:l}=this.props,{colors:a,spacing:s}=t,c={width:o},d=i?a.fadedText40:a.bodyText;return this.formClearHelper.manageFormClearListener(l,r.formId,this.onFormCleared),(0,D.jsx)("div",{className:"row-widget stCheckbox",style:c,children:(0,D.jsx)(L,{checked:this.state.value,disabled:i,onChange:this.onChange,"aria-label":r.label,overrides:{Root:{style:({$isFocusVisible:e})=>({marginBottom:0,marginTop:0,paddingRight:s.twoThirdsSmFont,backgroundColor:e?a.darkenedBgMix25:"",display:"flex",alignItems:"start"})},Checkmark:{style:({$isFocusVisible:e,$checked:t})=>{const o=t&&!i?a.primary:a.fadedText40;return{outline:0,width:"1rem",height:"1rem",marginTop:"0.30rem",boxShadow:e&&t?`0 0 0 0.2rem ${(0,j.DZ)(a.primary,.5)}`:"",borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px",borderLeftColor:o,borderRightColor:o,borderTopColor:o,borderBottomColor:o}}},Label:{style:{position:"relative",top:"1px",color:d}}},children:(0,D.jsxs)(H,{visibility:(0,n.iF)(null===(e=r.labelVisibility)||void 0===e?void 0:e.value),children:[(0,D.jsx)(z.Z,{source:r.label,allowHTML:!1,isLabel:!0,isCheckbox:!0}),r.help&&(0,D.jsx)(V.Hp,{color:d,children:(0,D.jsx)(E.ZP,{content:r.help,placement:B.ug.TOP_RIGHT})})]})})})}}const W=(0,i.b)(I)}}]);