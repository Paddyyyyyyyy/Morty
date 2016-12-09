$("h1").delay(1000).fadeIn(1000);
}

$(document).ready(function(){
	$("#myCarousel").carousel();
	
	$(".item1").click(function(){
		$("#myCarousel").carousel(0);
	});
	$(".item2").click(function(){
		$("#myCarousel").carousel(1);
	});
	$(".item3").click(function(){
		$("#myCarousel").carousel(2);
	});
	$(".item4").click(function(){
		$("#myCarousel").carousel(3);
	});
	
	$(".left").click(function(){
		$("#myCarousel").carousel("prev");
	});
	$(".right").click(function(){
		$("#myCarousel").carousel("next");
	});
});


$(document).ready(function(){
$(".dropdown-toggle").dropdown();
});
}
$(function() {
$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html,body').animate({
scrollTop: target.offset().top
}, 1000);
return false;
}
}
});
});



function Scroll(){
var top = document.getElementById('header');
var ypos = window.pageYOffset;
if(ypos > 100) {
top.style.height = "50px"; 
}
else{
top.style.height = "50px";
}
}
window.addEventListener("scroll",Scroll);
}