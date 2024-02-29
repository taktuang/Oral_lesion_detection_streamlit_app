(globalThis.webpackChunk_stlite_desktop=globalThis.webpackChunk_stlite_desktop||[]).push([[6913],{81397:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var n=a(5057),r=a(66904),i=a.n(r),o=a(52277),s=a.n(o),c=a(96266);const p=({className:t,scriptRunId:e,numParticles:a,numParticleTypes:n,ParticleComponent:r})=>(0,c.jsx)("div",{className:s()(t,"stHidden"),children:i()(a).map((t=>{const a=Math.floor(Math.random()*n);return(0,c.jsx)(r,{particleType:a},e+t)}))}),u=(0,n.memo)(p)},49774:(t,e,a)=>{"use strict";a.r(e),a.d(e,{NUM_FLAKES:()=>f,default:()=>g});var n=a(5057);const r=a.p+"static/media/flake-0.beded754e8024c73d9d2.png",i=a.p+"static/media/flake-1.8077dc154e0bf900aa73.png",o=a.p+"static/media/flake-2.e3f07d06933dd0e84c24.png";var s=a(81397),c=a(45490),p=a(21371);const u=(t,e=0)=>Math.random()*(t-e)+e,l=(0,c.Z)("img",{target:"e1lf3uja0"})((({theme:t})=>({position:"fixed",top:"-150px",marginLeft:"-75px",zIndex:t.zIndices.balloons,left:`${u(90,10)}vw`,animationDelay:`${u(4e3)}ms`,height:"150px",width:"150px",pointerEvents:"none",animationDuration:"3000ms",animationName:p.F4`
  from {
    transform:
      translateY(0)
      rotateX(${u(360)}deg)
      rotateY(${u(360)}deg)
      rotateZ(${u(360)}deg);
  }

  to {
    transform:
      translateY(calc(100vh + ${150}px))
      rotateX(0)
      rotateY(0)
      rotateZ(0);
  }
`,animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1})),"");var m=a(96266);const f=100,d=[r,i,o],v=d.length,x=({particleType:t})=>(0,m.jsx)(l,{src:d[t]}),h=function({scriptRunId:t}){return(0,m.jsx)(s.Z,{className:"snow",scriptRunId:t,numParticleTypes:v,numParticles:f,ParticleComponent:x})},g=(0,n.memo)(h)},99980:t=>{var e=Math.ceil,a=Math.max;t.exports=function(t,n,r,i){for(var o=-1,s=a(e((n-t)/(r||1)),0),c=Array(s);s--;)c[i?s:++o]=t,t+=r;return c}},39594:(t,e,a)=>{var n=a(36418),r=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(r,""):t}},9186:(t,e,a)=>{var n=a(99980),r=a(27396),i=a(17046);t.exports=function(t){return function(e,a,o){return o&&"number"!=typeof o&&r(e,a,o)&&(a=o=void 0),e=i(e),void 0===a?(a=e,e=0):a=i(a),o=void 0===o?e<a?1:-1:i(o),n(e,a,o,t)}}},36418:t=>{var e=/\s/;t.exports=function(t){for(var a=t.length;a--&&e.test(t.charAt(a)););return a}},66904:(t,e,a)=>{var n=a(9186)();t.exports=n},17046:(t,e,a)=>{var n=a(81692),r=1/0;t.exports=function(t){return t?(t=n(t))===r||t===-1/0?17976931348623157e292*(t<0?-1:1):t===t?t:0:0===t?t:0}},81692:(t,e,a)=>{var n=a(39594),r=a(26271),i=a(71490),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,p=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var a=s.test(t);return a||c.test(t)?p(t.slice(2),a?2:8):o.test(t)?NaN:+t}}}]);