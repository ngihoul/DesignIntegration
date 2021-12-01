var menuHam = document.getElementById("menuHam"),
	menuMain = document.getElementById("menuMain");

if(menuHam != null && menuMain!= null) {
	menuHam.addEventListener('click', function(e){
		menuMain.classList.toggle("is-active");
		menuHam.classList.toggle("nav-active");
	});
}