function adjustListMenuLeftPaddingTop(){document.getElementById("list-menu-left").style.paddingTop=window.innerHeight/2+"px"}window.onload=function(){adjustListMenuLeftPaddingTop()},window.addEventListener("orientationchange",function(){adjustListMenuLeftPaddingTop()},!1);var addEvent=function(n,t,e){return n.addEventListener?n.addEventListener(t,e,!1):n.attachEvent?n.attachEvent("on"+t,e):void 0};addEvent(document.getElementById("open-left"),"click",function(){snapper.open("left")});