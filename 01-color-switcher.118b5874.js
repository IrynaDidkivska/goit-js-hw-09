const t=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let a=null;e.addEventListener("click",(function({target:e}){e.disabled=!0,o.disabled=!1,a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),console.log("Start")})),o.addEventListener("click",(function({target:t}){e.disabled=!1,t.disabled=!0,clearInterval(a),console.log("Stop")})),console.dir(e);
//# sourceMappingURL=01-color-switcher.118b5874.js.map