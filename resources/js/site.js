$(document).ready(function() {
	$('.carousel').carousel({
	  	interval: 2700
	});
	
	$('.carousel-inner').swipe({
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('prev'); 
		},
		swipeRight: function() {
			$(this).parent().carousel('next'); 
		},
		threshold: 75
	});

	$('.fade-ani').each(function(index) {
	    $(this).delay(450 * index).fadeIn();
	});

	$('.width-ani').each(function(index) {
		var elem = $(this);

		setTimeout(function() {
			elem.animate({
				'width': elem.data('width') + '%'
			});
		}, 300 * index);
	});

	$('#to-top').click(function() {
		$('html, body').animate({
	        scrollTop: $('#header').offset().top
	    }, 1000);
	});

	$('#to-boxes').click(function() {
		$('html, body').animate({
	        scrollTop: $('#msg-to-clients').offset().top
	    }, 1000);
	});
});