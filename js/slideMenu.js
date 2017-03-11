var roundButton = document.getElementById('roundButton');//document.querySelector("#roundButton");
var flyoutMenu = document.getElementById('flyoutMenu');//document.querySelector("#flyoutMenu");
//add event listeners
roundButton.addEventListener("click", showMenu, false); 
flyoutMenu.addEventListener("click", hideMenu, false);

function showMenu(e) { 
	flyoutMenu.classList.add("show");
	document.body.style.overflow = "hidden";
}

function hideMenu(e) { 
	flyoutMenu.classList.remove("show"); 
	e.stopPropagation();
    document.body.style.overflow = "auto";
}