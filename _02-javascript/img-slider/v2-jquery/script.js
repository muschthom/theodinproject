sliderInt = 1; 
sliderNext = 2;

$(document).ready(function() {
	$("#1").fadeIn(1000);
	startSlider(); 
}); 

function startSlider() {
	count = $("#slider > img").size(); 

	loop = setInterval(function() {
		$("img").fadeOut('slow'); 
		$("#" + sliderNext).fadeIn('slow'); 
		sliderInt = sliderNext; 
		sliderNext = sliderNext +1; 
		if (sliderNext > 5) {
			sliderNext = 1; 
		}
	}, 3000);
};

function prev() {
	newSlide = sliderInt-1; 
	showSlide(newSlide); 
}

function next() {
	newSlide = sliderInt+1; 
	showSlide(newSlide); 
}

function showSlide(id) {
	stop;stopLoop(); 
	if (id > 4) {
		id = 1; 
	} else if (id < 1) {
		id = 4; 
	}
	$("img").fadeOut('slow'); 
		$("#" + id).fadeIn('slow'); 
		sliderInt = id; 
		sliderNext = id +1; 
		startSlider(); 
}

function stopLoop() {
	window.clearInterval(loop); 
}

$("img").hover(
	function(){
		stopLoop(); 
	}, 
	function(){
		startSlider(); 
	}
); 