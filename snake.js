var BRAY_SN;
(function() {
  'use strict';
  if (BRAY_SN) {
    BRAY_SN();
  } else {
    function applyStyles(elem,obj) {
      for (var prop in obj) elem.style[prop]=obj[prop];
    }
    var wrapper=document.createElement("div"),
    frame=document.createElement("iframe");
    frame.src="https://shad0w.ionetty.ovh/proxy/aHR0cHM6Ly93d3cuZ29vZ2xlc25ha2UuY29t/snakedesktop.php";
    frame.width=683; // additional 30px to hide scrollbars
    frame.height=681;
    frame.scrolling="no";
    applyStyles(frame,{
      position:'absolute',
      top:'-15.5px',
      left:'-20px',
      border:"none"
    });
    applyStyles(wrapper,{
      position:"fixed",
      zIndex:2147483647,
      display:"block",
      bottom:"10px",
      left:"10px",
      width:"580px",
      height:"580px",
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
    BRAY_SN=()=>{
      wrapper.removeEventListener("mouseenter",enter,false);
      wrapper.removeEventListener("mouseleave",leave,false);
      wrapper.parentNode.removeChild(wrapper);
      frame=null;
      wrapper=null;
      BRAY_SN=undefined;
      for (var script of document.querySelectorAll('script[src="https://themantheycallbray.github.io/snake.js"]')) script.parentNode.removeChild(script);
    };
  }
}());
