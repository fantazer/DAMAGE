$(document).ready(function(){function e(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1&&parseInt(e.split("msie")[1])}9==e()&&($("body").append('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>'),$("html,body").css("overflow","hidden")),$(".table_price").stacktable(),$(".client").owlCarousel({items:4,responsive:{0:{items:3},768:{items:4},960:{items:6}},margin:50,autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,nav:!0,loop:!0,navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']});var s=function(e){$(e).owlCarousel({items:1,autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,nav:!1,loop:!0,navText:['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']})};s(".slider"),s(".questions--wraper");var a=100;$(window).scroll(function(){var e=$(this).scrollTop();if(e>=a){$(".header").height();$(".header").addClass("shrink")}else $(".header").removeClass("shrink")});var n=$(".header").height();$(".panel").sticky({topSpacing:n});var t=function(e,s){$(e).click(function(e){e.stopPropagation(),$(s).slideToggle("fast")}),$(s).on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(s).hide()})};$(window).width()<768&&t(".header .icon-bars",".header-nav"),t(".list-service .icon-bars",".list-service__content"),setInterval(function(){$(".panel__get").addClass("shake")},16e3),setInterval(function(){$(".panel__get").removeClass("shake")},18e3)});