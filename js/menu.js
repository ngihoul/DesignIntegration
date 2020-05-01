var menuHam = document.getElementById("menuHam");
var menuMain = document.getElementById("menuMain");
var mainNavOpen = document.getElementById("mainNavOpen");
var footerNavOpen = document.getElementById("footerNavOpen");

if(menuHam != null && menuMain != null && mainNavOpen != null && footerNavOpen != null) {
	menuHam.addEventListener('click', function(e){
		if(menuMain.className == 'l-header-nav') {
			menuMain.className = 'l-header-nav is-active';
			menuHam.className = 'l-header-hamburger nav-active';
			mainNavOpen.className = 'l-main l-header-nav-active';
			footerNavOpen.className = 'l-footer l-header-nav-active';
		}
		else {
			menuMain.className = 'l-header-nav';
			menuHam.className = 'l-header-hamburger';
			mainNavOpen.className = 'l-main';
			footerNavOpen.className = 'l-footer';
		}
	});
}