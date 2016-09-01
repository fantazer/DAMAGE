$(document).ready(function(){

	//modal
	$('.get-modal').click(function(){
			$('.modal').bPopup({
				closeClass:'icon-times',
					position:['auto','auto'], // position center
					follow: [true,false],
					positionStyle: 'fixed'
			}); 
	})
	//calc
	$('.calc-block').click(function(){
		var  cost = $(this).data('calcprice');
		var  constPrice = 500;
		$('.calc-block__el input').change(function(){
			var numbCheck = $('.calc-block__el input').length;
			if(numbCheck  > 0 ){
				$('.calc-block__el input').each(function(){
					if ($(this).is(':checked')) {
						cost += $(this).data('cost');
						console.log(cost);
					};
					$('.calc-block__val  span').text(cost);
				})
			} else {
				$('.calc-block__val  span').text(0);
			}
		})

		/*$('.input_mo').change(function(){
			if (cost  != 0) {
				cost+=constRange;
			};
		})*/
		
	})
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

	//Responsive Table
	$('.table_price').stacktable();

	//Clients
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

var defaultSlider = function(element){
	$(element).owlCarousel({
		items:1,
	 	autoHeight : true,
	 	dots: false,
	 	autoplay : true,
	 	singleItem:true,
	 	nav:false,
	 	loop:true,
			navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']
	 	}
	);
}

defaultSlider(".slider");
defaultSlider(".questions--wraper");
	//animate header
	var shrinkHeader = 20;
	$(window).scroll(function() {
	    var scroll = $(this).scrollTop();
	      if ( scroll >= shrinkHeader ) {
	           var heightHeader=$('.header').height();
	           $('.header').addClass('shrink');
	           //$('.panel').addClass('shrink');
	           //$('.panel').css('top',heightHeader+'px');
	        }
	        else {
	            $('.header').removeClass('shrink');
	            //$('.panel').removeClass('shrink');
	        }
	});

	//Stick panel
	var heightHeader=$('.header').height();
	$(".panel").sticky({topSpacing:heightHeader});

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
		hideToggle('.header .icon-bars','.header-nav');
		hideToggle('.list-service .icon-bars','.list-service__content');
	}
	

	setInterval(function() {
		$('.panel__get').addClass('shake')
	}, 26000);
	
	setInterval(function() {
		$('.panel__get').removeClass('shake')
	}, 28000);	
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