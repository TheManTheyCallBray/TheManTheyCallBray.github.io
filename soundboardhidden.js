var BRAY_SB;
(function() {
  'use strict';
  if (BRAY_SB) {
    BRAY_SB();
  } else {
    function applyStyles(elem,obj) {
      for (var prop in obj) elem.style[prop]=obj[prop];
    }
    var wrapper=document.createElement("div"),
    frame=document.createElement("iframe");
    frame.src="https://lasttimeplssss.herokuapp.com/textbooks/https://3kh0.github.io/projects/soundboard/";
    frame.width=333; // additional 30px to hide scrollbars
    frame.height=461;
    frame.scrolling="yes";
    applyStyles(frame,{
      position:'absolute',
      top:'-151.5px',
      left:'-27px',
      border:"none"
    });
    applyStyles(wrapper,{
      position:"fixed",
      zIndex:2147483647,
      display:"block",
      bottom:"10px",
      left:"10px",
      width:"280px",
      height:"280px",
      overflow:"hidden",
      transition:"opacity 0.1s",
      borderRadius:"6px",
      transform:"scale(1)"
    });
    wrapper.appendChild(frame);
    document.body.parentNode.appendChild(wrapper);
    function enter() {wrapper.style.opacity="1";}
    function leave() {wrapper.style.opacity="0";frame.blur();}
    wrapper.addEventListener("mouseenter",enter,false);
    wrapper.addEventListener("mouseleave",leave,false);
    BRAY_SB=()=>{
      wrapper.removeEventListener("mouseenter",enter,false);
      wrapper.removeEventListener("mouseleave",leave,false);
      wrapper.parentNode.removeChild(wrapper);
      frame=null;
      wrapper=null;
      BRAY_SB=undefined;
      for (var script of document.querySelectorAll('script[src="https://themantheycallbray.github.io/soundboardhidden.js"]')) script.parentNode.removeChild(script);
    };
  }
}());
