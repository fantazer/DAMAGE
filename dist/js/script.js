$(document).ready(function(){function n(){var n=navigator.userAgent.toLowerCase();return n.indexOf("msie")!=-1&&parseInt(n.split("msie")[1])}9==n()&&($("body").append('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>'),$("html,body").css("overflow","hidden")),$(".client").owlCarousel({items:4,responsive:{0:{items:3},768:{items:4},960:{items:6}},margin:50,autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,nav:!0,loop:!0,navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']});var o=600;$(window).scroll(function(){var n=$(this).scrollTop();n>=o?$(".header").addClass("shrink"):$(".header").removeClass("shrink")});var s=function(n,o){$(n).click(function(n){n.stopPropagation(),$(o).slideToggle("fast")}),$(o).on("click",function(n){n.stopPropagation()}),$(document).on("click",function(){$(o).hide()})};$(window).width()<768&&s(".icon-bars",".header-nav")});