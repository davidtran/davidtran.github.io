// Header Animations

$(window).bind("load", function() {
	
$(".header_device_loading_icon").fadeOut(400);
$(".header_device img").delay(300).fadeIn(400);

$(".section_one_device .device_loading_icon, .section_two_device .device_loading_icon").fadeOut(400);
$(".section_one_device img, .section_two_device img").delay(300).fadeIn(400);

});

$(document).ready(function(){


// Colour Switch
 
$('a.switch_purple').click(function() {
	$('body').removeClass();
});
$('a.switch_red').click(function() {
	$('body').removeClass().addClass('red');
});
$('a.switch_blue').click(function() {
	$('body').removeClass().addClass('blue');
});
$('a.switch_orange').click(function() {
	$('body').removeClass().addClass('orange');
});
$('a.switch_green').click(function() {
	$('body').removeClass().addClass('green');
});
$('a.switch_black').click(function() {
	$('body').removeClass().addClass('black');
});
$('a.switch_pink').click(function() {
	$('body').removeClass().addClass('pink');
});
$('a.switch_grey').click(function() {
	$('body').removeClass().addClass('grey');
});



});
