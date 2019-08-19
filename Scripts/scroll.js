window.addEventListener("hashchange", function() {
	if (window.location.hash !== "#contact" ){
		scrollBy(0, -63)
	}
})

// function checkHash(clickedHashName){
// 	if(clickedHashName === window.location.hash){
// 		window.history.back();
// 	}
// }
// const cells = document.getElementsByClassName("nav-link")
// for (let cell of cells) {
// 	if(!window.HashChangeEvent){
// 		cell.onclick = function() {
// 	  		console.log(event.oldURL);
// 	  		};
// 	}
// }

$( window ).resize(function() {
	var hamburgerMenuStatus = document.querySelector("button").classList.contains("collapsed");
	if(!hamburgerMenuStatus){
	    $(".show").removeClass("show")
	}
	// $(".show").collapse("hide");
});
$(document).mouseup(function(e) 
{
	if($(".navbar-toggler").css('display') === "block"){
	    $(".show").collapse("hide")
	}
});