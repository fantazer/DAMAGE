$(document).ready(function(){
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}
	if (isIE () == 9) {
		$('body').append('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>')
		$("html,body").css("overflow","hidden");
	}

	$(".client").owlCarousel({
		items:4,
		responsive : {
	 		0:{
			 	items : 3
		 	},
		 	768:{
			 	items : 4
		 	},
		 	960:{
			 	items : 6
		 	},
		 	
	  },
 		margin:50,
	 	autoHeight : true,
	 	dots: false,
	 	autoplay : true,
	 	singleItem:true,
	 	nav:true,
	 	loop:true,
			navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']
	 	}
	);

	//animate header
	var shrinkHeader = 600;
	  $(window).scroll(function() {
	    var scroll = $(this).scrollTop();
	      if ( scroll >= shrinkHeader ) {
	           $('.header').addClass('shrink');
	        }
	        else {
	            $('.header').removeClass('shrink');
	        }
	});
	/* ###### For SlideToggle Elements  ######*/
	var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}

	if ($(window).width()<768) {
		hideToggle('.icon-bars','.header-nav');
	}


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/
	

	
})