$(document).ready(function () {

	$('.nav-link').on('mouseenter', event => {
		$(event.currentTarget).siblings().show();
	});

	$('.dropdown-menu').on('mouseleave', event => {
		$(event.currentTarget).hide();
	});

	$('.nav-link').on('click', event => {
		$(event.currentTarget).siblings().toggle();
	});

	$('.header-slide').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    arrows: true,
	    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left fa-4x' aria-hidden='true'></i></button>",
	    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right fa-4x' aria-hidden='true'></i></button>",
	    dots: true,
	    pauseOnHover: true,
	    responsive: [{
	      breakpoint: 480,
	      settings: {
	        arrows: false
	      }
	    }]
	});

	$('.count_this').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

});