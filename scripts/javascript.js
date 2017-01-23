$(".menuItem").hover(function() {
	$("ul:first",this).slideDown( "400");}
	, function(){
		$("ul:first",this).slideUp( "400");});

$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		accessibility: true,
		arrows: true,
		variableWidth: false
	});
});

$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		accessibility: true,
		arrows: true,
		variableWidth: false
	});
});
