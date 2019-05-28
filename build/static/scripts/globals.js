

window.onscroll = function() {
	myFunction()
};

const nav = document.getElementById("navigation"),
			sticky = nav.offsetTop,
			logo = document.getElementById("logo"),
			parallax = document.getElementById('home'),
			links = nav.querySelectorAll(".navigation_item"),
			scroll = new SmoothScroll('a[href*="#"]', {
				speed: 800,
				easing: 'easeOutQuad'
			});


// ADD THE PARALLAX EFFECT TO MAIN PAGE
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -0.5 + "px";
})


// FUNCTION TO MAKE SCROLLUP BTN APPEAR
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUp").style.display = "block";
  } else {
    document.getElementById("scrollUp").style.display = "none";
  }
}


// FUNCTION TO MAKE THE NAVIGATION VISIBLE
function myFunction() {
	if (window.pageYOffset > sticky) {
		// nav.className = "navigation-top";
		nav.classList.add("sticky");
		logo.style.color = '#000000';
		scrollFunction()
	} else {
		// nav.className = "navigation";
		nav.classList.remove("sticky");
		logo.style.color = '#ffffff';
	}
}


// FUNCTION TO ACTIVATE BURGER MENU
document.getElementById("nav_burger").addEventListener("click", openNav);

document.getElementById("nav_cross").addEventListener("click", closeNav);

function openNav() {
  document.getElementById("nav_list").style.cssText = "animation: open .5s forwards;";
}

function closeNav() {
  document.getElementById("nav_list").style.cssText = "animation: close .5s forwards;";
}
