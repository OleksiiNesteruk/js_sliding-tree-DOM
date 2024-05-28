document.querySelector(".tree").querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.replaceChild(t,e.firstChild),t.addEventListener("click",function(e){e.target.nextSibling.hidden=!e.target.nextSibling.hidden})});
//# sourceMappingURL=index.3ccd8a76.js.map
