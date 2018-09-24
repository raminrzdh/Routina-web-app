(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	/*=============Testimonial=============*/
    	$(".selise-testimonial").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
		});

    	/*=============Magnific Popup=============*/
		$(".hero-video-play-btn").magnificPopup({
		 	disableOn: 700,
        	type: 'iframe',
         	mainClass: 'mfp-fade',
         	removalDelay: 160,
          	preloader: false,
          	fixedContentPos: false
		});

		$(".video-play-btn").magnificPopup({
		 	disableOn: 700,
        	type: 'iframe',
         	mainClass: 'mfp-fade',
         	removalDelay: 160,
          	preloader: false,
          	fixedContentPos: false
		});

		/*==============Init Wow JS==============*/
		new WOW().init();


		/*==============Scroll IT==============*/
		$.scrollIt({
		  upKey: 38,
		  downKey: 40,
		  easing: 'linear',
		  scrollTime: 1200,
		  activeClass: 'active',
		  onPageChange: null,
		  topOffset: 0
		});

		
		/*=============Header Animation==========*/
		function selise_control(){
			if ($('.navbar').offset().top > 200) {
            	$('.navbar-fixed-top').addClass('top-navigation-animate');
	        }
	        $(window).scroll(function () {
	            if ($('.navbar').offset().top > 200) {
	                $('.navbar-fixed-top').addClass('top-navigation-animate');
	            } else {
	                $('.navbar-fixed-top').removeClass('top-navigation-animate');
	            }
	        });
		}

		selise_control();
	
    });

}(jQuery));	